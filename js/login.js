$(function () {

    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true

    });

    $("#login-btn").on('click', function (event) {
        event.preventDefault();
        let users = {
            username: $("#uname").val(),
            password: $("#pass").val()
        };

        $.ajax({
            type: 'POST',
            url: HOST_URL + '/users/login',
            data: users,
            success: function (user) {
                $('#login-form').trigger('reset');
                // alert("Login Succesfully");
                window.location = "dashboard.html";
            },
            error: function () {
                alert("Login Failed");
                $('#login-form').trigger('reset');
            }
        });
    });

});