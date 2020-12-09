// what's wrong with this approach?
// (think about the relationship between
// the values in the CSV file and what's
// drawn on the screen.)

let data;

// preload table data
function preload() {
  data = loadTable(
    '../data/data_unstable_biotops.csv',
		'csv',
		'header');
}

function setup() { 
  createCanvas(640, 480);
  
  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);

  background(50);
  stroke(255);

  // noprotect
  for (var i = 0; i < data.getRowCount(); i++) {
    
    // draw temperatures
    let xpos = map(i, 0, data.getRowCount(), 0, width);
    // data.getNum(m, n) evaluates to the value in the
    // cell for row m in column n.
    // replace "TEMP" with some other column name to
    // display a different column.
    point(xpos, data.getNum(i, "TEMP"));
    
  }
}