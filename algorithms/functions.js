let niz; // sadrži niz
let n; // broj elemenata u nizu
let maxNiza; // vrednost najvećeg elementa u nizu
const rectWidth = 4;
let ssRectWidth = rectWidth * 8;
let u; // globalni brojač koji se koristi u draw()
let numOps; // broj operacija 
let canvas; // promenljiva u kojoj se čuva kanvas
let step; // razmak između dva elementa u nizu
let firstLoop = true; // označava prvo iscrtavanje na kanvasu

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
let fpsChanger = document.getElementById('fpsChanger');

var containerDiv = document.getElementById('glavni');
var positionInfo = containerDiv.getBoundingClientRect();
var dHeight = positionInfo.height;
var dWidth = positionInfo.width;

function resetSketch() {
  ellipseMode(RADIUS);
  u = 0;
  numOps = 0;
  firstLoop = true;
  fpsChanger.checked = false;
  // proveravanje radioButton-a za iscrtavanje

  if (rbStubovi.checked) {
    stubovi = true;
  } else if (rbPiramida.checked) {
    piramida = true;
  } else if (rbVStubovi.checked) {
    veciStubovi = true;
    fpsChanger.checked = true;
  } else if (rbElipse.checked) {
    elipse = true;
  } else if (rbPolarCircle.checked) {
    polarCircle = true;
  }

  if (piramida) {
    n = ceil(width);
    niz = new Array(n);
    step = (height / niz.length) / 2;
  } else if (stubovi) {
    n = ceil(width / rectWidth);
    niz = new Array(n);
    step = (height / niz.length);
  } else if (elipse) {
    n = ceil(2 * width / 5);
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
  for (var i = 1; i < niz.length; i++)
    niz[i] = niz[i - 1] + step;
    
  maxNiza = niz[niz.length - 1];
  colorMode(HSB, maxNiza);
  shuffleArray(niz);
  redraw();
  firstLoop = true;
}

function rbChanged() {
  stubovi = false;
  piramida = false;
  veciStubovi = false;
  elipse = false;
  polarCircle = false;
  resetSketch();
  fpsChanged();
}

function fpsChanged() {
  if (fpsChanger.checked) {
    frameRate(2);
  } else {
    frameRate(60);
  }
}

function startStopSketch() {
  // start/stop dugme onClick
  firstLoop = false;
  if (startStopBtn.innerHTML == "Počni!") {
    loop();
    startStopBtn.innerHTML = "Stani!";
  } else {
    noLoop();
    startStopBtn.innerHTML = "Počni!";
  }
}

function windowResized() {
  positionInfo = containerDiv.getBoundingClientRect();
  dHeight = positionInfo.height;
  dWidth = positionInfo.width;
  resizeCanvas(9.5 * dWidth / 10, 500);
  resetSketch();
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var randomIndex;
  for (var i = array.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    swap(array, currentIndex, randomIndex);
  }
}

function crtaj() {
  if (piramida) {
    for (var i = 0; i < niz.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      line(i, height / 2, i, height / 2 - niz[i]);
      line(i, height / 2, i, height / 2 + niz[i]);
    }
  } else if (stubovi) {
    for (var i = 0; i < niz.length; i++) {
      fill(niz[i], maxNiza, maxNiza);
      stroke(niz[i], maxNiza, maxNiza);
      rect(i * rectWidth, height - niz[i], rectWidth, niz[i]);
    }
  } else if (veciStubovi) {
    for (var i = 0; i < niz.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      fill(niz[i], maxNiza, maxNiza);
      rect(i * ssRectWidth, height - niz[i], ssRectWidth, niz[i]);
    }
  } else if (elipse) {
    noFill();
    for (var i = 0; i < niz.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      ellipse(width / 2, height / 2, i, i / 2);
    }
  } else if (polarCircle) {
    let r = height * 0.45;
    let x0 = width / 2;
    let y0 = height / 2;
    let halfDeg = 0.5 * (Math.PI / 180);
    for (var i = 0; i < niz.length; i++) {
      let theta = i * (Math.PI / 180);
      let xl = x0 + r * Math.cos(theta - halfDeg);
      let yl = y0 + r * Math.sin(theta - halfDeg);
      let xr = x0 + r * Math.cos(theta + halfDeg);
      let yr = y0 + r * Math.sin(theta + halfDeg);
      fill(niz[i], maxNiza, maxNiza);
      stroke(niz[i], maxNiza, maxNiza);
      triangle(x0, y0, xl, yl, xr, yr);
    }
  }
}

function ispisiPodatke() {
  noStroke();
  colorMode(RGB);
  fill(255);
  let brUtxt = "br. operacija: " + (numOps / 1000).toFixed(1) + "k";
  let nTxt = "br. elemenata: " + n;
  textSize(19);
  text(brUtxt, 5, 20);
  text(nTxt, 5, 40);
  colorMode(HSB, maxNiza);
}
