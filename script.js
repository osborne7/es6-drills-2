favMovie = (movie = 'The Room', name = 'world') => console.log(`I'm ${name} and my favorite movie is ${movie}.`);


favMovie('Silver Linings Playbook', 'Nellie');


getFirstName = (name) => {
    console.log(name.split(' ')[0]);
}

getFirstName('Nellie Osborne');

getFirstNameConcise = (name) => console.log(name.split(' ')[0]);

getFirstNameConcise('Nellie Osborne');

doMath = (x, y) => {
    return {
        exponent: x ^ y,
        product: x * y
    }
}

let newMath = doMath(5, 4);

console.log(`Exponent: ${newMath.exponent}`);
console.log(`Product: ${newMath.product}`);



spread = (name, location, favFood) => {
    console.log(`name: ${name}, location: ${location}, favorite food: ${favFood}`);
}

let myArray = ['Nellie', 'Boston', 'pasta'];

spread(...myArray);

let myName = 'Nellie';

newFunction = (parameter) => {
    let newArray = [...parameter];
    console.log('newArray: ' + newArray);
    for (var i = 0; i < parameter.length; i++) {
        console.log(parameter[i]);
    }
}

newFunction(myArray);