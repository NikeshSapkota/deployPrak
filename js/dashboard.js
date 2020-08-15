$(function () {

    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true

    });

    let tblBody = $("#tablemanipulate");
    function rowTemplate(dashboard) {
        let oneRow = "<tr><td>" + dashboard.itemname + "</td><td>" + dashboard.quantity + "</td><td>" + dashboard.price + "</td><td>" + dashboard.date + "</td>";
        oneRow += '<td><button type="button" class="btn btn-danger edit" id="editgarr" dashboard_id=' + dashboard._id + '>Edit</button></td><td><button type="button" class="btn btn-danger delete" id="deletegarr" dashboard_id=' + dashboard._id + '>Delete</button></td> </tr>';
        return oneRow;
    }

    $.ajax({
        type: 'GET',
        url: HOST_URL + '/dashboard',
        success: function (dashboard) {
            let myRows = [];
            $.each(dashboard, function (index, dashboard) {
                myRows.push(rowTemplate(dashboard));
            });
            tblBody.append(myRows);
        },
        error: function () {
            // alert('Something went wrong!');
        }
    });


    $("#add").on('click', function () {
        let dashboard = {
            itemname: $("#name").val(),
            quantity: $("#quantity").val(),
            price: $("#price").val(),
            date: $("#date").val()
        };
        
        $.ajax({
            type: 'POST',
            url: HOST_URL + '/dashboard',
            data: dashboard,
            success: function (dashboard) {
                tblBody.append(rowTemplate(dashboard));
                $('#dashboard-form').trigger('reset');
                alert("Sucessfully Added");
            },
            error: function () {
                alert("Fill all the form fields!");
                $('#dashboard-form').trigger('reset');
            }
        });
    });

    // using deligates
    tblBody.on('click', '#deletegarr', function () {
        if (confirm("Do you want to delete this entry?")) {
            $.ajax({
                type: 'DELETE',
                url: HOST_URL + '/dashboard' + $(this).attr('dashboard_id'),
                success: function () {
                    location.reload();
                }
            })
        }
    });

    let itemId;
    tblBody.on('click', '.edit', function () {
        itemId = $(this).attr('dashboard_id');
        $.ajax({
            type: 'GET',
            url: HOST_URL + '/dashboard' + itemId,
            success: function (dashboard) {
                // console.log(dashboard);
                $('#name').val(dashboard.itemname);
                $('#quantity').val(dashboard.quantity);
                $('#price').val(dashboard.price);
                $('#date').val(dashboard.date);
            },
            error: function () {
                console.log("Something went wrong!");
            }
        });
    });

    $('#update-btn').on('click', function () {
        let dashboard = {
            itemname: $("#name").val(),
            quantity: $("#quantity").val(),
            price: $("#price").val(),
            date: $("#date").val()
        };
        $.ajax({
            type: 'PUT',
            url: HOST_URL + '/dashboard' + itemId,
            data: dashboard,
            success: function (dashboard) {
                e.preventDefault();
                location.reload();
            },
            error: function () {
                console.log("Something went wrong!");
            }
        })

    });   

});