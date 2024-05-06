// Task 1

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: "Nastya",
    age: 26
};

printInfo.call(person);

// Task 2

function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";
    }
}

let args = [2, 3, "+"];
let result = calculate.apply(null, args);
console.log(result);

// Task 3

const users = [
    { name: "Nastya", age: 26 },
    { name: "John", age: 17 },
    { name: "Peter", age: 30 },
    { name: "Ann", age: 13 }
];

const users_older18 = users.filter(user => user.age >= 18);
const users_names = users.map(user => user.name);
  
console.log(users_older18);
console.log(users_names); 

// Task 4

function setFullName(fullName) {
    this.fullName = fullName;
}

const person_from_users = {
    name: "John",
    age: 17
};

const setPersonFullName = setFullName.bind(person_from_users);
setPersonFullName("John Smith");
console.log(person_from_users.fullName);

// Task 5

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

function uniqueSortedNumbers(numbers) {
    const uniqueNumbers = Array.from(new Set(numbers.sort((a, b) => a - b)));
    return uniqueNumbers;
}

console.log(uniqueSortedNumbers(numbers));