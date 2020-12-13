let W = 500;
let H = 500;
let svg;

function setup() {
  createCanvas(W, H);
  fill(255, 30, 70, 90);

  dfd
    .read_csv("/data/data_unstable_biotops.csv")
    .then((df) => {
      let stations = df["StationNumber"].unique().values;

      var select = document.getElementById("stations");

      for (var i = 0; i < stations.length; i++) {
        var opt = stations[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }

      var e = document.getElementById("stations");
      var station = e.value;

      let grp = df.groupby(["StationNumber"]);

      var layout = {
        title: "Oxygen concentration per date per station",
        xaxis: { title: "Date" },
        yaxis: { title: "Calculated Oxygen and its percentage" },
      };

      new_df = grp.get_groups([station]);
      new_df = new_df.set_index({ key: "TimeStamp" });
      new_df.plot("my_dataviz").line({
        columns: ["OxygenSaturationpercent", "CalculatedOxygen"],
        layout: layout,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function draw() {}
