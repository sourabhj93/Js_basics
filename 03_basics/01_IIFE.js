/* iife */

// () --> function definition () --> function called

(function xyz() {
  /* NAMED iife */
  console.log(this);   // global Object
})();                  // ADD semicolon to end this function call // VERY imp

(() => {
  /* UNNAMED iife */
  console.log(this);   // {}   // It's behave like a global this of node
})();

console.log(this)      // {}