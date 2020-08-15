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
        url: HOST_URL + '/profile/profileMe',
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