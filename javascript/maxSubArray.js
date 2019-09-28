export const maxSubArray = (arr) => {
  const allNegative = arr.filter(val => val >= 0).length;
  if (allNegative === 0) return 0;

  if (allNegative === arr.length) {
    return arr.reduce((acc, val) => {
      return acc + val;
    },0)
  }

  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subArr = arr.slice(i, j+1)
      const sum = subArr.reduce((acc, val) => {
        return acc + val
      }, 0);
      max = Math.max(max, sum);
    }
  }

  return max;
}