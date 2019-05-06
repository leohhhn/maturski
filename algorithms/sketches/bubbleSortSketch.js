let niz;
let nizBoja;
let n;
let rectWidth = 6; // mora da bude broj koji je delilac width, fix later
let u = 0; // universal counter used in draw()
let slider;
let canvas;
let step;
let piramida = false;
let stubovi = false;
let kruznice = true;
let resetButton;
let brUpor = 0;

function setup() {
  canvas = createCanvas(1200, 700);
  ellipseMode(RADIUS);
  resetButton = createButton("Reset!");
  resetButton.mousePressed(resetSketch);
  slider = makeSlider(slider, canvas);
  resetSketch();
}

function resetSketch() {
  u = 0;
  brUpor = 0;
  // pravljenje niza
  niz = [];
  if (piramida) {
    n = width;
    niz = new Array(n);
    step = (height / niz.length) / 2;
    slider.remove();
    slider = makeSlider(slider, canvas);
  } else if (stubovi) {
    n = width / rectWidth;
    niz = new Array(n);
    step = (height / niz.length);
    slider.remove();
    slider = makeSlider(slider, canvas);
  } else if (kruznice) {
    n = 2 * width / 5;
    niz = new Array(n);
    step = 1;
    slider.remove();
    slider = makeSlider(slider, canvas);
  }
  niz[0] = step;
  for (var i = 1; i < niz.length; i++) {
    niz[i] = niz[i - 1] + step;
  }
  shuffleArray(niz);
}

function draw() {
  frameRate(slider.value());
  background(30);

  // draw se ponavlja, ponasa se kao for loop
  if (u < niz.length) {
    // za svako i, dok je i < duzine niza
    for (let j = 0; j < niz.length - 1 - u; j++) {
      // - 1 jer ne treba da pitamo za poslednji clan, jer nema nista posle njega
      // - i jer je desni deo niza vec sortiran, pa ne moramo da proveravamo
      var a = niz[j];
      var b = niz[j + 1];
      if (a > b) {
        brUpor++;
        swap(niz, j, j + 1);
      }
    }
  }
  u++;

  crtaj(niz, piramida, stubovi, kruznice);
  ispisiPodatke(slider, brUpor, n);
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; i < array.length - i - 1; j++) {
      let a = array[j];
      let b = array[j + 1];
      if (a > b) {
        swap(array, j, j + 1);
      }
    }
  }
}
