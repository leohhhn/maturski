let niz;
let n;
let rectWidth = 6; // mora da bude broj koji je delilac width, fix later
let u = 0; // universal counter used in draw()
let slider;
let canvas;
let step;
let piramida = false;
let stubovi = true;
let resetButton;

function setup() {
  canvas = createCanvas(900, 500);
  resetButton = createButton("Reset!");
  resetButton.mousePressed(resetSketch);
  makeSlider();
  resetSketch();
}

function resetSketch() {
  u = 0;
  // pravljenje niza
  niz = [];
  if (piramida) {
    n = width;
    niz = new Array(n);
    step = (height / niz.length) / 2;
  } else if (stubovi) {
    n = width / rectWidth;
    niz = new Array(n);
    step = (height / niz.length);
    slider.remove();
    makeSlider();
  }
  niz[0] = step;
  for (var i = 1; i < niz.length; i++) {
    niz[i] = niz[i - 1] + step;
  }
  shuffleArray(niz);
}

function draw() {
  frameRate(slider.value());
  background(30);
  // ispisi fps
  fill(255);
  let fps = slider.value() + "fps";
  stroke(255);
  textSize(25);
  text(fps, 290, 40);

  // draw se ponavlja, ponasa se kao for loop
  if (u < niz.length) {
    // za svako i, dok je i < duzine niza
    for (let j = 0; j < niz.length - 1 - u; j++) {
      // - 1 jer ne treba da pitamo za poslednji clan, jer nema nista posle njega
      // - i jer je desni deo niza vec sortiran, pa ne moramo da proveravamo
      var a = niz[j];
      var b = niz[j + 1];
      if (a > b) {
        swap(niz, j, j + 1);
      }
    }
  }
  u++;

  // crtanje
  if (piramida) {
    stroke(255, 0, 0);
    for (var i = 0; i < niz.length; i++) {
      line(i, height / 2, i, height / 2 - niz[i]);
      line(i, height / 2, i, height / 2 + niz[i]);
    }
  } else if (stubovi) {
    stroke(0);
    fill(255);
    for (var i = 0; i < niz.length; i++)
      rect(i * rectWidth, height - niz[i], rectWidth, height);
  }
}

function makeSlider() {
  slider = createSlider(1, 60, 20);
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; i < array.length - i - 1; j++) {
      let a = array[j];
      let b = array[j + 1];
      if (a > b) {
        swap(array, j, j + 1);
      }
    }
  }
}
