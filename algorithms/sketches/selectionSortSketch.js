let niz;
let n; // number of elements in the array
let rectWidth = 6; // mora da bude broj koji je delilac width, fix later - just do floor or ceil
let u; // universal counter used in draw()
let slider;
let canvas;
let step;
let piramida = true;
let stubovi = false;
let kruznice = false;
let button;
let brUpor = 0;
let brSwap = 0;

function setup() {
  canvas = createCanvas(1200, 700);
  ellipseMode(RADIUS);
  button = createButton("reset");
  button.mousePressed(resetSketch);
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
    step = ((height - 100) / niz.length) / 2;
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

  // uzmi da je min prvi element
  let minValue = niz[u];
  let indexOfMin = u;

  for (j = u + 1; j < niz.length; j++) {
    // nadji najmanji element u nizu desno od trenutnog min
    if (minValue > niz[j]) {
      brUpor++;
      minValue = niz[j];
      indexOfMin = j;
    }
  }
  // ako si nasao manje od trenutnog min, zameni ih
  if (minValue < niz[u]) {
    brUpor++;
    swap(niz, u, indexOfMin);
  }
  u++;
  
  crtaj(niz, piramida, stubovi, kruznice);
  ispisiPodatke(slider, brUpor, n);
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
