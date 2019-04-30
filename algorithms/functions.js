function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// scrap code

/*
for (var i = 0; i < niz.length; i++) {
//  popuni niz random
  niz[i] = random(height) / 2;
}
*/

// crtaj pravougaonike
// for (var z = 0; z < niz.length; z++)
//   rect(z * RECTWIDTH, height - niz[z], RECTWIDTH, height);
