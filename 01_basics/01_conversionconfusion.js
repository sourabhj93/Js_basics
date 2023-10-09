"use Strict";

const w = true;
console.log(Number(w)); // 1
console.log(typeof Number(w)); // number

const x = null;
console.log(Number(x)); // 0
console.log(typeof Number(x)); // number

const y = undefined;
console.log(Number(y)); // NaN
console.log(typeof Number(y)); // number

const z = "33abc";
console.log(Number(z)); // NaN only in JS not in TS
console.log(typeof Number(z)); // number

/* typeof NaN ==> number */

/* Boolean("") */ 
/* console.log(Boolean("")) */ // false
