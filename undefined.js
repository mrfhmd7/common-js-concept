/* 
8 ways to get undefine
1. variable that is not initialized
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index of range
7. deleting an element inside an array
8. set a value directly to undefined
*/

let first;
// console.log(first);

function second (a, b){
    const total = a + b;
}
const result = second();
// console.log(result);

function third (a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
third(1, 2,);

function noNegative (a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(3, 5)
// console.log(total);

const fifth = { id: 2, name: 'Mr. X', age: 40};
// console.log(fifth.age, fifth.salary);

const sixth = [2, 34, 88, 53, 63, 9, 18];
// You should not do it. Instead of splice
delete sixth[1];
// console.log(sixth[0], sixth[3], sixth[6], sixth[100]);
// console.log(sixth);


const eighth = undefined;

const ninth = null;

const data = { result: [], update: null};

console.log(typeof undefined);
console.log(typeof null);