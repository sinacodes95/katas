// function swap(a, b, arr){
//   let tmp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = tmp;
// }
// function selectionSort(array) {
//   for (let i = 0; i < array.length-1; i++){
//     let min = i;
//     for (let j = i+1; j < array.length; j++){
//       if (array[min] > array[j]) min = j;
//     }
//     swap(i, min, array);
//   }
//   return array;
// }

function selectionSort(array) {
  // change code below this line
  function swap(a, b, arr){
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  for (let i = 0; i < array.length-1; i++){  
    let min = i;
    for (let x = i +1; x < array.length; x++) {
      if(array[x] < array[min] ) min = x;
    }
    swap(i, min, array);
  }

  // change code above this line
  return array;
}
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))