$(function () {

    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true

    });


    $("#signup-btn").on('click', function (e) {
        e.preventDefault();
        let users = {
            firstname: $("#fname").val(),
            lastname: $("#lname").val(),
            username: $("#uname").val(),
            password: $("#pass").val()
        };

        $.ajax({
            type: 'POST',
            url: HOST_URL + 'users/signup',
            data: users,
            success: function (user) {
                $('#register-form').trigger('reset');
                // alert("Sucessfully Registered");
                window.location = "index.html";
            },
            error: function () {
                alert("Registeration Failed");
                $('#register-form').trigger('reset');
            }
        });
    });

});


