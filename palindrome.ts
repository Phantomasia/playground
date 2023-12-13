function isPalindrome(x: number): boolean {
  let x_to_String = x.toString();
  let reversed_string = x_to_String.split("").reverse().join("");
  if (x_to_String === reversed_string) {
    return true;
  } else {
    return false;
  }
}

const trueCase = isPalindrome(565);
const falseCase = isPalindrome(766);

console.log(trueCase, falseCase);
