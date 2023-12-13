function isPalindromeString(x: number): boolean {
  let x_to_String = x.toString();
  let reversed_string = x_to_String.split("").reverse().join("");
  if (x_to_String === reversed_string) {
    return true;
  } else {
    return false;
  }
}

function isPalindromeNumber(x: number): boolean {
  if (x < 0) return false;
  let reversed_sum = 0;
  let original_x = x;
  while (x > 0) {
    reversed_sum = reversed_sum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (original_x === reversed_sum) {
    return true;
  } else {
    return false;
  }
}

const trueCase1 = isPalindromeString(565);
const falseCase1 = isPalindromeString(766);

const trueCase2 = isPalindromeNumber(808);
const falseCase2 = isPalindromeNumber(879);
console.log({
  palindrom_using_string: `the first case using String is **${trueCase1}** while the second is **${falseCase1}**`,
  palindrome_using_number: `the first case using Number is **${trueCase2}** while the second is **${falseCase2}**`,
});
