//Jquery script to submit form

function restaurantSelection() {
    var formSelected = $('#selectedOpt'),
        btnSubmit = $('.goBtn');

    window.localStorage.clear(); //clear localStorage just in case

    // console.log(formSelected);
    btnSubmit.on('click', function() {
        var test = formSelected.val();
        window.localStorage.setItem('rest', test); //get the restaurant selected
        // var value = window.localStorage.getItem('rest');
    }); 
}


///////////////////////////////////////////////////////////////////
// VALIDATE THE REGISTRATION FORM
///////////////////////////////////////////////////////////////////

function validateFormRegistration() {
    $("#newRestaurant").validate();
}

///////////////////////////////////////////////////////////////////
// SUBMIT REGISTRATION FORM
///////////////////////////////////////////////////////////////////

function submitForm() {
    $('#btnRegister').click(function() {
        var data = $('#newRestaurant').serialize();
        // alert(data);
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/process.php", //process to mail
            data: data,
            success: function(msg) {
                // $("#thanks").html(msg); //hide button and show thank you
                // $("#form-content").modal('hide'); //hide popup
                // $('#newRestaurant').reset();
                $('#newRestaurant').find('input').val('');
                alert('Your message has been sent!!');
            },
            error: function() {
                alert('failure');
            }
        });
    });
}

//Wait for the device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    restaurantSelection();
    validateFormRegistration();
    submitForm();
}

// $(document).ready(function() {
//     validateFormRegistration();
// });
