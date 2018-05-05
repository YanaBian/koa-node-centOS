function HtmlInsertScriptPlugin(options) {
    // Configure your plugin with options...
}

HtmlInsertScriptPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', (compilation) => {
        console.log('The compiler is starting a new compilation...[html-insert-script-plugin]');

        compilation.plugin(
            'html-webpack-plugin-after-html-processing',
            (data, cb) => {
                console.log(data.assets.js);
                let scripts = '';
                data.assets.js.map(script => {
                    scripts += `<script type="text/javascript" src="${script}"></script>`;
                });
                console.log(data);
                // let styles = '';
                // data.assets.css.map(style => {
                //     styles += `<link href="${style}" rel="stylesheet">`;
                // });
                data.html = data.html.replace(/<!--script-->/g, scripts);
                // data.html = data.html.replace(/<!--link-->/g, styles);
                console.log(data);
                cb();
            }
        )
    })
};


module.exports = HtmlInsertScriptPlugin;