let niz;
let n;
let maxNiza;
let rectWidth = 2;
let ssRectWidth = rectWidth * 3;
let u; // universal counter used in draw()
let numOps;
let alg;
let canvas;
let step;
let firstLoop = true;
let stubovi = true;
let piramida = false;
let slowStubovi = false;
let elipse = false;
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let rbStubovi = document.getElementById('rbStubovi');
let rbPiramida = document.getElementById('rbPiramida');
let rbSStubovi = document.getElementById('rbSStubovi');
let rbElipse = document.getElementById('rbElipse');

// var containerDiv = document.getElementById("sketchContainer");
// var positionInfo = containerDiv.getBoundingClientRect();
// var dHeight = positionInfo.height;
// var dWidth = positionInfo.width;

function resetSketch() {
  u = 0;
  numOps = 0;
  // proveravanje radioButton-a
  if (rbStubovi.checked) {
    stubovi = true;
  } else if (rbPiramida.checked) {
    piramida = true;
  } else if (rbSStubovi.checked) {
    slowStubovi = true;
  } else if (rbElipse.checked) {
    elipse = true;
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

function rbChanged() {
  // radioButton Changed event
  stubovi = false;
  piramida = false;
  slowStubovi = false;
  elipse = false;
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
  resizeCanvas(5 * windowWidth / 10, 5.5 * windowHeight / 10);
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

function crtaj(array, piramida, stubovi, elipse) {
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
  } else if (elipse) {
    noFill();
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      ellipse(width / 2, height / 2, i, array[i] / 2);

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
  let brUtxt = "br. operacija: " + (compN / 1000).toFixed(1) + "k";
  let nTxt = "n: " + elemN;
  textSize(19);
  text(brUtxt, 5, 20);
  text(nTxt, 5, 40);
  colorMode(HSB, maxNiza);
}
