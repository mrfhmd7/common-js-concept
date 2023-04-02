function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const name = 'Mr. X';
// const number = 55;
// const laptop = {price: 45000, brand: 'lenovo', ram: 8GB};

function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Mr. Y');
greeting(greetEvening, 'Mr. Z');
