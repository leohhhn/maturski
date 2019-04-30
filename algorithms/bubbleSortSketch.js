let niz;
const RECTWIDTH = 2;
let i = 0;
let slider;
let canvas;
let midline;

function setup() {
  canvas = createCanvas(900, 500);
  slider = createSlider(1, 60, 20);
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);
  midline = height / 2;

  niz = new Array(width / RECTWIDTH);
  //popuni niz lepo pa ga promesaj
  let step = (height / niz.length) / 2;
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
  if (i < niz.length) {
    // za svako i, dok je i < duzine niza
    for (let j = 0; j < niz.length - 1 - i; j++) {
      // - 1 jer ne treba da pitamo za poslednji clan, jer nema nista posle njega
      // - i jer je desni deo niza vec sortiran, pa ne moramo da proveravamo
      var a = niz[j];
      var b = niz[j + 1];
      if (a > b) {
        swap(niz, j, j + 1);
      }
    }
  }

  // povecaj i kao u for loop-u
  i++;

  // crtanje
  stroke(255, 0, 0);

  // crtaj piramidu
  for (var z = 0; z < niz.length; z++) {
    line(z * RECTWIDTH, midline, z * RECTWIDTH, midline - niz[z]);
    line(z * RECTWIDTH, midline, z * RECTWIDTH, midline + niz[z]);
  }
}
