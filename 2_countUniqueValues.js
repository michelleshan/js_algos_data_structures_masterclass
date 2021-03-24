//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
function countUniqueValues(arr) {
    //create object to return
    //loop through array
        //if value does not exist in object, +1 to object
        //if value already exists in object, do nothing
    //return object
    if (arr.length === 0) {
        return 0;
    }
    let uniqueValues = 0; 
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        if (arr[j] != arr[i]) {
            uniqueValues += 1;
        }
    }
    return uniqueValues;
}

console.log(countUniqueValues([]));
