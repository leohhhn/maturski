let niz;
let n;
let maxNiza;
let polaNiza = Math.floor(n / 2); // pola duzine niza
let rectWidth = 2;
let ssRectWidth = rectWidth * 3;
let u; // universal counter used in draw()
let numOps;
let canvas;
let step;
let firstLoop = true;
let stubovi = false;
let piramida = false;
let veciStubovi = false;
let elipse = false;
let polarCircle = false;

let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let rbStubovi = document.getElementById('rbStubovi');
let rbPiramida = document.getElementById('rbPiramida');
let rbVStubovi = document.getElementById('rbVStubovi');
let rbElipse = document.getElementById('rbElipse');
var containerDiv = document.getElementById("glavni");
var positionInfo = containerDiv.getBoundingClientRect();
var dHeight = positionInfo.height;
var dWidth = positionInfo.width;

// TODO add tick for some algorithms

function resetSketch() {
  u = 0;
  numOps = 0;
  firstLoop = true;
  // proveravanje radioButton-a
  if (rbStubovi.checked) {
    stubovi = true;
  } else if (rbPiramida.checked) {
    piramida = true;
  } else if (rbVStubovi.checked) {
    veciStubovi = true;
  } else if (rbElipse.checked) {
    elipse = true;
  } else if (rbPolarCircle.checked) {
    polarCircle = true;
  }

  // pravljenje niza
  if (piramida) {
    n = ceil(width);
    niz = new Array(n);
    step = ((height - 100) / niz.length) / 2;
  } else if (stubovi) {
    n = floor(width / rectWidth);
    niz = new Array(n);
    step = (height / niz.length);
  } else if (elipse) {
    n = floor(2 * width / 5);
    niz = new Array(n);
    step = 1;
  } else if (veciStubovi) {
    n = ceil(width / ssRectWidth);
    niz = new Array(n);
    step = (height / niz.length);
  } else if (polarCircle) {
    n = 360;
    niz = new Array(n);
    step = 1;
  }
  niz[0] = step;
  for (var i = 1; i < niz.length; i++) {
    niz[i] = niz[i - 1] + step;
  }
  maxNiza = niz[niz.length - 1];
  colorMode(HSB, maxNiza);
  shuffleArray(niz);
  redraw();
}

function rbChanged() {
  // radioButton Changed event
  stubovi = false;
  piramida = false;
  veciStubovi = false;
  elipse = false;
  polarCircle = false;
  resetSketch();
}

function startStopSketch() {
  // start/stop dugme onClick
  firstLoop = false;
  if (startStopBtn.innerHTML == "Start!") {
    loop();
    startStopBtn.innerHTML = "Stop!";
  } else {
    noLoop();
    startStopBtn.innerHTML = "Start!";
  }
}

function windowResized() {
  positionInfo = containerDiv.getBoundingClientRect();
  dHeight = positionInfo.height;
  dWidth = positionInfo.width;
  resizeCanvas(9 * dWidth / 10, 500);
  resetSketch();
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  for (var i = array.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

function crtaj(array, piramida, stubovi, elipse, polarniKrug) {
  // crtanje na canvasu
  if (piramida) {
    strokeWeight(1);
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      line(i, height / 2, i, height / 2 - array[i]);
      line(i, height / 2, i, height / 2 + array[i]);
    }
  } else if (stubovi) {
    fill(255);
    strokeWeight(1);
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      rect(i * rectWidth, height - array[i], rectWidth, height);
    }
  } else if (elipse) {
    noFill();
    strokeWeight(1);
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      ellipse(width / 2, height / 2, i, array[i] / 2);

    }
  } else if (veciStubovi) {
    strokeWeight(1);
    for (var i = 0; i < array.length; i++) {

      stroke(niz[i], maxNiza, maxNiza);
      fill(niz[i], maxNiza, maxNiza);
      rect(i * ssRectWidth, height - array[i], ssRectWidth, height);
    }
  } else if (polarniKrug) {
    let r = height * 0.45;
    let x0 = width / 2;
    let y0 = height / 2;
    strokeWeight(5);

    for (var i = 0; i < array.length; i++) {
      let theta = i * (Math.PI / 180);
      let xi = x0 + r * Math.cos(theta);
      let yi = y0 + r * Math.sin(theta);
      stroke(niz[i], maxNiza, maxNiza);
      line(x0, y0, xi, yi);

    }
  }
}

/*
[2, 5]           
-2     -min
[0, 3]
/3     / (max - min)
[0, 1]
[0, 360]
*/


function ispisiPodatke(compN, elemN) {
  // ispisivanje podataka, broj elemenata i broj operacija na canvasu
  noStroke();
  colorMode(RGB);
  fill(255);
  let brUtxt = "br. operacija: " + (compN / 1000).toFixed(1) + "k";
  let nTxt = "n: " + elemN;
  textSize(19);
  text(brUtxt, 5, 20);
  text(nTxt, 5, 40);
  colorMode(HSB, maxNiza);
}
