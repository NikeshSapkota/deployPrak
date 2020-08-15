$(function () {

    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true

    });

    function get(forNaviC) {
        $("#fname").val(forNaviC.firstname);
        $("#lname").val(forNaviC.lastname);
        // $("#uname").val(forNaviC.username);
    }

    $.ajax({
        type: "GET",
        url: HOST_URL + '/profile/profileMe',
        success: function (meC) {
            let forNaviC = meC;
            get(forNaviC);
            // console.log(forNaviC);
        },

        error: function () {
            alert("Something Wrong");

        }
    });


    $("#update-btn").on('click', function (e) {
        e.preventDefault();
        let users = {
            firstname: $("#fname").val(),
            lastname: $("#lname").val()
            // username: $("#uname").val()
        };

        $.ajax({
            type: 'PUT',
            url: HOST_URL + '/profile/updateProfile',
            
            data: users,
            success: function (user) {
                $('#update-form').trigger('reset');
                // alert("Sucessfully Updated");
                window.location = "dashboard.html";
                // window.location = "index.html";
            },
            error: function () {
                alert("Update Failed");
                $('#update-form').trigger('reset');
            }
        });
    });

    $("#cancle-btn").on('click', function (e) {
        e.preventDefault();
        window.location = "dashboard.html";
    });

});