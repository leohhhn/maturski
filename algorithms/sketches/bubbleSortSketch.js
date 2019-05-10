let niz;
let n; // broj elemenata u nizu
let maxNiza;
let rectWidth = 6;
let u = 0;
let v = 0;
let slider;
let canvas;
let step;
let piramida = true;
let stubovi = false;
let kruznice = false;
let resetButton;
let numComps;
let interval;
let alg = 1;

function setup() {
  canvas = createCanvas(1200, 700);

  ellipseMode(RADIUS);
  resetButton = createButton("Reset!");
  resetButton.mousePressed(resetSketch);
  slider = makeSlider(slider, canvas, alg);
  resetSketch();
}

function tick() {
  for (var i = 0; i < 3000; ++i) {
    if (v > niz.length - u - 1) {
      ++u;
      v = 0;
    }
    if (u > niz.length - 1) {
      clearInterval(interval);
      return;
    }
    var a = niz[v];
    var b = niz[v + 1];
    numComps++;
    if (a > b) {
      numComps++;
      swap(niz, v, v + 1);
    }
    ++v;
  }
}

function resetSketch() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(tick, 1);
  u = 0;
  numComps = 0;
  // pravljenje niza
  niz = [];
  if (piramida) {
    n = width;
    niz = new Array(n);
    step = (height / niz.length) / 2;
    slider.remove();
    slider = makeSlider(slider, canvas, alg);
  } else if (stubovi) {
    n = floor(width / rectWidth);
    niz = new Array(n);
    step = (height / niz.length);
    slider.remove();
    slider = makeSlider(slider, canvas, alg);
  } else if (kruznice) {
    n = floor(2 * width / 5);
    niz = new Array(n);
    step = 1;
    slider.remove();
    slider = makeSlider(slider, canvas, alg);
  }
  niz[0] = step;
  for (var i = 1; i < niz.length; i++) {
    niz[i] = niz[i - 1] + step;
  }
  maxNiza = niz[niz.length - 1];
  colorMode(HSB, maxNiza);
  shuffleArray(niz);
}

function draw() {
  background(30);
  // // draw se ponavlja, ponasa se kao for loop
  // if (u < niz.length) {
  //   // za svako i, dok je i < duzine niza
  //   for (let j = 0; j < niz.length - 1 - u; j++) {
  //     // - 1 jer ne treba da pitamo za poslednji clan, jer nema nista posle njega
  //     // - i jer je desni deo niza vec sortiran, pa ne moramo da proveravamo
  //     var a = niz[j];
  //     var b = niz[j + 1];
  //     if (a > b) {
  //       numComps++;
  //       swap(niz, j, j + 1);
  //     }
  //   }
  // }
  // u++;

  crtaj(niz, piramida, stubovi, kruznice);
  ispisiPodatke(slider, numComps, n);
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      let a = array[j];
      let b = array[j + 1];
      if (a > b) {
        swap(array, j, j + 1);
      }
    }
  }
}