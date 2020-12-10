let sel;
let bgCol;
let februaryEveryYear = [];
let januaryEveryYear = [];
let marchEveryYear = [];
let aprilEveryYear = [];
let may = [];
let june = [];
let july = [];
let august = [];
let september = [];
let october = [];
let november = [];
let december = [];

let selectedYear = [
  10,
  0,
  9.636363636363637,
  10.416666666666666,
  9.81081081081081,
  9.891891891891891,
  11.18918918918919,
  9.08108108108108,
  9,
  9.486486486486486,
  9.72972972972973,
  8.621621621621621,
  10.162162162162161,
  8.35483870967742,
];
function setup() {
  sel = createSelect();
  sel.option("January");
  sel.option("February");
  sel.option("March");
  sel.option("April");
  sel.option("May");
  sel.option("June");
  sel.option("July");
  sel.option("August");
  sel.option("September");
  sel.option("October");
  sel.option("November");
  sel.option("December");
  sel.changed(changeBg);

  createCanvas(700, 700);
  let temperatureValues;
  let date;
  let aparitionsFeb = [];
  let aparitionsJan = [];
  let aparitionsMarch = [];
  let aparitionsApril = [];
  let aparitionsJune = [];
  let aparitionsJuly = [];
  let aparitionsMay = [];
  let aparitionsAugust = [];
  let aparitionsSeptember = [];
  let aparitionsOctober = [];
  let aparitionsNovember = [];
  let aparitionsDecember = [];

  for (let i = 0; i < 15; i++) {
    aparitionsFeb.push(0);
    aparitionsJan.push(0);
    aparitionsMarch.push(0);
    aparitionsApril.push(0);
    aparitionsMay.push(0);
    aparitionsJune.push(0);
    aparitionsJuly.push(0);
    aparitionsAugust.push(0);
    aparitionsSeptember.push(0);
    aparitionsOctober.push(0);
    aparitionsNovember.push(0);
    aparitionsDecember.push(0);
    februaryEveryYear.push(0);
    januaryEveryYear.push(0);
    marchEveryYear.push(0);
    aprilEveryYear.push(0);
    may.push(0);
    june.push(0);
    july.push(0);
    august.push(0);
    september.push(0);
    october.push(0);
    november.push(0);
    december.push(0);
  }

  for (let row of temperatureData.rows) {
    temperatureValues = parseInt(row.get("Temperature"));
    date = row.get("TimeStamp");
    for (let i = 2000; i < 2015; i++) {
      if (date.includes(i.toString()) && date.includes("-02")) {
        console.log("ceva");
        aparitionsFeb[i - 2000] += 1;
        februaryEveryYear[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-01")) {
        aparitionsJan[i - 2000] += 1;
        januaryEveryYear[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-03")) {
        aparitionsMarch[i - 2000] += 1;
        marchEveryYear[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-04")) {
        aparitionsApril[i - 2000] += 1;
        aprilEveryYear[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-05")) {
        aparitionsMay[i - 2000] += 1;
        may[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-06")) {
        aparitionsJune[i - 2000] += 1;
        june[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-07")) {
        aparitionsJuly[i - 2000] += 1;
        july[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-08")) {
        aparitionsAugust[i - 2000] += 1;
        august[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-09")) {
        aparitionsSeptember[i - 2000] += 1;
        september[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-10")) {
        aparitionsOctober[i - 2000] += 1;
        october[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-11")) {
        aparitionsNovember[i - 2000] += 1;
        november[i - 2000] += temperatureValues;
      } else if (date.includes(i.toString()) && date.includes("-12")) {
        aparitionsDecember[i - 2000] += 1;
        december[i - 2000] += temperatureValues;
      }
    }
  }
  for (let i = 0; i < 15; i++) {
    januaryEveryYear[i] = januaryEveryYear[i] / aparitionsJan[i];
    februaryEveryYear[i] = februaryEveryYear[i] / aparitionsFeb[i];
    marchEveryYear[i] = marchEveryYear[i] / aparitionsMarch[i];
    aprilEveryYear[i] = aprilEveryYear[i] / aparitionsApril[i];
    may[i] = may[i] / aparitionsMay[i];
    june[i] = june[i] / aparitionsJune[i];
    july[i] = july[i] / aparitionsJuly[i];
    august[i] = august[i] / aparitionsAugust[i];
    september[i] = september[i] / aparitionsSeptember[i];
    october[i] = october[i] / aparitionsOctober[i];
    november[i] = november[i] / aparitionsNovember[i];
    december[i] = december[i] / aparitionsDecember[i];
  }
}
const years = [
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
];

const textTitle = "Average Water Temperature per Month between 2000-2014";

function draw() {
  background(184, 212, 207);
  textStyle(BOLD);
  text(textTitle, 30, 200);
  for (let i = 0; i < selectedYear.length; i++) {
    text(years[i], i * 40 + 25, 570);
    rect(i * 40 + 30, 250 - selectedYear[i], 20, 300 + selectedYear[i]);
  }

  for (let k = 0; k <= 13; k = k + 3) {
    text(k, 10, 550 - 25 * k);
  }
}

function preload() {
  temperatureData = loadTable("/data/temperature.csv", "header");
}

function changeBg() {
  let val = sel.value();
  if (val == "February") {
    selectedYear = februaryEveryYear;
  } else if (val == "January") {
    selectedYear = januaryEveryYear;
  } else if (val == "March") {
    selectedYear = marchEveryYear;
  } else if (val == "April") {
    selectedYear = aprilEveryYear;
  } else if (val == "May") {
    selectedYear = may;
  } else if (val == "June") {
    selectedYear = june;
  } else if (val == "July") {
    selectedYear = july;
  } else if (val == "August") {
    selectedYear = august;
  } else if (val == "September") {
    selectedYear = september;
  } else if (val == "October") {
    selectedYear = october;
  } else if (val == "November") {
    selectedYear = november;
  } else if (val == "December") {
    selectedYear = december;
  }
}

console.log("selected year", selectedYear);
