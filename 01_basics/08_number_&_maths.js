const number = new Number(239)     // [Number: 239]

console.log(number);                    // [Number: 239]
console.log(number.toString());        // 239

    // **********************************************************************************

    /* It changes number into bytes when passes argument to the converter function */      "--> Very IMP"
// console.log(Number(8).toString(2));        // 1000
// console.log(Number(4).toString(2));        // 100
// console.log(Number(2).toString(2));        // 10
// console.log(Number(1).toString(2));        // 1
// console.log(Number(0).toString(2));        // 0

// check tofixed()

const toPrecision = 239.89

// console.log(toPrecision.toFixed(1))     // 239.9
// console.log(289.987.toFixed(3))         // 239.987
// console.log(289.987.toFixed(2))         // 239.99
// console.log(289.987.toFixed(4))         // 239.9870
// console.log(289.987.toFixed(5))         // 239.98700

// check toLocaleString()

const toFixed = 32.898988987787

console.log(toFixed.toLocaleString())    // 32.899

console.log(656544.8999.toLocaleString())    // 656,544.9
console.log(656544.89879.toLocaleString())   // 656,544.899


// check toPrecision() add +1 to the last number of counting and/if next number is 5 or greater than 5

console.log(toFixed.toPrecision(3))    // 32.9
console.log(toFixed.toPrecision(4))    // 32.90

console.log(toFixed.toPrecision(2));    // 33
console.log(656544.8979.toPrecision(9))   // 656,544.898



/* Maths */

console.log(Math.abs(-6.786))    // 6.786

console.log(Math.trunc(123213123.534564)) // 123213123

console.log(Math.ceil(Math.random()))  // 1
console.log(Math.floor(Math.random()));  // 0
