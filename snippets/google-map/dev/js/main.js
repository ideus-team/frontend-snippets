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

/*
  INIT example
  can be with options or without them
    1) var myGoogleMap = new gMap('.js-map');
    2) var myGoogleMap = new gMap('.js-map', options);
    3) var myGoogleMap = new gMap('.js-map', {
         zoom: 10
       });

  OPTIONS
  can be in data attributes ( data-zoom="5" data-lat="35.231534" data-lng="35.231534" )
  
   - zoom: number (default 14); 
   - center: { lat: float number, lng: float number } object; 
   - scrollwheel: boolean (default false);
   - zoomControl: boolean (default true);
   - mapTypeControl: boolean (default true);
   - scaleControl: boolean (default true);
   - streetViewControl: boolean (default true);
   - rotateControl: boolean (default true);
   - fullscreenControl: boolean (default true);
   - markerIcon: 
      string: 'URL_TO_IMAGE'
      object:
      {
        url: string,
        size: new google.maps.Size(WIDTH, HEIGHT),
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base
        anchor: new google.maps.Point(0, HEIGHT)
      }
  
   - markers: objects in array, you can add any options
      example: [
        {
          position: {
            lat: float number 38.89734567323064,
            lng: float number -77.03656196594238
          },
          title: string 'iDeus',
          draggable: false || true,
          animation: 1 || 2 || 3 || 4,
          infoWindow: {
            type: 'html' || 'selector' || 'image' || 'video'
            content: string html || string selector || 'IMAGE_PATH' || 'VIDEO_PATH'
          }
          ...
        }
      ]

  
  CALLBACKS
  this - constructor with all options and functions
  
    drag: function(map){} - map object
    dragend: function(map){} - map object
    dragstart: function(map){} - map object
    mapClick: function(event, pos, map){} - event object, position, map object
    mousemove: function(event, pos, map){} - event object, position, map object
    mouseout: function(event, pos, map){} - event object, position, map object
    mouseover: function(event, pos, map){} - event object, position, map object
    rightclick: function(map){}
    zoomChange: function(map, zoom){} - map object, zoom number
    markerClick: function(marker){} - current marker
  
  METHODS
    example:
      var myMap = new gMap('.js-map');
      myMap.METHOD_NAME(params);
    
    myMap.mapMarkers = array, that have all markers on map
    
    - addMarker(marker) - add new marker to map
    - deleteMarkers() - delete all markers from the map
    - deleteMarker(index) - delete all marker by 'index' from the map
    - center() - return center of the map
    - goCenter() - reposition your view on the center of the map
*/