let niz;
let n;
let maxNiza;
let rectWidth = 2;
let ssRectWidth = rectWidth * 5;
let u; // universal counter used in draw()
let numOps;
let alg;
let canvas;
let step;
let piramida = false;
let stubovi = true;
let slowStubovi = false;
let kruznice = false;
let firstLoop = true;
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');

// var containerDiv = document.getElementById("sketchContainer");
// var positionInfo = containerDiv.getBoundingClientRect();
// var dHeight = positionInfo.height;
// var dWidth = positionInfo.width;

function startStopSketch() {
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
  resizeCanvas(5 * windowWidth / 10, 5.5 * windowHeight / 10);
  resetSketch();
}

function resetSketch() {
  u = 0;
  numOps = 0;
  // pravljenje niza
  if (piramida) {
    n = ceil(width);
    niz = new Array(n);
    step = ((height - 100) / niz.length) / 2;
  } else if (stubovi) {
    n = floor(width / rectWidth);
    niz = new Array(n);
    step = (height / niz.length);
  } else if (kruznice) {
    n = floor(2 * width / 5);
    niz = new Array(n);
    step = 1;
  } else if (slowStubovi) {
    n = ceil(width / ssRectWidth);
    niz = new Array(n);
    step = (height / niz.length);
  }
  niz[0] = step;
  for (var i = 1; i < niz.length; i++) {
    niz[i] = niz[i - 1] + step;
  }

  maxNiza = niz[niz.length - 1];
  colorMode(HSB, maxNiza);
  shuffleArray(niz);
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

function crtaj(array, piramida, stubovi, kruznice) {
  if (piramida) {
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      line(i, height / 2, i, height / 2 - array[i]);
      line(i, height / 2, i, height / 2 + array[i]);
    }
  } else if (stubovi) {
    fill(255);
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      rect(i * rectWidth, height - array[i], rectWidth, height);
    }
  } else if (kruznice) {
    noFill();
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      ellipse(width / 2, height / 2, 3 * i / 5, 3 * i / 5);

    }
  } else if (slowStubovi) {
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      fill(niz[i], maxNiza, maxNiza);
      rect(i * ssRectWidth, height - array[i], ssRectWidth, height);
    }
  }
}

function ispisiPodatke(compN, elemN) {
  noStroke();
  colorMode(RGB);
  fill(255);
  let brUtxt = "operations: " + (compN / 1000).toFixed(1) + "k";
  let nTxt = "n: " + elemN;
  textSize(19);
  text(brUtxt, 5, 20);
  text(nTxt, 5, 40);
  colorMode(HSB, maxNiza);
}
