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
L.layerGroup(locationsLayer).addTo(map);
L.layerGroup(ryavecLayer).addTo(map);
L.layerGroup(crhLayer).addTo(map);

const legend = L.control();
legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'info legend');
  div.style.backgroundColor = 'white';
  div.style.padding = '0px 15px 5px 15px';
  div.innerHTML += '<h4>Legend</h4>';
  div.innerHTML += '<span style="background: #7b7668; width: 20px; height: 4px; display: inline-block; margin-right: 5px;"></span> 1900s Trade Routes<br>';
  div.innerHTML += '<span style="background: #78b774; width: 20px; height: 4px; display: inline-block; margin-right: 5px;"></span> Present-Day Rail Lines<br>';
  return div;
};
legend.addTo(map);

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
  }, 60);
}

play();
