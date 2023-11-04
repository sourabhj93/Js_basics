/* CONTROL will start next iteration, kt eill go back to loop */

/* COMMAND opt + Shift + down key will copy the whole content */

for(let i=0; i<5; i++) {
    if(i == 2) {
        console.log(i)
        continue;
    }
    console.log('i: ', i)
}

console.log('====================================');
console.log("hello");
console.log('====================================');

for(let i=0; i<5; i++) {
    if(i == 2) {
        console.log(i)
        break;
    }
    console.log('i: ', i)
}

/* Maps are used to set unique objects in arrays */



/* For of used to iterate mapped arrays */
for (const [key, value] of object) {
    
}

/* For of used to iterate arrays */
for (const iterator of object) {
    
}

/* For in used to iterate objects */
for (const key in object) {
    
}