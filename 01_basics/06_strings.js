/* Creating variable with string value */

const string = 'hello'

console.log(string[3])

const hello = new String('Hello')
console.log(hello[4]);

/* all string method don't update the variable using it */

const z = string.toLocaleUpperCase()

console.log(string)
console.log(z);