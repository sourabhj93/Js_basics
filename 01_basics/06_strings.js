/* Creating variable with string value */

const string = "hello";

console.log(string[3]);     // l

const newObject = new String("hello");
console.log(newObject);      // [String: 'hello']
console.log(newObject[5]);      // undefined

/* all string method don't update the variable using it */

const z = string.toLocaleUpperCase('en-Ar');
console.log(z.toUpperCase());

console.log(string);
console.log(z);

const names = "Sourabh"
console.log("0101".toString());
