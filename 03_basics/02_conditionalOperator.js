/* It will take 1st value if it's truthy else it will take second value */

console.log(9 || 10)
console.log(9 ?? 10);

if (1 ?? -0) console.log(true);
if (1 || -0) console.log(true);