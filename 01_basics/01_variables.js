const array = [1, 4, 2, 3];

/* new way of writing for-loop */
for (const element of array) {
  console.table(element);
}

/* inside function scope of var keyword is limited to that function only */
function cosole() {
  (function () { 
    var x = 9;
    var y = 10;
  })();
  console.log(x, y);
}

cosole();

const c = 9;
var b = 2;
let a;
a = "3";

if (true) {
  // not possible to declare blocked scope variable
  //   var a = 8;
  // Compile time error

  // it will not update variable b value
  let b = 8;

  // it's possible to update/assign block scoped variable through var but not through let
  a = 8;
}

a = 9;

console.log(b);

console.log(a);
