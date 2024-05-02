// Task 1
let userNumber;
while (true) {
    userNumber = +prompt("Введите любое число:");
    if (userNumber === 0 || isNaN(userNumber)) {
        alert("Вы ввели некорректное число.");
    } else {
        break;
    }
}

let square = userNumber ** 2;
let cube = userNumber ** 3;
alert(`Введенное число- ${userNumber} \nКвадрат числа- ${square} \nКуб числа- ${cube}`);


// Task 2
let promoCode;
while (true) {
    promoCode = prompt("Введите промокод:");
    if (!promoCode ) {
        alert("Вы не ввели промокод. Пожалуйста, попробуйте снова.");
    } else {
        promoCode = promoCode.toLowerCase();
        break;
    }
}

if (promoCode === "скидка") {
    alert("Промокод применён");
} else {
    alert("Промокод не работает");
}


//Task 3
let userName, birthYear;
while (true) {
    userName = prompt("Введите ваше имя:");
    birthYear = +prompt("Введите ваш год рождения:");
    if (!userName || birthYear === 0 || isNaN(birthYear)) {
        alert("Год не число или пустое имя.");
    } else {
        break;
    }
}

alert(`${userName}: ${new Date().getFullYear() - birthYear}`);


// Task 4
let userInput, birthYearInput;
while (true) {
    userInput = prompt("Введите ваше имя:");
    birthYearInput = +prompt("Введите ваш год рождения:");
    if (!userInput || birthYear === 0 || isNaN(birthYear)) {
        alert("Год не число или пустое имя.");
    } else {
        break;
    }
}
const age = new Date().getFullYear() - birthYearInput;
const remainder = age % 10;

if (remainder === 1) {
    alert(`${userInput}: ${age} год`);
} else if (remainder === 2 || remainder === 3 || remainder === 4) {
    alert(`${userInput}: ${age} года`);
} else {
    alert(`${userInput}: ${age} лет`);
}


// Task 5
let userAge, incomeInput;
let loanAmount;

while (true) {
    userAge = +prompt("Введите ваш возраст:");
    if (userAge === 0 || isNaN(userAge)) {
        alert("Возраст введент некорректно. Пожалуйста, попробуйте снова.");
    } else if (userAge < 18 || userAge > 65) {
        alert("Кредит не выдается лицам младше 18 лет и старше 65 лет.");
    } else {
        break;
    }
}

if (userAge >= 18 && userAge <= 21) {
    loanAmount = 50000
} else if (userAge <= 35) {
    loanAmount = 400000;
} else if (userAge <= 65) {
    loanAmount = 1000000;
} 

while(true){
    incomeInput = +prompt(`Мы можем вам выдать максимум ${loanAmount}.\nВведите сумму кратнуую 1000`);
    if (isNaN(incomeInput)) {
        alert("Введено некорректное значение. Пожалуйста, введите число.");
    } else if (1000 <= incomeInput && incomeInput <= loanAmount ) {
        if (incomeInput % 1000 === 0) {
            approvedLoan = Math.min(incomeInput - (incomeInput % 10000), loanAmount);
            alert(`Мы можем вам выдать ${approvedLoan}`)
            break;
        }else{
            alert(`Вы ввели значение не кратное 1000.\nМы можем выдать ${incomeInput - (incomeInput % 1000)}`);
            break;
        }
    } else if (loanAmount <= incomeInput) { 
        alert(`Мы можем вам выдать ${loanAmount}`);
        break;
    }else {
        alert("Видимо вам кредит не нужен. Всего доброго!");
        break;
    }
}


