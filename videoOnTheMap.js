
///// 1. Base settings /////

// set coordinates
const coordinates = [50.92878, 11.5899];
// create a map
let mymap = L.map('map', { zoomControl: false }).setView(coordinates, 5);
new L.Control.Zoom({ position: 'bottomright' }).addTo(mymap);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);
// routing control
let image = "https://www.mapbox.com/bites/00188/patricia_nasa.webm",
    imageBounds = [[ 32, -130], [ 13, -100]];
L.videoOverlay(image, imageBounds).addTo(mymap);
mymap.fitBounds(imageBounds);