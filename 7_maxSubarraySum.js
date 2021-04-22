// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// Examples:
//     maxSubarraySum([100, 200, 300, 400], 2) => 700
//     maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) => 39
//     maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) => 5
//     maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) => 5
//     maxSubarraySum([2, 3], 3) => null
// Constraints:
//     Time Complexity - O(N)
//     Space Complexity - O(1)

//Breakdown:
    //create variable sum set to 0
    //if num > array length, then return null
    //loop through array using variable i, must be less than num
        //add arr[i] to sum
        //create variable maxSum and set to sum
    //loop through array using variable j, must be less than array length
        //for sum, subtract the value of the first index of window and add the next index value
        //if sum > maxSum, then maxSum = sum
        //if sum < maxSum, do nothing
    //return maxSum

function maxSubarraySum(arr, num) {
    let sum = 0;
    let maxSum = 0;
    if (num > arr.length) return null;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
        maxSum = sum;
    }
    for (let j = num; j < arr.length; j++) {
        sum = sum - arr[j-num] + arr[j];
        if (sum > maxSum) maxSum = sum;
    }
    return maxSum;
}
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));