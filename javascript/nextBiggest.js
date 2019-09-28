export const nextBiggest = (num) => {
  let numCopy = num;
  const arr = (num + '').split('');
  const set = [...new Set(arr)];
  if (set.length === 1 || isDecending(arr)) return -1;

  const sorted = arr.sort().join('');

  for (let i = numCopy + 1; i < Infinity; i++) {
    const arr2 = (i + '').split('');
    const sortedCopy = arr2.sort().join('');
    if (sortedCopy === sorted) {
      return i;
    }
  }
}

export const isDecending = (arr) => {
  const newArr = [];
  arr.forEach(element => {
    newArr.push(Number(element))
  });

  for (let i = 0; i < newArr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      return false;
    }
  }
  return true;
  
}