// 1. Conversation
function feetToInch(feet) {
    return feet * 12;
};

console.log(feetToInch(112));

// 2. Conversation
function centimeterToMeter(centimeter) {
    return centimeter / 100;
};

console.log(centimeterToMeter(54));

// 3. Calculation
// Book1 has 100 pages
// Book2 has 200 pages
// Book3 has 300 pages

function pageRequirments(book1, book2, book3) {
    book1TotalPages = book1 * 100;
    book2TotalPages = book2 * 200;
    book3TotalPages = book3 * 300;

    return book1TotalPages + book2TotalPages + book3TotalPages;
};

console.log(pageRequirments(1, 0, 3));

// 4. Friends
const friends = ["Ajam", "Devid Warner", "Bred Lee", "Ricky Ponting"];

function bestFriend(friendsArray) {
    let bigName = friendsArray[0];
    for (friend of friendsArray) {
        if (friend.length > bigName.length) {
            bigName = friend;
        };
    };

    return bigName;
};

console.log(bestFriend(friends));

// 5. Will stop the loop if the array has any negative number and returns all the positive number before the negative number

const numbers = [2213, 0, 3, 44, 34, 100, -34, 534, -34, 53]

function onlyPositive(numbersArray) {
    const positiveNumber = [];
    for (number of numbersArray) {
        if (number >= 0) {
            positiveNumber.push(number);
        }

        else {
            break;
        }
    };

    return positiveNumber;
};

console.log(onlyPositive(numbers));