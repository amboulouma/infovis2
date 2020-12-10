let W = 500;
let H = 500;
let svg;

// function preload() {
//   data = loadTable("/data/data_unstable_biotops.csv", "header");
// };

function setup() {
  createCanvas(W, H);
  fill(255, 30, 70, 90);    

  var margin = {left: 50, right: 20, top: 20, bottom: 50 };

  var width = 960 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;
  var max = 0;

  var xNudge = 50;
  var yNudge = 20;

  var minDate = new Date();
  var maxDate = new Date();

  // append the svg object to the body of the page
  var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  var parseDate = d3.timeParse("%Y-%m-%d");

  d3.csv("/data/data_unstable_biotops.csv",

     // When reading the csv, I must format variables:
    function(d){
      return { date : d3.timeParse("%Y-%m-%d")(d.date), calculatedOxygen : d.CalculatedOxygen }
    },

    // Now I can use this dataset:
    function(data) {

      // Add X axis --> it is a date format
      var x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return + d.CalculatedOxygen; })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // Add the line
      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.CalculatedOxygen) })
          )
  });
}

function draw() {
  
}