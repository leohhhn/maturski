function setup() {
  alg = 4;
  canvas = createCanvas(5 * windowWidth / 10, 5.5 * windowHeight / 10); // 50% width, 55% height
  canvas.position(((windowWidth - width) / 2), ((windowHeight - height) / 2)); // center the canvas
  ellipseMode(RADIUS);
  background(30);
  slider = makeSlider(slider, canvas);
  resetSketch();
}

function draw() {
  frameRate(slider.value());
  background(30);

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

  crtaj(niz, piramida, stubovi, kruznice);
  ispisiPodatke(slider, numOps, n);

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
