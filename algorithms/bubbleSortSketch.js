let niz = [];
const RECTWIDTH = 2;
let i = 0;
let slider;
let canvas;
let midline;
let resetButton;

function setup() {
  canvas = createCanvas(900, 500);
  resetSketch();
  //canvas.parent('sketchDiv');
  midline = height / 2;
  // broj elemenata u nizu

  niz = new Array(width / RECTWIDTH);
  for (var i = 0; i < niz.length; i++) {
    //popuni niz
    niz[i] = int(random(height) / 2);
  }
  slider = createSlider(1, 60, 20);
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);

  resetButton = createButton("reset");
  resetButton.mousePressed(resetSketch);

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

  /* crtaj pravougaonike
  for (var z = 0; z < niz.length; z++) {
    rect(z * RECTWIDTH, height - niz[z], RECTWIDTH, height);
  }
  */

  for (var z = 0; z < niz.length; z++) {

    line(z * RECTWIDTH, midline, z * RECTWIDTH, midline - niz[z]);
    line(z * RECTWIDTH, midline, z * RECTWIDTH, midline + niz[z]);
  }
}


function resetSketch() {


}
