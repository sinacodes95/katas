// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
// smallestMult(5) should return 60.
// smallestMult(7) should return 420.
// smallestMult(10) should return 2520.
// smallestMult(13) should return 360360.
// smallestMult(20) should return 232792560.

// first method

// const smallestMult = (n) => {
//   const numRange = [];
//   for (let i = 1; i <= n; i++) {
//     numRange.push(i)
//   }

//   let found = true;
//   let lcm = 0;

//   while(found) {
//     lcm++
//     for (let i = numRange[0]; i <= numRange[numRange.length - 1]; i++) {
//       if (lcm % i != 0) {
//         break;
//       }
//       else if(i == numRange[numRange.length - 1]) {
//         found = false;
//       }
//     }
//   }
  
//   return lcm;
// }


// second method

//lcm(a,b) = a * b / gcd(a, b);

// gcd(a,b) = euclidean 

const lcm = (a, b) => {
  return a * b / gcd(a, b);
}

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a%b);
}

const smallestMult = (n) => {
  let maxlcm = 1;
  
  for (let i = 2; i <= n; i++) {
    maxlcm = lcm(maxlcm, i)
  }
  
  return maxlcm
}

console.log(smallestMult(13))
