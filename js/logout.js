$(function () {

    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true

    });

    // function add(forNavi) {
    //     $("#navUsername").text(forNavi.firstname);
    // }

    // $.ajax({
    //     type: "GET",
    //     url: "http://localhost:3000/profile/profileMe",
    //     success: function (me) {
    //         let forNavi = me;
    //         add(forNavi);
    //     },

    //     error: function () {
    //         alert("Something Wrong");
    //         // var url = "index.html";
    //         // $(location).attr("href", url);
    //     }
    // });

    $("#logout-btn").on('click', function (event) {
        if (confirm("Do you really want to Logout?")) {
            $.ajax({
                type: 'GET',
                url: HOST_URL + '/users/logout',
                
                success: function () {
                    // alert("Logging Out Succesfully");
                    window.location = "index.html";
                },
                error: function () {
                    alert("Not Logged in Yet");

                }
            })
        }
    });

});