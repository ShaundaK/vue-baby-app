<template>
  <div class="map"
<div id='map'></div>
  </div>
</template>

<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }
</style>

<script>
import axios from 'axios'

export default {
mounted: function() {
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhdW5kYWs5MCIsImEiOiJjanAzY2I2cW8wMG8zM3ZsZ293dG5hNTR1In0.DNr3-QdeNx1xyL2voPoRig';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-87.6359, 41.8789],
    zoom: 9
   });
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  }));
map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left');
  }
}
</script>