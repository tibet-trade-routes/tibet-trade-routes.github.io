const L = require('leaflet');
const { AntPath } = require('leaflet-ant-path');

const map = L.map('map', { preferCanvas: true });
map.setView([34, 93], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const weightRange = [2, 10];
const yearRange = [1900, 2024];

const locationsMap = require('./data/locations.js');
const locationsLayer = [];
for (const [name, data] of Object.entries(locationsMap)) {
  const circle = L.circle([data[0], data[1]], {
    color: 'blue',
    fillColor: 'blue',
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
      dashArray: [0, 20],
      hardwareAccelerated: true,
      weight: weightRange[1],
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
      dashArray: [0, 20],
      hardwareAccelerated: true,
      weight: weightRange[0],
      color: 'green',
      pulseColor: '#FFFFFF',
      paused: false,
      reverse: true
    }
  );
  antPath.bindPopup(name);
  crhLayer.push(antPath);
}
const layerControl = L.control.layers(
  { Cities: L.layerGroup(locationsLayer).addTo(map) },
  {
    '1900s Trade Routes': L.layerGroup(ryavecLayer).addTo(map),
    'Present-Day High-Speed Rail': L.layerGroup(crhLayer).addTo(map)
  }
).addTo(map);

function updateTradeRoutes (year) {
  let weight = (yearRange[1] - year) / (yearRange[1] - yearRange[0]) * (weightRange[1] - weightRange[0]) + weightRange[0];
  for (const antPath of ryavecLayer) {
    // change weight of antPath based on year
    antPath.setStyle({ weight });
  }
  weight = (year - yearRange[0]) / (yearRange[1] - yearRange[0]) * (weightRange[1] - weightRange[0]) + weightRange[0];
  for (const antPath of crhLayer) {
    // change weight of antPath based on year
    antPath.setStyle({ weight });
  }
}

document.getElementById('play').addEventListener('click', play);
document.getElementById('pause').addEventListener('click', pause);

document.getElementById('slider').addEventListener('input', event => {
  const year = event.target.value;
  updateTradeRoutes(year);
  document.getElementById('year-display').innerText = year;
});

let currentInterval = null;
let currentYear = 1900;

function pause () {
  clearInterval(currentInterval);
}

function play () {
  currentInterval = setInterval(() => {
    currentYear += 1;
    if (currentYear > yearRange[1]) {
      currentYear = yearRange[0];
    }
    updateTradeRoutes(currentYear);
    document.getElementById('year-display').innerText = currentYear;
    document.getElementById('slider').value = currentYear;
  }, 20);
}

play();
