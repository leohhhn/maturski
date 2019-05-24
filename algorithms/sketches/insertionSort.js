function setup() {
  canvas = createCanvas(9.5 * dWidth / 10, 500); // 50% width, 55% height
  canvas.parent('sketchContainer');
  ellipseMode(RADIUS);
  resetSketch();
  noLoop();
}

function draw() {
  colorMode(RGB);
  background(25);
  colorMode(HSB, maxNiza);
  // u + 1 jer je u globalno, pocinje od 0
  if (u + 1 < niz.length) {
    for (var j = u + 1; j > 0; j--) {
      numOps++;
      if (niz[j - 1] > niz[j]) {
        numOps++;
        swap(niz, j, j - 1);
      }
    }
  }
  u++;
  if (firstLoop) {
    numOps = 0;
    firstLoop = false;
  }
  
  crtaj(niz, piramida, stubovi, elipse, polarCircle);
  ispisiPodatke(numOps, n);
}

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    for (var j = i; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        swap(array, j, j - 1);
      }
    }
  }
}
