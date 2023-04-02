// double equal check value
// triple equal check value and type
// *** the main difference between '==' & '===' is type coercion
// primitive হলে value check করে
// non-primitive হলে reference check করে


// always use ===
// equal comparison doesn't work for non-primitive

const first = 2;
const second = '2';
if(first === second){
    console.log('values are same');
}else{
    console.log('values are not equal');
}

// double equal == does some task behind the scene

// type coercion
// type conversion
// type casting