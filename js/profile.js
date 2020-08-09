$(function () {

    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true

    });

    function get(forNavi) {
        $("#navUsername").text(forNavi.firstname);
    }

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/profile/profileMe",
        success: function (me) {
            let forNavi = me;
            get(forNavi);
        },

        error: function () {
            // alert("Something Wrong");
            var url = "index.html";
            // $(location).attr("href", url);
        }
    });


});