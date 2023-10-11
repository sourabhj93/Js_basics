/* Stack (Primitive) --by value -- copy assign value */

/* Heap (non-primitive) -- by refernce -- reference will be assigned */
let userone = {
  email: "user@goo",
  upi: "dasdasd",
};

const usertwo = userone;
// let usertwo = userone;

console.log(usertwo);

usertwo.email = "dhjsafakfasfasf@gma"

/* It will assign a new reference to this variable */
// usertwo = {
//   id: "e23312qweqwe",
// };

console.log(usertwo);
console.log(userone);

let userthree = usertwo

console.log(userthree)
