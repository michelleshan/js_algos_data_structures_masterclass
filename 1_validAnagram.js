// function validAnagram(str1, str2){
//     //if str1.length != str2.length --> return false;
//     if (str1.length != str2.length) {
//         return false;
//     }
//     //create frequency counter for characters in string 1
//     let freqStr1 = {};
//     //create frequency counter for characters in string 2
//     let freqStr2 = {};
//     //loop through string 1
//     for (let char of str1){
//         //if character exists +1
//         if (freqStr1[char] > 0) {
//             freqStr1[char]++;
//         } 
//         //if character doesn't exist, add it and set it to 1
//         else {
//             freqStr1[char] = 1;
//         }
//     }
//     //loop through string 2
//         //if character exists +1
//         //if character doesn't exist, add it and set it to 1
//     for (let char of str2){
//         //if character exists +1
//         if (freqStr2[char] > 0) {
//             freqStr2[char]++;
//         } 
//         //if character doesn't exist, add it and set it to 1
//         else {
//             freqStr2[char] = 1;
//         }
//     }
//     //if keys and values of freqcounter1 = freqcounter2 --> return true
// }
// console.log(validAnagram('rat','tar'))

function validAnagram(str1, str2) {
    //if str1.length != str2.length --> return false;
    if (str1.length != str2.length) {
        return false;
    }
    //create frequency counter for characters in string 1
    const lookup = {};
    //loop through string 1
    // for (let i = 0; i < str1.length; i++) {
    //     lookup[str1[i]] ? lookup[str1[i]] += 1 : lookup[str1[i]] = 1;
    // }
    for (let i = 0; i < str1.length; i++) {
        //if character exists +1
        //if character doesn't exist, add it and set it to 1
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    console.log(lookup);
    //loop through string 2
    for (let i = 0; i < str2.length; i++) {
        //if character exists in lookup, -1
        //if character does not exist in lookup, return false;
        let letter = str2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(validAnagram('rater','tarer'));