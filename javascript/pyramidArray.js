// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [  [1]  ]
// pyramid(2) => [  [1],  [1, 1]  ]
// pyramid(3) => [  [1],  [1, 1],  [1, 1, 1]  ]
// Note: the subarrays should be filled with 1s

// solution #1
// export const buildPyramid = (int) => {
//   const pyramid = [];
//   for (let i = 0; i < int; i++) {
//     pyramid.push([1]);
//     pyramid[i - 1] && pyramid[i].push(...pyramid[i - 1]);
//   }
//   return pyramid;
// }

// solution #2
export const buildPyramid = (n) => {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(new Array(i).fill(1))
  }
  return arr
}