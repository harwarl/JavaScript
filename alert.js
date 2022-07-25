var popularNo = 2+2;
console.log(popularNo);
console.log(9%3);


var num = 1;
var newNum = num + 1;
console.log(newNum);

var writien = "this";
console.log(writien + " is just a test");
console.log("2"+"2");
var message ="Thanks";
var userName="Susan";
var banger ="!";
var customMessage = message + userName + banger;
console.log(customMessage);

var value =5;
var val = 6;
if (val === value){
    console.log("true");
}
else{
    console.log("False");
}

let a, b, c;
a = 5;
b = 3;
c = 6;

console.log(a + b + c);

const pi = 3.14;
let area = pi * 4 * 4;
console.log("Area of circle "+area+"cm");

let carName;
carName = "Volvo";
console.log("He Uses a "+carName +"!!!");

console.log(pi);
{
    const pi = 32;
    console.log(pi);
}
console.log(pi);

const cars = ["lexus", "audi", "mercedes"];
cars[0] ="Toyota";
console.log(cars);
cars.push("BMW");
console.log(cars);

const car = {type:'Fiat', model:'500', color:'white'};
console.log(car);
car.color = 'red';
console.log(car);
car.owner='Johnson';
console.log(car);

let u = 32;
u = ++u;
console.log(u);

let text1 = "What a very ";
console.log(text1 += "nice day");

let w = 5;
w--;
let f = w;
console.log(f);

let length = 16;
let lastName = "Johnson";

let x = 5;
let y = 5;
let z = 6;

console.log(x == y);
console.log(x == z);

console.log(typeof x);
console.log(typeof cars);
console.log(typeof y);
console.log(typeof car);

function addit(p1, p2){
    return p1 + p2;
}

console.log(addit(4, 5));

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyecolor: "blue",
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person.fullname());