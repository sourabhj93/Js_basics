/* to convert an array/nested array into a plane array */
const nestedArr = [1, 2, 3, [4, 5], 6, [7, 6, [7, 8]]]

/* Value passed inside the flat function is tell how much in depth u want an
 array to be get flattened */
const flatArr = nestedArr.flat(2) 
console.log(flatArr) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 8]

const flatArr1 = nestedArr.flat(1);
console.log(flatArr1); // [ 1, 2, 3, 4, 5, 6, 7, 6, [ 7, 8 ] ]

/* We can also pass infinite inside flat() */

const removeDuplicates = new Set(flatArr)
console.log(removeDuplicates);    // Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
console.log(...removeDuplicates); // 1 2 3 4 5 6 7 8

/* To create an array from ARRAY methods */

const value = {1: 'a', 2: 'b'}
console.log(Array.from(value))  // []
console.log(Array.of(value))  // [{1: 'a', 2: 'b'}]
console.log(Array.of(1, 2, 3))  // [1, 2, 3]


/* Method to identified whether particular varible is an ARRAY or not */

console.log(Array.isArray([])) // true
console.log((11).toString()) // 11