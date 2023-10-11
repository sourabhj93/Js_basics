"use Strict";

const w = true;
console.log(Number(w)); // 1
console.log(typeof Number(w)); // number

const x = null;
const a = "";
console.log(Number(a)); // 0
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

/* Left to right conversion */
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32
console.log(1 + + "2" + 2) //5


/**********************          Increment operation        **************************/
/* Left to right conversion */

let es = 3;
/* It's first start from "ds" & look toward assignment but there it's "++" then "++" is an operand we can't assign it, then 
    it will get "es" so it will update es to "4" & now ds have value of "4" as "es" value is now evaluated */
const ds = ++es;
// es is 4; ds is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n


/******************    Grreater than or equal to or === to      *****************/

/* When ever there is a comparision with greater than or smaller than, then it will convert both the comparator value
 to number */
console.log("3" > 2); // true

/* So here null becomes "Number(null)" to 0 & o is less than 2 */
console.log(null < 2); // true

/* So here null will remain null as "==" comparator just check values, so null value is null {no conversion} */
console.log(null == 0)
const sa = null
/* Here because of less than comparator null again get converted to "Number(null)" i.e, to 0 & {0 is equal to 0}  */
console.log(sa >= 0);