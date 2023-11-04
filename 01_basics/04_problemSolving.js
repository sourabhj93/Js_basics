const fruits = [
  { app: 4, banana: 6 },
  { bannan: 7, cucmber: 9 },
  { app: 7, mango: 2 },
];

/* write a function to get count of all the fruits with key value pair as their name: number */
let output = {};
function uniqueCountOfFruits() {
  fruits.forEach((fruitObj) => {
    for (elem in fruitObj) {
      if (output[elem]) {
        output[elem] = fruitObj[elem] + output[elem];
      } else {
        output[elem] = fruitObj[elem];
      }
      console.log(output);
    }
  });
}

uniqueCountOfFruits();

function g() {
  function h() {
    var a = 1;
    var b = 2;
  }
  h();
  console.log(a, b); // error
}

g();

console.log(a, b); // error
