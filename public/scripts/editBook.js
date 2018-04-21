$('#update-book').on('click', function() {
    
    var formData = $(this).closest('form').serialize();
    console.log(formData);
    axios.post('/creatBook', formData)
        .then(function(response) {
                layer.alert(response.data.message, function() {
                    window.location.href = window.location.origin + '/index';
                });
        })
        .catch(function(error) {
            console.log(error);
        });
})
