let niz;
let n;
let rectWidth = 6; // mora da bude broj koji je delilac width, fix later
let u; // universal counter used in draw()
let slider;
let canvas;
let step;
let piramida = false;
let stubovi = true;
let button;

function setup() {
  canvas = createCanvas(900, 500);
  button = createButton("reset");
  button.mousePressed(resetSketch);
  makeSlider();
  resetSketch();
}

function resetSketch() {
  u = 0;
  // pravljenje niza
  niz = [];
  if (piramida) {
    n = width;
    niz = new Array(n);
    step = (height / niz.length) / 2;
  } else if (stubovi) {
    n = width / rectWidth;
    niz = new Array(n);
    step = (height / niz.length);
    slider.remove();
    makeSlider();
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
  // ispisi fps
  fill(255);
  let fps = slider.value() + "fps";
  stroke(255);
  textSize(25);
  text(fps, 290, 40);

  // uzmi da je min prvi element
  let minValue = niz[u];
  let indexOfMin = u;

  for (j = u + 1; j < niz.length; j++) {
    // nadji najmanji element u nizu desno od trenutnog min
    if (minValue > niz[j]) {
      minValue = niz[j];
      indexOfMin = j;
    }
  }
  // ako si nasao manje od trenutnog min, zameni ih
  if (minValue < niz[u]) {
    swap(niz, u, indexOfMin);
  }
  u++;

  // crtanje
  if (piramida) {
    stroke(255, 0, 0);
    for (var i = 0; i < niz.length; i++) {
      line(i, height / 2, i, height / 2 - niz[i]);
      line(i, height / 2, i, height / 2 + niz[i]);
    }
  } else if (stubovi) {
    stroke(0);
    fill(255);
    for (var i = 0; i < niz.length; i++)
      rect(i * rectWidth, height - niz[i], rectWidth, height);
  }
}

function makeSlider() {
  slider = createSlider(1, 60, 20);
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);
}

function selectionSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    let minValue = array[i];
    let indexOfMin = i;
    for (var j = i + 1; j < array.length; j++) {
      if (minValue > array[j]) {
        minValue = array[j];
        indexOfMin = j;
      }
    }
    if (minValue < array[i]) {
      swap(array, i, indexOfMin);
    }
  }
}
