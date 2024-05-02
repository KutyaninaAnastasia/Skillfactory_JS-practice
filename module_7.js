// // Task 1
// let word = prompt("Введите слово:");
// let wordRevers = "";

// if (word === ""){
//     console.log("Введите слово")
// } else {
//     wordLower = word.toLowerCase();
//     for (let i = 1; i <= wordLower.length; i++) {
//         wordRevers += wordLower[wordLower.length - i];
//     }

//     if (wordLower === wordRevers) {
//     console.log(`Слово ${word} является палиндромом`);
//     } else {
//     console.log(`Слово ${word} не является палиндромом`);
//     }
// }

// // Task 2
// const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
// const uniqueSet = new Set(arr);
// const uniqueArray = Array.from(uniqueSet);

// console.log(uniqueArray);

// // Task 3
// let userInput = +prompt("Введите любое число:");
// const arr = [];

// for (let i = 0; i <= userInput; i++) {
//     arr.push(i);
// }

// console.log(arr);


// //Task 4
// const boardSize = 3;
// const board = [];

// for (let i = 0; i < boardSize; i++) {
//     const row = [];
//     for (let j = 0; j < boardSize; j++) {
//         const random = Math.random();
//         const cellValue = random < 0.5 ? 'X' : 'O';
//         row.push(cellValue);
//     }
//     board.push(row);
// }

// for (let i = 0; i < boardSize; i++) {
//     console.log(board[i].join(' '));
// }

// for (let i = 0; i < 3; i++) {
//     console.log("Message");
// }

// Task 5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let arrValues = [];

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        for (let elem of obj[key]) {
            arrValues.push(elem);
        }
    }else{
        arrValues.push(obj[key]);
    }
}

console.log(arrValues);

