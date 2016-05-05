window.onload = function () { 
    //TakeObjeckt//
    function get(id) {
        return document.getElementById(id);
    }
    //UpdateCurrentPosition//
    navigator.geolocation.getCurrentPosition(updatePosition);

    function updatePosition(pos) {
        mypos = {
            lat: 50.447,
            lng: 30.46068
        };
        //CreateGoogleMaps//
        var map = new google.maps.Map(get('map'), {
            center: mypos,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        //CreateMarker//    
        var marker = new google.maps.Marker({
            position: mypos,
            map: map,
            title: 'Кликните для приближения'
        });
        marker.addListener('click', function () {
            map.setZoom(8);
        });
        map.addListener('center_changed', function () {
            window.setTimeout(function () {
                map.panTo(marker.getPosition());
            }, 3000);
        });

    }
  
}



