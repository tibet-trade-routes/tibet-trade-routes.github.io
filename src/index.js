const L = require('leaflet');
const { AntPath } = require('leaflet-ant-path');

const map = L.map('map', { preferCanvas: true });
map.setView([34, 93], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const locationsMap = require('./data/locations.js');
const locationsLayer = [];
for (const [name, data] of Object.entries(locationsMap)) {
  const circle = L.circle([data[0], data[1]], {
    color: data[2] ? 'blue' : 'red',
    fillColor: data[2] ? 'blue' : 'red',
    fillOpacity: 0.5,
    hardwareAccelerated: true,
    radius: 5000
  });
  circle.bindPopup(name);
  locationsLayer.push(circle);
}

const ryavecPaths = require('./data/ryavec.js');
const ryavecLayer = [];
for (const [name, color, locations] of ryavecPaths) {
  const antPath = new AntPath(
    locations.map(location => [locationsMap[location][0], locationsMap[location][1]]),
    {
      delay: 1000,
      dashArray: [10, 30],
      hardwareAccelerated: true,
      weight: 7,
      fillOpacity: 1,
      color: 'black',
      pulseColor: '#FFFFFF',
      paused: false,
      reverse: true
    }
  );
  antPath.bindPopup(name);
  ryavecLayer.push(antPath);
}

const crhPaths = require('./data/crh.js');
const crhLayer = [];
for (const [name, color, locations] of crhPaths) {
  const antPath = new AntPath(
    locations.map(location => [locationsMap[location][0], locationsMap[location][1]]),
    {
      delay: 1000,
      dashArray: [10, 30],
      hardwareAccelerated: true,
      weight: 7,
      color: 'green',
      pulseColor: '#FFFFFF',
      paused: false,
      reverse: true
    }
  );
  antPath.bindPopup(name);
  crhLayer.push(antPath);
}
L.layerGroup(ryavecLayer).addTo(map);
L.layerGroup(crhLayer).addTo(map);
L.layerGroup(locationsLayer).addTo(map);
