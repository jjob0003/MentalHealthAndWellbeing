<script>
import { placeholder } from '@mapbox/mapbox-gl-geocoder/lib/localization';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { ref, onMounted } from 'vue';
mapboxgl.accessToken = 'pk.eyJ1IjoiamFuaWNlLXgiLCJhIjoiY20yNm5kMjZhMGNiNTJrb2s0aWszZnRobCJ9.7PpDYzmVIV0ippBBIh945A';

export default {

    setup(){
        const mapContainer = ref('');

        onMounted(() => {
            const map = new mapboxgl.Map({
                container: mapContainer.value,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [145.1275, -37.9145],
                zoom: 9,
            });

            const geocoder = new MapboxGeocoder({
     
                accessToken: mapboxgl.accessToken, 
                mapboxgl: mapboxgl, 
                marker: false,
                placeholder: 'Search for places',
                });

                map.addControl(geocoder);

            });

        return{
            mapContainer
        };
    }
};

</script>

<template>

<div ref="mapContainer" class="map-container" ></div>
<div style="margin-top: 20%;">
    <h1>
        <!-- Add -->
    </h1>
</div>


</template>

<style scoped>
.map-container {
  height: 600px;
  width: 100%;
}

</style>