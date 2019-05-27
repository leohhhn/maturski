function setup() {
  canvas = createCanvas(9.5 * dWidth / 10, 500);
  canvas.parent('sketchContainer');
  resetSketch();
  noLoop();
}

function draw() {
  colorMode(RGB);
  background(25);
  colorMode(HSB, maxNiza);

  let minValue = niz[u];
  let indexOfMin = u;
  for (j = u + 1; j < niz.length; j++) {
    if (minValue > niz[j]) {
      numOps++;
      minValue = niz[j];
      indexOfMin = j;
    }
  }
  if (minValue < niz[u]) {
    numOps++;
    swap(niz, u, indexOfMin);
  }
  u++;
  
  if (firstLoop) {
    numOps = 0;
    firstLoop = false;
  }

  crtaj();
  ispisiPodatke(numOps, n);
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
    if (minValue < array[i])
      swap(array, i, indexOfMin);
  }
}
