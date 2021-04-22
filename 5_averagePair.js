// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Sample Input:
//     averagePair([1, 2, 3], 2.5) => true
//     averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) => true
//     averagePair([-1, 0, 3, 4, 5, 6], 4.1) => false
//     averagePair([], 4) => false

//create variable average
//loop through array
    //if values at index and index+1 = target average, return true
//return false

function averagePair(arr, target) {
    let right = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        let average = (arr[i] + arr[right])/2;
        console.log(average);
        if (average > target) {
            right--;
        } else if (average === target) {
            return true;
        }
    }
    return false;
}
console.log(averagePair([1, 2, 3], 2.5));

//solution
function averagePair2(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let average = (arr[start] + arr[end])/2;
        if (average === target) {
            return true;
        } else if (average < target) {
            start ++;
        } else {
            end --;
        }
    }
    return false;
}
console.log(averagePair2([1, 2, 3], 2.5));
