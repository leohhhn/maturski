let niz;
let n;
let maxNiza;
let rectWidth = 2;
let u; // universal counter used in draw()
let slider;
let canvas;
let step;
let piramida = false;
let stubovi = true;
let kruznice = false;
let numOps;

function setup() {
  canvas = createCanvas(700, 450);
  canvas.position(((windowWidth - width) / 2), ((windowHeight - height) / 2));
  ellipseMode(RADIUS);
  background(30);
  slider = makeSlider(slider, canvas);
  resetSketch();
}

function resetSketch() {
  u = 0;
  numOps = 0;
  // pravljenje niza
  if (piramida) {
    n = width;
    niz = new Array(n);
    step = ((height - 100) / niz.length) / 2;
    slider.remove();
    slider = makeSlider(slider, canvas);
  } else if (stubovi) {
    n = floor(width / rectWidth);
    niz = new Array(n);
    step = (height / niz.length);
    slider.remove();
    slider = makeSlider(slider, canvas);
  } else if (kruznice) {
    n = floor(2 * width / 5);
    niz = new Array(n);
    step = 1;
    slider.remove();
    slider = makeSlider(slider, canvas);
  }

  niz[0] = step;
  for (var i = 1; i < niz.length; i++) {
    niz[i] = niz[i - 1] + step;
  }
  maxNiza = niz[niz.length - 1];

  colorMode(HSB, maxNiza);
  shuffleArray(niz);
  // for (var i = 0; i < n; i++) {
  //   console.log(niz[i]);
  // }
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
      ellipse(width / 2, height / 2, i, array[i] / 2);
    }
  }
}

function ispisiPodatke(s, compN, elemN) {
  fill(0, 0, maxNiza);
  let fps = s.value() + "fps";
  stroke(0, 0, maxNiza);
  textSize(25);
  text(fps, 290, 40);
  let brUtxt = "Broj operacija: " + compN;
  textSize(19);
  text(brUtxt, width - 220, 25);
  let nTxt = "Broj elemenata: " + elemN;
  text(nTxt, width - 195, 50);
}

function makeSlider(slider, canvas) {
  slider = createSlider(1, 60, 60);
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);
  return slider;
}
