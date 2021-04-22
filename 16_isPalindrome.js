// Write a recursive function called isPalindrome which returns true if the string is passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// Examples:
//     isPalindrome('awesome') // false
//     isPalindrome('foobar') // false
//     isPalindrome('tacocat') // true
//     isPalindrome('amanaplanacanalpanama') // true
//     isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    let left= 0;
    let right = str.length - 1;
    // console.log(str);
    if (str.length < 2) return true;
    if (str.charAt(left) === str.charAt(right)) {
        return isPalindrome(str.slice(left + 1, right));
    } else {
        return false;
    }
}
console.log(isPalindrome('tacocat'));

//non recursive
// function isPalindrome(str) {
//     let midIdx = Math.floor(str.length / 2);
//     for (let i = 0; i < midIdx; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }
    
//     return true;
    
// }
// console.log(isPalindrome('amanaplanacanalpanama'));