function setup() {
  canvas = createCanvas(9.5 * dWidth / 10, 500); // 50% width, 55% height
  canvas.parent('sketchContainer');
  ellipseMode(RADIUS);
  resetSketch();
  gap = Math.floor(n / 2);
  //noLoop();
}

function draw() {
  colorMode(RGB);
  background(25);
  colorMode(HSB, maxNiza);
  crtaj(niz, piramida, stubovi, elipse, polarCircle);
  ispisiPodatke(numOps, n);
}

let gap;
let x = gap;

function tick() {
  for (var i = 0; i < 3000; i++) {
    let tmp;
    if (x > n) {
      gap = Math.floor(gap / 2);
      x = gap;
      tmp = arr[x];
      for (var y = x; y >= gap && niz[y - gap] > tmp; y -= gap) {
        niz[y] = niz[y - gap];
      }
    }
    if (gap <= 0) {
      clearInterval(interval);
      return;
    }
    niz[y] = tmp;
    x++;
  }
}

// i - x, j - y
function shellSort1(arr) {
  for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < n; i++) {
      let tmp = arr[i];
      for (var j = i; j >= gap && arr[j - gap] > tmp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = tmp;
    }
  }
}
