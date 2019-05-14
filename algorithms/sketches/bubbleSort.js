function setup() {
  alg = 1;
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
  // draw se ponavlja, ponasa se kao for loop
  if (u < niz.length) {
    // za svako i, dok je i < duzine niza
    for (let j = 0; j < niz.length - 1 - u; j++) {
      // - 1 jer ne treba da pitamo za poslednji clan, jer nema nista posle njega
      // - i jer je desni deo niza vec sortiran, pa ne moramo da proveravamo
      var a = niz[j];
      var b = niz[j + 1];
      if (a > b) {
        numOps++;
        swap(niz, j, j + 1);
      }
    }
  }
  u++;
  crtaj(niz, piramida, stubovi, kruznice);
  ispisiPodatke(slider, numOps, n);
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
