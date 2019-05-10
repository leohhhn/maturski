let niz;
let n; // number of elements in the array
let rectWidth = 3;
let maxNiza;
let u; // universal counter used in draw()
let slider;
let canvas;
let step;
let piramida = false;
let stubovi = true;
let kruznice = false;
let numComps;
let alg = 2;

function setup() {
  canvas = createCanvas(1200, 700);
  ellipseMode(RADIUS);
  slider = makeSlider(slider, canvas, alg);
  resetSketch();
}

function resetSketch() {
  u = 0;
  numComps = 0;
  // pravljenje niza
  if (piramida) {
    n = width;
    niz = new Array(n);
    step = ((height - 100) / niz.length) / 2;
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
  frameRate(slider.value());
  background(30);
  // uzmi da je min prvi element
  let minValue = niz[u];
  let indexOfMin = u;
  for (j = u + 1; j < niz.length; j++) {
    // nadji najmanji element u nizu desno od trenutnog min
    if (minValue > niz[j]) {
      numComps++;
      minValue = niz[j];
      indexOfMin = j;
    }
  }
  // ako si nasao manje od trenutnog min, zameni ih
  if (minValue < niz[u]) {
    numComps++;
    swap(niz, u, indexOfMin);
  }
  u++;
  crtaj(niz, piramida, stubovi, kruznice);
  ispisiPodatke(slider, numComps, n);
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
