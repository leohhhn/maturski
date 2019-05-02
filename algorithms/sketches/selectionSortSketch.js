let niz;
const RECTWIDTH = 2;
let i = 0;
let slider;
let canvas;
let midline;

function setup() {
  canvas = createCanvas(900, 500);
  slider = createSlider(1, 60, 20);
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);
  midline = height / 2;

  // pravljenje niza
  niz = new Array(width / RECTWIDTH);
  let step = (height / niz.length) / 2;
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
  let minValue = niz[i];
  let indexOfMin = i;

  for (j = i + 1; j < niz.length; j++) {
    // nadji najmanji element u nizu desno od trenutnog min
    if (minValue > niz[j]) {
      minValue = niz[j];
      indexOfMin = j;
    }
  }
  // ako si nasao manje od trenutnog min, zameni ih
  if (minValue < niz[i]) {
    swap(niz, i, indexOfMin);
  }
  i++;

  // crtanje
  stroke(255, 0, 0);
  // piramida
  for (var z = 0; z < niz.length; z++) {
    line(z * RECTWIDTH, midline, z * RECTWIDTH, midline - niz[z]);
    line(z * RECTWIDTH, midline, z * RECTWIDTH, midline + niz[z]);
  }
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
