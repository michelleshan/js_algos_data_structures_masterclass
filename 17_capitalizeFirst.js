// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
// Example:
//     capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// (arr[i].toUpperCase().charAt(0) + arr[i].slice(1))

function capitalizeFirst(arr) {
	// base case
	// if arr.length is empty return [] (empty array)
	// return [properfy(arr[0], ...capitalizeFirst(arr.slice(1))] returning a new array

	if (arr.length === 0) return [];
	return [properfy(arr.shift()), ...capitalizeFirst(arr)];
}

// helper function
function properfy(str) {
	// capitalize the first letter and return the rest of the word joined
	return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirst(['car']));
