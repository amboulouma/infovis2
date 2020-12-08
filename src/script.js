var data = [];
var maxData;

let canvas;

let algaeBloomsData;
const mappa = new Mappa("Leaflet");

const options = {
  lat: 37.799592,
  lng: -122.494082,
  zoom: 10.2,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
};

let algaeMapVisualisation;
let temperatureMapVisualisation;
let oxygenGraphVisualisation;

function preload() {
  algaeBloomsData = loadTable("/data/algae_blooms.csv", "header");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // algaeMapVisualisation = createGraphics(400, 400);
  // temperatureMapVisualisation = createGraphics(400, 400);
  // oxygenGraphVisualisatio = createGraphics(400, 400);

  for (let row of algaeBloomsData.rows) {
    console.log(row.get("TimeStamp"));
    // console.log(row.get("Station.Number"));
    // console.log(row.get("Distance.from.36"));
    // console.log(row.get("Depth"));
    // console.log(row.get("Nitrate"));
    // console.log(row.get("Phosphate"));
  }
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  // background(184, 212, 207);
  // drawAlgaeBloomsMap();
  // drawTemperatureMap();
  // drawOxygenGraph();
  // image(algaeMapVisualisation, width / 10, height / 14);
  // image(temperatureMapVisualisation, width / 2, height / 7);
  // image(oxygenGraphVisualisatio, width / 10, height / 1.6);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawAlgaeBloomsMap() {
  algaeMapVisualisation.background(52, 133, 118);
  algaeMapVisualisation.fill(255, 255, 255);
  algaeMapVisualisation.textSize(16);
  algaeMapVisualisation.text("This is where the algae map will be!", 50, 50);
}

function drawTemperatureMap() {
  temperatureMapVisualisation.background(46, 47, 92);
  temperatureMapVisualisation.fill(0, 0, 0);
  temperatureMapVisualisation.textSize(16);
  temperatureMapVisualisation.text(
    "This is where the oxygen graph will be!",
    50,
    50
  );
}

function drawOxygenGraph() {
  oxygenGraphVisualisatio.background(46, 92, 49);
  oxygenGraphVisualisatio.fill(0, 0, 0);
  oxygenGraphVisualisatio.textSize(16);
  oxygenGraphVisualisatio.text(
    "This is where temperature map will be!",
    50,
    50
  );
}
