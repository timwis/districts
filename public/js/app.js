window.Districts = window.Districts || {};
window.jQuery = window.jQuery || {};
window.L = window.L || {};
window.esriConverter = window.esriConverter || function(){};
(function(app, $, L, esriConverter) {
    var tileLayer = "http://{s}.tile.cloudmade.com/b3151979a2e44ef28badec6ef9313327/22677/256/{z}/{x}/{y}.png";
    var map = L.map("map");
    
    L.tileLayer(tileLayer, {
        maxZoom: 18
    }).addTo(map);
    
    map.locate({setView: true, maxZoom: 16});
    
    function onLocationFound(e) {
        // get districts
    }
    
    map.on("locationfound", onLocationFound);
    
    var buffer = "http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/8/query?text=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=DIST_NUM%3D24&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=4326&outFields=*&f=pjson";
    var wards = "http://gis.phila.gov/ArcGIS/rest/services/PhilaGov/ServiceAreas/MapServer/10/query?text=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=1%3D1&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=4326&outFields=*&f=pjson"
        ,jsonconverter = esriConverter();
    $.getJSON(buffer, function(response) {
        var geojson = jsonconverter.toGeoJson(response);
        console.log(geojson);
        L.geoJson(geojson).addTo(map);
    })
    
})(window.Districts, window.jQuery, window.L, window.esriConverter);