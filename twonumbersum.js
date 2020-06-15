/*
 * Write a function that takes in a non-empty array of distinct integers and an
 * integer representing a target sum. If any two numbers in the input array sum
 * up to the target sum, the function should return them in an array, in any
 * order. If no two numbers sum up to the target sum, the function should return
 * an empty array.
 * Note that the target sum has to be obtained by summing two different integers
 * in the array; you can't add a single integer to itself in order to obtain the
 * target sum.
 * You can assume that there will be at most one pair of numbers summing up to
 * the target sum.
 */

function twoNumberSum(array, targetSum) {
  // Write your code here.
  let obj = [];
  array.map( (a) =>
  {
    array.map((b) => {
         if(a + b === targetSum){
           obj = [a, b];
         }
         else{ return; }
       }
    )
  });
  return obj;
}


function twoNumberSum2(array, targetSum) {
  // Write your code here.
  for(let key of array){
    for(let v = 0; v <= array.length; v++){
      if(key + array[v] === targetSum && key !== array[v]){
        return [key, array[v]];
      }
    }
  }
  return [];
}

/*
  Test:
- array= [3, 5, -4, 8, 11, 1, -1, 6]
- targetSum = 10
 */
