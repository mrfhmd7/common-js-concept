// something is inside second bracket '{}' is a scope 
// function has a scope and block has a scope

function add(a, b){
    const total = a + b;
    // console.log(a, b);
    if(b > 5){
        const sum = 25 + a + b;
        // console.log(sum);
    }
    else{
        const sum = 5 + a + b;
        var current = sum;
    }
    // console.log(sum);
    console.log(current);
    return total;
}
// console.log(a, b);
// console.log(total);
add(5, 3);