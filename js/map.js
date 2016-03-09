//Google Map Skin - Get more at http://snazzymaps.com/
var lon = 44.2992301, lat = 8.4516016, loc = new google.maps.LatLng(lon, lat);

var myOptions = {
    zoom: 15,
    center: loc,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    styles: [{"featureType":"water","stylers":[{"color":"#009BC2"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);

var marker = new google.maps.Marker({
      position: loc,
      map: map,
      url: 'https://www.google.it/maps/dir/Campus+Savona,+Via+Magliotto,+2,+17100+Savona+SV/@44.2992301,8.4516016,15z/data=!4m7!4m6!1m5!1m1!1s0x12d2e23925cd3dbd:0xed60a043820247bb!2m2!1d8.4516016!2d44.2992301'
   });

google.maps.event.addListener(marker, 'click', function() {
  window.open(marker.url, '_blank');
});

