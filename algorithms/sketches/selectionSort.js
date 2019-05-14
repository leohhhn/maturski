function setup() {
  alg = 3;
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

  // uzmi da je min prvi element
  let minValue = niz[u];
  let indexOfMin = u;
  for (j = u + 1; j < niz.length; j++) {
    // nadji najmanji element u nizu desno od trenutnog min
    if (minValue > niz[j]) {
      numOps++;
      minValue = niz[j];
      indexOfMin = j;
    }
  }
  // ako si nasao manje od trenutnog min, zameni ih
  if (minValue < niz[u]) {
    numOps++;
    swap(niz, u, indexOfMin);
  }
  u++;

  crtaj(niz, piramida, stubovi, kruznice);
  ispisiPodatke(slider, numOps, n);
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
