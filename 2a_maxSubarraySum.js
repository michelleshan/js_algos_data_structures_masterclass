function maxSubarraySum(arr, n) {
    //create object to return, sum
    //loop through array with a window of n values
    //return object
    if (n > arr.length) {
        return null;
    }
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length - n + 1; i++) {
        for (let j = i; j < n; j++) {
            sum += arr[j];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
        sum = 0;
    }
    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],4));

function maxSubarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3));
