// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
//     isSubsequence('hello', 'hello world') => true
//     isSubsequence('sing', 'sting') => true
//     isSubsequence('abc', 'abracadabra') => true
//     isSubsequence('abc', 'acb') => false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N+M)
// Space Complexity - O(1)

//create str3 variable
//loop through string 2
    //loop through string 1
        //if character matches add to str3
        //if character does not match do nothing
//if str3 == str1 return true
//else return false

//attempt #1
// function isSubsequence(str1, str2) {
//     let counter = {}
//     let str3 = ""
//     for (let i = 0; i < str2.length; i++) {
//         for (let j = 0; j < str1.length; j++) {
//             if (str1[j] == str2[i] && !counter[str2[i]]) counter[str2[i]] = 1
//         }
//     }
//     // console.log(Object.keys(counter));
//     str3 = Object.keys(counter).join("").toString();
//     console.log(str3);
//     if (str3 == str1) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isSubsequence('hello', 'hello world'));

//solution
function isSubsequence2(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] == str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}
console.log(isSubsequence2('abc', 'abracadabra'));