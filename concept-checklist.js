// 0. Write a comment
// This is comment

// 1. Write 3 Variables (number, string, boolean)
const number = 123;
const string = "Hello World";
const isOpen = true;

// 2. 2 Variables using (let, const)
const productName = "iPhone";
let productPrice = 299;
productPrice = 200;

// 3. Simple Math Operations ( +, -, *, /, %)
const num1 = 10;
const num2 = 20;

const add = num1 + num2;
const subtract = num1 - num2;
const multiply = num1 * num2;
const division = num1 / num2;
const remainder = num1 % num2;

console.log(add, subtract, multiply, division, remainder);

// 4. Comparison (<, >, <=, >=, !==, ===)
const first = 100;
const second = 900;

console.log(first > second);
console.log(first < second);
console.log(first >= second);
console.log(first <= second);
console.log(first !== second);
console.log(first === second);

// Two Conditions. 
// Case 1 : Full fill both conditions
// Case 2 : Full fill at least one condition.

const haveMoney = true;
const haveTime = true;

if (haveMoney && haveTime) {
    console.log("Go to dinner");
}

else {
    console.log("Sorry, i can't go for dinner");
};

const isFree = true;
const isShopOpen = false;

if (isFree || isShopOpen) {
    console.log("Let's Go");
}

else {
    console.log("Can't Go");
};

// 6. if-else
if (true) {
    console.log("Thank you");
}

else {
    console.log("Welcome");
};

// 7. While loop to display all odd numbers between 7 to 19
let i = 7;
while (i <= 19) {
    if (i % 2 !== 0) {
        console.log(i);
    };

    i++;
};

// 8. Declare an array. 
// Number of elements. 
// Update or change 4th position element. 
// Add or remove elements
// Check whether specific value exists in the array

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.length);
numbers[3] = 100;
console.log(numbers);

numbers.push(500);
console.log(numbers);
numbers.pop();
console.log(numbers);

console.log(numbers.indexOf(500));

// 9. Use any for loop to display every element of an array
for (element of numbers) {
    console.log(element);
};

// 10. You have an array of numbers. Display only the numbers bigger than 80
let arrayNumbers = [100, 50, 80, 345, 45, 2234, 3];

for (bigNum of arrayNumbers) {
    if (bigNum > 80) {
        console.log(bigNum);
    };
};

// 11. Write a function that takes three numbers and returns the multiplications of the three numbers
function multiplyThreeNumbers(num1, num2, num3) {
    return num1 * num2 * num3;
};

console.log(multiplyThreeNumbers(100, 100, 100));

// 12. Declare and object and change any property of that object
const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

car.type = "Truck";
console.log(car);