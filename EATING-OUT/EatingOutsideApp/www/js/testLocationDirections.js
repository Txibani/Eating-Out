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

            // Put a marker on the place
            var marker = new google.maps.Marker({
                position: pos,
                map: map
            });


            //Shows the information that you want to display about the place
            // var infowindow = new google.maps.InfoWindow({
            //     map: map,
            //     position: pos,
            //     content: pos.formatted_address
            // });
      
            // $('#cuAddress').html(pos.formatted_address);
            //////////////////////////////////////////////////
            //CALCULATION ROUTE
            //////////////////////////////////////////////////

            // var start end
            var directionsDisplay;
            var directionsService = new google.maps.DirectionsService();
            var map;


            directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(map);

            var end = new google.maps.LatLng(51.476172, -0.0292657); 
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

            //Reverse Geocoding

            // var infowindow = new google.maps.InfoWindow();

            // infowindow.setContent(pos.formatted_address);
            // infowindow.open(map, marker);

            var geocoder;
            var infowindow = new google.maps.InfoWindow();
            geocoder = new google.maps.Geocoder();

            geocoder.geocode({'pos': pos}, function() {

            infowindow.setContent(pos.formatted_address);
            // infowindow.open(map, marker);

            });
      }

    // onError Callback receives a PositionError object
    //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }






