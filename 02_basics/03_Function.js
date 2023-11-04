/* Two imp thing abt function is RETURN statement & REST Operator as PARAM */
function xyz(a) {
    return arguments[0]          // VERY INTERESTING it returns an object
}

console.log(xyz(2)) // 2

/* SPREAD operator returns an array of spread elements */
function abc(...x) {
    return x
}

console.log(abc(2, 3, 4, 5)) // [2, 3, 4, 5]