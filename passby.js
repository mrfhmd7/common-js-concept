// for primitive value will no change
// primitive types are pass by value
let num1 = 5;
let num2 = 7;
function multiply (a, b){
    a = 20;
    const result = a * b;
    return result;
}

console.log(num1);
const output = multiply(num1, num2);
// multiply(num1, num2);
// console.log(output);
console.log(num1);


// here for non-primitive (object or array) value will be changed
// object and array are pass by reference
let student1 = {name: 'Jalil', partner: 'Borsha'};
let student2 = {name: 'Raj', partner: 'Anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.name = 'Mim';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);