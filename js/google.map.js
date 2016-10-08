
var google;

function init() {
    var myLatlng = new google.maps.LatLng(-33.9196, 151.0768);
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 10,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"all",
                    "elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ef8020"},{"lightness":0}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ef8020"},{"lightness":80}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFF"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#FFF"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#FFF"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#FFF"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#FFF"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#FFF"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#FFF"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#003f5f"},{"lightness":17}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('fh5co-map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Sydney'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                //icon: 'images/loc_30.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);