$fh.ready(function() {
  var strMap = "";
  $fh.geo({
    interval: 0
  }, function(res) {
    $fh.map({
      target: mapdiv,
      lat: res.lat,
      lon: res.lon,
      zoom: 9
    }, function(map) {
      console.log(map.map);
      document.getElementById('mapdiv').innerHTML = "<p>" + map + "</p>";
    }, function(msg, err) {
      console.log(msg);
    });
})
});