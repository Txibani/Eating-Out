//Wait for the device API libraries to load

var latitud,
    longitud;
function getDataJson() {
    var jsonData;
        $.ajax({
            //type: "POST",
            url: "http://www.mocky.io/v2/5592ca4b3c82b2730ceea66f",
            dataType: "json",
            success: function(response) {
                jsonData = response;
                var value = window.localStorage.getItem('rest'),/// Get value local storage, restaurant selected
                    selectedRestaruantTitle = $('#displayDataMenu .titleInHere'),
                    menuStarters = $('#displayDataMenu .menuImage'),
                    aboutRestSelected = $('#displayAbout .titleInHere');

                    selectedRestaruantTitle.html(value);
                    aboutRestSelected.html(value);
                    var i,
                        lengthJson = jsonData.restaurants.length; // Get selected restaurant info

                    for (i=0 ; i < lengthJson ; i++) {
                        var getRestJson = jsonData.restaurants[i].name;
                        if (getRestJson == value) {
                            menuStarters.html(jsonData.restaurants[i].menu); // Get menu from selected restaurant

                            // Menu data
                            $('#displayDataMenu .starter1').html(jsonData.restaurants[i].menu[0].starter1);
                            $('#displayDataMenu .starter2').html(jsonData.restaurants[i].menu[0].starter2);
                            $('#displayDataMenu .starter3').html(jsonData.restaurants[i].menu[0].starter3);
                            $('#displayDataMenu .main1').html(jsonData.restaurants[i].menu[0].main1);
                            $('#displayDataMenu .main2').html(jsonData.restaurants[i].menu[0].main2);
                            $('#displayDataMenu .main3').html(jsonData.restaurants[i].menu[0].main3);
                            $('#displayDataMenu .dessert1').html(jsonData.restaurants[i].menu[0].dessert1);
                            $('#displayDataMenu .dessert2').html(jsonData.restaurants[i].menu[0].dessert2);
                            $('#displayDataMenu .dessert3').html(jsonData.restaurants[i].menu[0].dessert3);

                            // About data
                            $('#displayAbout .about').html(jsonData.restaurants[i].about);

                            //Get location of each restaurant
                            latitud = jsonData.restaurants[i].latitude;
                            longitud = jsonData.restaurants[i].longitude;

                            //Get event info
                            $('#displayEvents .eventRest').html(jsonData.restaurants[i].events);

                        }
                    }

            },
            error: function() {
                alert('failure oookhkjhj');
                console.log('fallo otra vezzz');
            }
        });
}

////Wait for the device API libraries to load
//document.addEventListener("deviceready", onDeviceReady, false);
//
//function onDeviceReady() {
//    getDataJson();
//}


$(document).ready(function(){
    getDataJson();
});

