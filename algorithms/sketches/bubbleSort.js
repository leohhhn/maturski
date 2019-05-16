function setup() {
  alg = 1;
  canvas = createCanvas(5 * windowWidth / 10, 5.5 * windowHeight / 10); // 50% width, 55% height
  canvas.parent('sketchContainer');
  ellipseMode(RADIUS);
  resetSketch();
  noLoop();
}

function draw() {
  colorMode(RGB);
  background(25);
  colorMode(HSB, maxNiza);

  if (u < niz.length) {
    // za svako i, dok je i < duzine niza
    for (let j = 0; j < niz.length - 1 - u; j++) {
      // - 1 jer ne treba da pitamo za poslednji clan, jer nema nista posle njega
      // - i jer je desni deo niza vec sortiran, pa ne moramo da proveravamo
      var a = niz[j];
      var b = niz[j + 1];
      numOps++;
      if (a > b) {
        numOps++;
        swap(niz, j, j + 1);
      }
    }
  }

  u++;
  if (firstLoop)
    numOps = 0;
  crtaj(niz, piramida, stubovi, kruznice);
  ispisiPodatke(numOps, n);
}


function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      let a = array[j];
      let b = array[j + 1];
      if (a > b) {
        swap(array, j, j + 1);
      }
    }
  }
}
