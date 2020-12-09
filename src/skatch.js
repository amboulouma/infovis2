const options = {
  lat: 37.799592,
  lng: -122.494012,
  zoom: 8.4,
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

    let nitrateSum = [];
    let phosphateSum = [];
    let aparitions = [];
    let stationNumbers = [];
    let avgNitrate = [];
    let avgPhosphate = [];

    for (let i = 1; i <= 36; i++) {
      stationNumbers.push("" + i);
      nitrateSum.push(0);
      aparitions.push(0);
      phosphateSum.push(0);
      avgNitrate.push(0);
      avgPhosphate.push(0);
    }

    for (let row of algaeBloomsData.rows) {
      if (
        row.get("TimeStamp").includes("2013") &&
        stationNumbers.includes(row.get("Station.Number"))
      ) {
        aparitions[parseInt(row.get("Station.Number"))] += 1;
        nitrateSum[parseInt(row.get("Station.Number"))] += row.get("Nitrate");
        phosphateSum[parseInt(row.get("Station.Number"))] += row.get(
          "Phosphate"
        );
      }
    }

    for (let i = 0; i < 36; i++) {
      avgNitrate[i] = parseFloat(nitrateSum[i]) / parseFloat(aparitions[i]);
      avgPhosphate[i] = parseFloat(phosphateSum[i]) / parseFloat(aparitions[i]);
    }

    const optimalNitrateLevel = 2.6;
    const optimalPhosphateLevel = 0.2;

    let stationsInDanger = [];

    for (let i = 0; i < 36; i++) {
      if (
        avgNitrate[i] > optimalNitrateLevel &&
        avgPhosphate[i] > optimalPhosphateLevel
      )
        stationsInDanger.push(i);
    }

    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);

    p.fill(200, 100, 100);
    myMap.onChange(p.drawPoint);
  };

  p.draw = function () {
    p.clear();
    const stationsCoordonates = {
      3: [38.047972, -121.929948],
      6: [38.068897, -122.035617],
      9: [38.057078, -122.187023],
      24: [37.662088, -122.325517],
      27: [37.639104, -122.321607],
      30: [37.547204, -122.19143],
      32: [37.514726, -122.13938],
    };

    for (let row of algaeBloomsData.rows) {
      let stationsNo = row.get("Station.Number");
      let latlong = stationsCoordonates[stationsNo];
      if (latlong) {
        let lat = latlong[0];
        let long = latlong[1];

        const pixel = myMap.latLngToPixel(lat, long);
        p.ellipse(pixel.x, pixel.y, 5, 5);
      }
    }
  };
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
