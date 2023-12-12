function twoSums1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

function twoSum2(nums: number[], target: number): number[] {
  const meta = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const tenance = target - nums[i];
    if (meta.has(tenance)) return [meta.get(tenance)!, i];

    meta.set(nums[i], i);
  }
  return [];
}

const test1 = twoSums1([12, 3, 4, 5, 6], 15);
const test2 = twoSum2([12, 3, 4, 5, 6], 7);
console.log(test1, test2);

/****
 * 
 * 

    twoSums1:
        This function uses a nested loop to compare each element in the nums array with every other element.
        It checks if the sum of the current pair of numbers is equal to the target.
        If a matching pair is found, it returns the indices of the two numbers.
        The function has a time complexity of O(n^2), where n is the length of the nums array. This is because it needs to compare each element with every other element in the worst case.

    twoSum2:
        This function utilizes a map to store the complement of each number encountered so far.
        It iterates through the nums array once.
        For each number, it calculates its complement by subtracting it from the target value.
        It then checks if the map already contains the complement. If so, it returns the indices of the two numbers.
        If the complement is not found, it adds the current number and its index to the map.
        The function has a time complexity of O(n), where n is the length of the nums array. It only needs to iterate through the array once, and the map lookup has an average time complexity of O(1).

 */
