//angularJs//
var app = angular.module("SampleApp", []);

app.controller("SampleAppCtrl", function ($scope) {

    $scope.url = "footer.html";
});
//angularJs//
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
  
    //jQuery Scroll//

    $(window).scroll(function () {
        header();
    });
 
}

function header() {

    if ($(window).scrollTop() > $('div.row > div.boxShTop').offset().top + 50) {
        $('.marg').addClass('navbar-fixed-top');
        $('.marg').addClass('toTop');
        $('.backgr').css("margin-top", "50px");

    } else {
        $('.marg').removeClass('navbar-fixed-top');
        $('.marg').removeClass('toTop');
        $('.backgr').css("margin-top", "0");
    }
}






