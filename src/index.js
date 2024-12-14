const L = require('leaflet');
const { AntPath } = require('leaflet-ant-path');

const map = L.map('map');
map.setView([34, 93], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const paths = require('./data/ryavec.js');

for (const [name, color, path] of paths) {
  const antPath = new AntPath(
    path.map(([lat, lng]) => [lat, lng]),
    {
      delay: 1000,
      dashArray: [10, 30],
      hardwareAccelerated: true,
      weight: 7,
      color,
      pulseColor: '#FFFFFF',
      paused: false,
      reverse: true
    }
  );
  antPath.bindPopup(name);
  map.addLayer(antPath);
}
