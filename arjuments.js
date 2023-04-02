//array like object
// here can use for of but can not use map , filter

function sum(a, b, c){
    console.log(arguments);

    //we can create array of this arguments 
    const args = [...arguments];
    console.log(args);
    const  total = a + b + c;
    return total;
}

const total = sum(2, 4, 5, 6, 9, 10);
console.log(total);