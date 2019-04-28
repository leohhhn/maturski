function makeRandomArray(n) {
  // makes a randomly filled array with length n, ints 0-100
  array = [];
  for (var i = 0; i < n; i++) {
    array[i] = Math.trunc(100 * Math.random()) + 1;
  }
  return array;
}

function swap(array, a, b){
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
