var data = [];
var maxData;

let algaeBloomsData;

function preload() {
  algaeBloomsData = loadTable("/data/algae_blooms.csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(algaeBloomsData);
}

function draw() {
  background(43, 53, 63);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
