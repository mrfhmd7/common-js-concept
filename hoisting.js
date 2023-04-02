print5(5);
print10(10);

//hoisting means lift up
// in var we can get value outside

/* for(var i = 0; i < 5; i++ ) {
    console.log(i);
}
console.log('outside', i); */

//in let we can not get outside
/* for(let i = 0; i < 5; i++ ) {
    console.log(i);
}
console.log('outside', i);
*/

//declaration of a function it lifted up in top 
function print5 (){
    console.log('inside print5', 5);
}

// but declaration of a function inside a constant can not lifted up in top

const print10 = function(){
    console.log(10);
}