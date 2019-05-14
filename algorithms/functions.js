let niz;
let n;
let maxNiza;
let rectWidth = 2;
let ssRectWidth = rectWidth * 5;
let u; // universal counter used in draw()
let slider;
let canvas;
let step;
let piramida = true;
let stubovi = false;
let slowStubovi = false;
let kruznice = false;
let numOps;
let alg;

function windowResized() {
  resizeCanvas(5 * windowWidth / 10, 5.5 * windowHeight / 10);
  canvas.position(((windowWidth - width) / 2), ((windowHeight - height) / 2));
  resetSketch();
}

function resetSketch() {
  u = 0;
  numOps = 0;
  // pravljenje niza
  if (piramida) {
    n = ceil(width);
    niz = new Array(n);
    step = ((height - 100) / niz.length) / 2;
    slider.remove();
    slider = makeSlider(slider, canvas);
  } else if (stubovi) {
    n = floor(width / rectWidth);
    niz = new Array(n);
    step = (height / niz.length);
    slider.remove();
    slider = makeSlider(slider, canvas);
  } else if (kruznice) {
    n = floor(2 * width / 5);
    niz = new Array(n);
    step = 1;
    slider.remove();
    slider = makeSlider(slider, canvas);
  } else if (slowStubovi) {
    n = ceil(width / ssRectWidth);
    niz = new Array(n);
    step = (height / niz.length);
    slider.remove();
    slider = makeSlider(slider, canvas);
  }
  niz[0] = step;
  for (var i = 1; i < niz.length; i++) {
    niz[i] = niz[i - 1] + step;
  }

  maxNiza = niz[niz.length - 1];
  colorMode(HSB, maxNiza);
  shuffleArray(niz);
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  for (var i = array.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

function crtaj(array, piramida, stubovi, kruznice) {
  if (piramida) {
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      line(i, height / 2, i, height / 2 - array[i]);
      line(i, height / 2, i, height / 2 + array[i]);
    }
  } else if (stubovi) {
    fill(255);
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      rect(i * rectWidth, height - array[i], rectWidth, height);
    }
  } else if (kruznice) {
    noFill();
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      ellipse(width / 2, height / 2, i, array[i] / 2);
    }
  } else if (slowStubovi) {
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      fill(niz[i], maxNiza, maxNiza);
      rect(i * ssRectWidth, height - array[i], ssRectWidth, height);
    }
  }
}

function ispisiPodatke(s, compN, elemN) {
  fill(0, 0, maxNiza);
  let fps = s.value() + "fps";
  stroke(0, 0, maxNiza);
  textSize(25);
  text(fps, 290, 40);
  let brUtxt = "Broj operacija: " + compN;
  textSize(19);
  text(brUtxt, width - 220, 25);
  let nTxt = "Broj elemenata: " + elemN;
  text(nTxt, width - 195, 50);
}

function makeSlider(slider, canvas) {
  let value = 60;
  // switch (alg) {
  //   case 1:
  //     value = 60;
  //     break;
  //   case 2:
  //     break;
  //   case 3:
  //     value = 60;
  //     break;
  // }

  slider = createSlider(1, 60, value);
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);
  return slider;
}
