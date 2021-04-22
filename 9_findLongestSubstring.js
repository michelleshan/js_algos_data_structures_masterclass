// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// Examples:
//     findLongestSubstring('') => 0
//     findLongestSubstring('rithmschool') => 7
//     findLongestSubstring('thisisawesome') => 6
//     findLongestSubstring('thecatinthehat') => 7
//     findLongestSubstring('bbbbbb') => 1
//     findLongestSubstring('longestsubstring') => 8
//     findLongestSubstring('thisishowwedoit') => 6
// Time Complexity - O(n)

//Breakdown:
    //create counter object
    //create substring variable set to 0
    //create longestSubstring variable set to 0
    //create tempIndex variable set to 0
    //create temp variable where i should begin, set initially to 0
    //loop through string starting at 0
        //if character does not exist in counter
            //add character to counter and set to 1
            //add 1 to substring
        //if character exists in counter
            //set longestSubstring = substring
            //set tempIndex to i - 1
            //empty counter
    //loop through string starting at tempIndex
        //if character does not exist in counter
            //add character to counter and set to 1
            //add 1 to substring
        //if character exists in counter
            //set longestSubstring as the bigger of longestSubstring and substring

    //return longestSubstring length

function findLongestSubstring(str) {
    let seen = {};
    let longest = 0;
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    console.log(seen);
    return longest;
}
console.log(findLongestSubstring('longestsubstring'));