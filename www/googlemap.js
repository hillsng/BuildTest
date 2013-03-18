
function GoogleMap(){
    
    this.initialize = function(){
        var map = showMap();
        addMarkersToMap(map);
    }
    
    var addMarkersToMap = function(map){
        var mapBounds = new google.maps.LatLngBounds();
        
                                      
        var latitudeAndLongitudeOne = new google.maps.LatLng('43.224248','-87.985476');
        
        var markerOne = new google.maps.Marker({
                                               position: latitudeAndLongitudeOne,
                                               map: map 
                                               });
        
        var latitudeAndLongitudeTwo = new google.maps.LatLng('43.1827', '-87.901703');
        
        var markerTwo = new google.maps.Marker({
                                               position: latitudeAndLongitudeTwo,
                                               map: map
                                               });
        
        var latitudeAndLongitudeThree = new google.maps.LatLng('43.23179','-87.976443');
        
        var markerThree = new google.maps.Marker({
                                               position: latitudeAndLongitudeThree,
                                               map: map
                                               });
        var latitudeAndLongitudeFour = new google.maps.LatLng('43.249841','-87.961793');
        
        var markerFour = new google.maps.Marker({
                                                 position: latitudeAndLongitudeFour,
                                                 map: map
                                                 });
        var latitudeAndLongitudeFive = new google.maps.LatLng('43.212018','-87.900294');
        
        var markerFive = new google.maps.Marker({
                                                position: latitudeAndLongitudeFive,
                                                map: map
                                                });
        var latitudeAndLongitudeSix = new google.maps.LatLng('43.196753','-87.963728');
        
        var markerSix = new google.maps.Marker({
                                                position: latitudeAndLongitudeSix,
                                                map: map
                                                });
        
        mapBounds.extend(latitudeAndLongitudeOne);
        mapBounds.extend(latitudeAndLongitudeTwo);
        mapBounds.extend(latitudeAndLongitudeThree);
        mapBounds.extend(latitudeAndLongitudeFour);
        mapBounds.extend(latitudeAndLongitudeFive);
        mapBounds.extend(latitudeAndLongitudeSix);
        
        map.fitBounds(mapBounds);
        
        
    }
     
        
    var showMap = function(){
        var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(43, -87),
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        
        return map;
    }
}

