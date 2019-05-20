function setup() {
  canvas = createCanvas(9 * dWidth / 10, 500); // 50% width, 55% height
  canvas.parent('sketchContainer');
  ellipseMode(RADIUS);
  resetSketch();
  quickSort(niz, 0, niz.length - 1);
  noLoop();
}

function draw() {
  colorMode(RGB);
  background(25);
  colorMode(HSB, maxNiza);
  // if (firstLoop) {
  //   numOps = 0;
  //   firstLoop = false;
  // }
  crtaj(niz, piramida, stubovi, elipse);
  ispisiPodatke(numOps, n);

}

async function quickSort(array, start, end) {
  if (start < end) {
    let p = await partition(array, start, end);
    await Promise.all([
      quickSort(array, start, p),
      quickSort(array, p + 1, end)
    ]);
  }
}

async function partition(array, start, end) {
  let pivot = array[start];
  let i = start - 1;
  let j = end + 1;
  while (true) {
    do {
      i++;
    } while (array[i] < pivot);
    do {
      j--;
    } while (array[j] > pivot);
    if (i >= j)
      return j;
    asyncSwap(array, i, j);
  }
}

async function asyncSwap(array, a, b) {
  await sleep(1);
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
