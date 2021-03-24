// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:
//     areThereDuplicates(1, 2, 3) => false
//     areThereDuplicates(1, 2, 2) => true
//     areThereDuplicates('a', 'b', 'c', 'a') => true

function areThereDuplicates(...args) {
    //create an array and push arguments into it
    //create an object to keep track of frequency of items in the array
    //loop through array 
        //if item exists in object, return true
        //if item does not exist in object, add item to object and set to 1
    //return false
    const arr = args;
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (frequency[item]) {
            return true;
        } else {
            frequency[item] = 1;
        }
    }
    console.log(frequency);
    return false;
}
console.log(areThereDuplicates(1, 2, 2));


function areThereDuplicates2() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]])
    }
    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}
console.log(areThereDuplicates2(1, 2, 2));

function areThereDuplicates3(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}
console.log(areThereDuplicates3(1, 2, 2));

function areThereDuplicates4() {
    return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates4('a', 'b', 'c', 'b'));