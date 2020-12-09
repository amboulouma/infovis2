const options = {
  lat: 37.799592,
  lng: -122.494082,
  zoom: 10.2,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
};
let canvas;

let sketch = function (p) {
  let algaeBloomsData;
  const mappa = new Mappa("Leaflet");

  p.preload = function () {
    algaeBloomsData = p.loadTable("/data/algae_blooms.csv", "header");
  };

  p.setup = function () {
    canvas = p.createCanvas(400, 600);

    for (let row of algaeBloomsData.rows) {
      //console.log(row.get("TimeStamp"));
      // console.log(row.get("Station.Number"));
      // console.log(row.get("Distance.from.36"));
      // console.log(row.get("Depth"));
      // console.log(row.get("Nitrate"));
      // console.log(row.get("Phosphate"));
    }

    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
  };

  p.draw = function () {};
};

let firstSketch = new p5(sketch, "first");

let sketch2 = function (p) {
  let temperatureData;
  const mappa = new Mappa("Leaflet");

  p.preload = function () {
    temperatureData = p.loadTable("/data/algae_blooms.csv", "header");
  };

  p.setup = function () {
    canvas = p.createCanvas(400, 600);
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
  };

  p.draw = function () {};
};

let secondSketch = new p5(sketch2, "second");
