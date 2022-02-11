// lev1_1
function intro() {
    console.log("Hello World");
}

intro = () => { console.log("Hello World"); }

//lev1_2

function hallo() {
    document.write("hallo");
    console.log("hallo");
}
hallo();

let sum = (x, y) => {
    console.log(x + y);
    document.write(x + y)
}
sum(2, 3);

let parameter = (p) => {
    console.log(typeof p);
    document.write(typeof p);
}

parameter(0);

// lev1-4
let hero = (heroName, heroPower, heroEnemy) => {
    console.log(heroName, heroPower, heroEnemy);
}

let myName = `Hero1`;
let power = `Strong`;
let enemy = `bad guy`;

hero(myName, power, enemy);

//lev1_6

function returnOne() {
    return 1;
}
let x = 1;
let y = returnOne();

if (x === y) {
    console.log("wird das gedruckt?");
}
else {
    console.log("das nicht");
}

//lev1_7

let myFunc = (p) => {
    return p * 2;
}
console.log(myFunc(2));

//lev1_8 

let yearBorn = (year) => {
    let currentYear = 2022;
    return currentYear - year;
}
console.log(yearBorn(1972));

let compareAge = (age1, age2) => {
    return age1 - age2;
}
console.log(compareAge(20, 30));

// lev1_9
let introd = (fname, lname, place, age, city) => {
    return `My name is ${fname} ${lname}, was born in ${place}, I am ${age} old and live in ${city}`
}

console.log(introd("Lora", "Ipsum", "Detroit Rock City", 33, "NYC"));



