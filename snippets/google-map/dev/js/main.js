// init
window.onload = function(){
  window.googleMap = new gMap('.js-map', {
    markers: [
      {
        position: {
          lat: 38.89734567323064,
          lng: -77.03656196594238
        },
        title: 'iDeus',
        draggable: false,
        animation: google.maps.Animation.DROP,
        infoWindow: {
          content: '<img src="src/img/logo.png" alt=""/>'
        }
      }
    ]
  });
};