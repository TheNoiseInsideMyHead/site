window.onload = function () {
    //TakeObjeckt//
    function get(id) {
        return document.getElementById(id);
    }
    //UpdateCurrentPosition//
    navigator.geolocation.getCurrentPosition(updatePosition);

    function updatePosition(pos) {
        var position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        //CreateGoogleMaps//
        var map = new google.maps.Map(get('map'), {
            center: position,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        //CreateMarker//    
        var marker = new google.maps.Marker({
            position: position,
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
    //jQuery Scroll//
    $(window).scroll(function(){
        if($(window).scrollTop() >  $('div.row > div.boxShTop').offset().top + 50){
            $('.marg').addClass('navbar-fixed-top');
            $('.marg').addClass('toTop');
            $('.backgr').css("margin-top","6%");
            
    }else{
        $('.marg').removeClass('navbar-fixed-top');
        $('.marg').removeClass('toTop');
        $('.backgr').css("margin-top","0");

                     }
    });
    
}
