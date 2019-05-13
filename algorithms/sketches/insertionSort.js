function draw() {
  frameRate(slider.value());
  background(30);
  // draw se ponavlja, ponasa se kao for loop
  if (u + 1 < niz.length) { // TODO why does the last hoop not get sorted sometimes??
    for (var j = u; j > 0; j--) {
      numOps++;
      if (niz[j - 1] > niz[j]) {
        numOps++;
        swap(niz, j - 1, j);
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
        swap(array, j - 1, j);
      }
    }
  }
}
