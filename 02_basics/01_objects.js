const obj = { id: 1, email: "sj@gmail.com" }; // non-singleton object

console.log(Object.keys(obj));
// Object.values();
// Object.entries();

/************* *****************/
console.log("return type of above all Object method will be array");

const obj1 = new Object(); // singleton Object
// Object.create() // singleton Object

const arr = [];
const arr2 = [{ 1: "a" }, { 2: "b" }];

const arr3 = [...arr, ...arr2];
// console.log(arr3)

/********** How to access keys written in String & Symbol ************/ 
// opt + shift + A

const symbol = Symbol("Key1");
// console.log(symbol)

const objWithKeyInStringAndSymbol = {
  [symbol]: "Key1",
  names: "Object",
  age: 3434,
  "age sd": 18,
};

for (let x in objWithKeyInStringAndSymbol) {
  console.log(objWithKeyInStringAndSymbol[x]);
}

console.log(objWithKeyInStringAndSymbol.symbol); // undefined
console.log(objWithKeyInStringAndSymbol[symbol]); // Key1
// console.log(objWithKeyInStringAndSymbol.names); // names is not defined
// console.log(objWithKeyInStringAndSymbol[names]); // names is not defined
console.log(objWithKeyInStringAndSymbol["names"]); // Object
console.log(objWithKeyInStringAndSymbol.age); // 18
