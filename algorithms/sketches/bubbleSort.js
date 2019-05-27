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

  if (u < niz.length) {
    for (let j = 0; j < niz.length - 1 - u; j++) {
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
  
  if (firstLoop) {
    numOps = 0;
    firstLoop = false;
  }
  crtaj();
  ispisiPodatke();
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
