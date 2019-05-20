function draw() {
  // colorMode(RGB);
  // background(25);
  // colorMode(HSB, maxNiza);
  // if (firstLoop) {
  //   numOps = 0;
  //   firstLoop = false;
  // }
  // crtaj(niz, piramida, stubovi, elipse);
  // ispisiPodatke(numOps, n);
  // 

}

function quickSort(array, start, end) {
  if (start < end) {
    let p = partition(array, start, end);
    quickSort(array, start, p);
    quickSort(array, p + 1, end);
  }
}

function partition(array, start, end) {
  let pivot = array[start + (end - start) / 2];
  let i = start - 1;
  let j = end + 1;
  while (true) {
    // Find leftmost element greater than 
    // or equal to pivot 
    do {
      i++;
    } while (array[i] < pivot);

    while (array[i] < pivot);
    // Find rightmost element smaller than 
    // or equal to pivot 
    do {
      j--;
    } while (array[j] > pivot);

    // If two pointers met. 
    if (i >= j)
      return j;
    swap(array, i, j);
  }
}
