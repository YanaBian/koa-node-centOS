const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router');
const convert = require('koa-convert');
const path = require('path');
const render = require('koa-swig');
const serve = require('koa-static');
const axios = require('axios');
const controller = require('./public/scripts/controller');
var co = require('co');
var qs = require('qs');
const koaBody = require('koa-body');//koa-body模块可以用来从 POST 请求的数据体里面提取键值对

app.context.render = co.wrap(render({
    root: path.join(__dirname, './views'),
    autoescape: true,
    // cache:'menory',
    ext: 'html',
    writeBody: false
}));
app.use(koaBody());
app.use(router(_ => {
    _.get('/', (ctx, next) => {
        ctx.body = 'this is a koa2 demo';
    })
    _.get('/index', async(ctx, next) => {
        ctx.body = await ctx.render('books.html',{
          title:'首页'
        });
    })
    _.get('/editBook', async(ctx, next) => {
        ctx.body = await ctx.render('editBook.html');
    })
     _.get('/get-books', async(ctx, next) => {
        const { data } = await axios.get('http://localhost/gong/web/index.php?r=site/get-books');
        ctx.body = data;
    })
     _.post('/creatBook', async(ctx, next) => {
      const {data} = await axios.post('http://localhost/gong/web/index.php?r=site/edit-book',qs.stringify(ctx.request.body));
      ctx.body =  data;
    })
     _.delete('/deleteBook', async(ctx, next) => {
      const {data} = await axios.del('http://localhost/gong/web/index.php?r=site/delete-book&id=7');
      ctx.body =  data;
    })
}));
app.use(convert(serve(path.join(__dirname, './public')))); //静态资源文件
app.listen(3000, () => {
    console.log('Server Start');
});
