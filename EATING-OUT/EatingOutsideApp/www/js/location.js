//GEOLOCATION APP

    // Wait for device API libraries to load
    //
      document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
      function onDeviceReady() {
          var position = { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true };
          navigator.geolocation.getCurrentPosition(onSuccess, onError, position);

      }

      // onSuccess Geolocation
      //
      function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />';

        //Get the coordinates of the current position
            var latitudePos = position.coords.latitude;
            var longitudePos = position.coords.longitude;


            var mapOptions = {
              center: { lat: latitudePos, lng: longitudePos},
              zoom: 13
            };

            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            var pos = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);

            //Put a marker on the place
            var marker = new google.maps.Marker({
                position: pos,
                map: map
            });

            //Shows the information that you want to display about the place
            // var infowindow = new google.maps.InfoWindow({
            //     map: map,
            //     position: pos,
            //     content: 'Im fucking awesome!!!'
            // });
      

            //////////////////////////////////////////////////
            //CALCULATION ROUTE
            //////////////////////////////////////////////////

            // var start end
            var directionsDisplay;
            var directionsService = new google.maps.DirectionsService();
            var map;


            directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(map);

            var end = new google.maps.LatLng(51.4735304, -0.0571374);
            var request = {
                  origin: pos,
                  destination:end,
                  travelMode: google.maps.TravelMode.DRIVING
            };

            // function calcRoute() {
            directionsService.route(request, function(response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
              }
            });

      }

    // onError Callback receives a PositionError object
    //
        function onError(error) {
            if (error.code === 3) {
                alert ('Enchufa el gps cojones!');
            } else {
                alert(error.code);
                //alert('code: '    + error.code    + '\n' +
                //'message: ' + error.message + '\n');
            }

        }


