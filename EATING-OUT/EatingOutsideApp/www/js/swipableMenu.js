//OPTION 1


$(document).ready(function() {

    $('#sidebar-toggle').click(function() {

        var swipMenu = $('#sidebar');

        if ($(swipMenu).hasClass('open-sidebar')) {
            swipMenu.removeClass('open-sidebar').addClass('close-sidebar');
        }
        else if ($(swipMenu).hasClass('close-sidebar')) {
            swipMenu.removeClass('close-sidebar').addClass('open-sidebar');
        }
        else {
            swipMenu.addClass("open-sidebar");
        }

    });

//    $(".swipe-area").swipe({
//        swipeStatus:function(event, phase, direction, distance, duration, fingers)
//        {
//            if (phase=="move" && direction =="right") {
//                $("#sidebar").addClass("open-sidebar");
//                return false;
//            }
//            if (phase=="move" && direction =="left") {
//                $("#sidebar").removeClass("open-sidebar");
//                return false;
//            }
//        }
//    });


});

