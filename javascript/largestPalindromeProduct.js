// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n-digit numbers.
// largestPalindromeProduct(2) should return 9009.
// largestPalindromeProduct(3) should return 906609.

const largestPalindromeProduct = (n) => {
  const isPalindrome = (num) => {
    num = num + '';
    return num === num.split('').reverse().join('');
  }
  let x = '';
  let y = '';
  let num = n
  while (num > 0) {
    x += '9';
    y += '9';
    num--;
  }

  x = Number(x);
  y = Number(y);


  let largest = 0

  for (let i = x; String(i).length === n; i--) {
    for (let j = y; String(j).length === n; j--) {
      let result = i * j;
      if (isPalindrome(result)) {
        largest = Math.max(result, largest);
      }
    }
  }

  console.log(largest)
  return largest;
}

largestPalindromeProduct(2)