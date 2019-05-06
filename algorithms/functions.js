function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  for (var i = array.length; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

function crtaj(array, piramida, stubovi, kruznice) {
  if (piramida) {
    stroke(255, 0, 0);
    for (var i = 0; i < array.length; i++) {
      line(i, height / 2, i, height / 2 - array[i]);
      line(i, height / 2, i, height / 2 + array[i]);
    }
  } else if (stubovi) {
    stroke(0);
    fill(255);
    for (var i = 0; i < array.length; i++)
      rect(i * rectWidth, height - array[i], rectWidth, height);
  } else if (kruznice) {
    stroke(255, 0, 0);
    noFill();
    for (var i = 0; i < array.length; i++) {
      ellipse(width / 2, height / 2, i, array[i] / 2);
    }
  }
}

function ispisiPodatke(s, compN, elemN) {
  fill(255);
  let fps = s.value() + "fps";
  stroke(255);
  textSize(25);
  text(fps, 290, 40);
  let brUtxt = "Broj poredjenja: " + compN;
  textSize(19);
  text(brUtxt, width - 195, 25);
  let nTxt = "Broj elemenata: " + elemN;
  text(nTxt, width - 195, 50);
}

function makeSlider(slider, canvas, alg) {
  switch (alg) {
    case 1:
      slider = createSlider(1, 60, 20);
      break;
    case 2:
      slider = createSlider(1, 60, 60);    
  }
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);
  return slider;
}
