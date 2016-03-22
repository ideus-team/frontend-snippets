window.gMap = function(selector, options){
  var ctor = this;
  
  // default center - Washington, White House
  ctor.defaultLatLng = {
    lat: 38.89734567323064,
    lng: -77.03656196594238
  };
  // selector
  ctor.selector = typeof selector === 'object' ? selector : document.querySelector(selector);
  
  // extend option fn
  ctor.extendOptions = function(_defaults, _options) {
    for (var p in _options) {
      try {
        if ( _options[p].constructor == Object ) {
          _defaults[p] = ctor.extendOptions(_defaults[p], _options[p]);
        } else {
          _defaults[p] = _options[p];
        }
      } catch(e) {
        _defaults[p] = _options[p];
      }
    }
    return _defaults;
  };
  
  ctor.data = function(){
    return ctor.selector.dataset;
  };
  
  ctor.getOption = function(option){
    return parseInt(this.data()[option]) || false;
  };
  
  ctor.center = function(){
    var center = new google.maps.LatLng(
      ctor.getOption('lat') || ctor.defaultLatLng.lat,
      ctor.getOption('lng') || ctor.defaultLatLng.lng
    );
    return center;
  };
  
  ctor.mapMarkers = [];
  
  // map options  
  ctor.options = ctor.extendOptions({
    zoom: ctor.getOption('zoom') || 14,
    center: ctor.center(),
    scrollwheel: ctor.getOption('scrollwheel') || false,
    disableDefaultUI: ctor.getOption('disableDefaultUI') || true,
    zoomControl: ctor.getOption('zoomControl') || true,
    mapTypeControl: ctor.getOption('mapTypeControl') || true,
    scaleControl: ctor.getOption('scaleControl') || true,
    streetViewControl: ctor.getOption('streetViewControl') || true,
    rotateControl: ctor.getOption('rotateControl') || true,
    fullscreenControl: ctor.getOption('fullscreenControl') || true,
    
    // markers objects
    markers: [],
    markerIcon: null,
    
    // callbacks
    drag: function(map){},
    dragend: function(map){},
    dragstart: function(map){},
    mapClick: function(event, pos, map){},
    mousemove: function(event, pos, map){},
    mouseout: function(event, pos, map){},
    mouseover: function(event, pos, map){},
    rightclick: function(map){},
    zoomChange: function(map, zoom){},
    markerClick: function(marker){},
  }, options);
  
  // add new marker to the map
  ctor.setMarker = function(marker){
    if ( marker.infoWindow ){
      ctor.createInfoWindow(marker);
    }
    marker.setMap(ctor.map);
  };
  
  ctor.addMarker = function(marker){
    var newMarker = new google.maps.Marker(marker);
    
    if ( newMarker.infoWindow ){
      ctor.createInfoWindow(newMarker);
    }
    ctor.mapMarkers.push(newMarker);
    ctor.setMarker(newMarker);
  };
  
  ctor.createInfoWindow = function(marker){
    var infowindow = new google.maps.InfoWindow({
      content: ctor.getInfoWindow(marker)
    });
    marker.addListener('click', function(){
      infowindow.open(ctor.map, marker);
      ctor.options.markerClick.call(ctor, marker);
    });
  };
  
  ctor.getInfoWindow = function(marker){
    var info = marker.infoWindow, infoContent;
    var type = info.type || 'html'; // 'html' || 'image' || 'video' || 'selector' (default 'html')
    infoContent = ctor['getInfoWin_'+type](info);
    return infoContent;
  };
  
  ctor.getInfoWin_image = function(info){
    return '<img src="'+info.content+'" alt=""/>';
  };

  ctor.getInfoWin_html = function(info){
    return info.content;
  };
  
  ctor.getInfoWin_selector = function(info){
    return document.querySelector(info.content).innerHTML;
  };
  
  ctor.getInfoWin_video = function(info){
    return '<video src="'+info.content+'"></video>';
  };
  
  ctor.createMarkers = function(){
    if ( ctor.options.markers.length ){
      ctor.deleteMarkers();
      ctor.options.markers.forEach(function(marker, index){
        marker.icon = marker.icon || ctor.options.markerIcon;
        ctor.mapMarkers[index] = new google.maps.Marker(marker);
        ctor.setMarker(ctor.mapMarkers[index]);
      });
    }
  };
  
  ctor.deleteMarkers = function(){
    if ( ctor.mapMarkers ){
      for (var i = 0; i < ctor.mapMarkers.length; i++) {
        ctor.mapMarkers[i].setMap(null);
        ctor.mapMarkers.splice(i, 1);
      }      
    }
  };
  
  ctor.deleteMarker = function(index){
    if ( ctor.mapMarkers[index] ){
      ctor.mapMarkers[index].setMap(null);
      ctor.mapMarkers.splice(index, 1);
    }
  };
  
  ctor.create = function(){
    ctor.map = new google.maps.Map(ctor.selector, ctor.options);
    ctor.mapEvents();
    ctor.createMarkers();
  };
  
  ctor.mapEvents = function(){    
    ctor.map.addListener('drag', function(){ ctor.options.drag.call(ctor, ctor.map); });
    ctor.map.addListener('dragend', function(){ ctor.options.dragend.call(ctor, ctor.map); });
    ctor.map.addListener('dragstart', function(){ ctor.options.dragstart.call(ctor, ctor.map); });
    ctor.map.addListener('click', function(e){ ctor.options.mapClick.call(ctor, e, e.latLng.toJSON(), ctor.map); });
    ctor.map.addListener('mousemove', function(e){ ctor.options.mousemove.call(ctor, e, e.latLng.toJSON(), ctor.map); });
    ctor.map.addListener('mouseover', function(e){ ctor.options.mouseover.call(ctor, e, e.latLng.toJSON(), ctor.map); });
    ctor.map.addListener('rightclick', function(e){ ctor.options.rightclick.call(ctor, e, e.latLng.toJSON(), ctor.map); });
    ctor.map.addListener('zoom_changed', function(e){ ctor.options.zoomChange.call(ctor, ctor.map, ctor.map.getZoom()); });
  };
  
  ctor.goCenter =  function(){
    ctor.map.setCenter(ctor.options.center);
  };
  
  ctor.create();
  return ctor;
};