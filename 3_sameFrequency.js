// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Your solution MUST have the following complexities:
// TIME: O(N)
// Sample Input:
//     sameFrequency(182, 281) => true
//     sameFrequency(34, 14) => false
//     sameFrequency(3589578, 5879385) => true
//     sameFrequency(22, 222) => false

function sameFrequency(int1, int2) {
    //create empty frequency counter object {1: 1, 8:1, 2: 1}
    //convert integers to string objects (integer.toString())
    //if two strings are different lengths, return false
    //loop through first string
        //if character exists in object, +1 to character in object
        //if character does not exist in object, add to object and set to 1
    //loop through second string
        //if character exists in object, -1 to character in object
        //if character does not exist in object, return false
    //return true
    const counter = {};
    const str1 = int1.toString();
    const str2 = int2.toString();
    if (str1.length != str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (counter[char] > 0) {
            counter[char] += 1;
        } else {
            counter[char] = 1;
        }
        console.log(counter);
    }
    for (let j = 0; j < str2.length; j++) {
        let char = str2[j];
        if (counter[char]) {
            counter[char] -= 1;
        } else {
            return false;
        }
    }
    return true;
}
console.log(sameFrequency(3589578, 5879385))