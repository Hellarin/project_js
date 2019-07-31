'use strict';

let money =prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let stat =prompt("Введите обязательную статью расходов в этом месяце");
let HowMeny =prompt("Во сколько обойдется?");


let appData = {
    budget :money, 
    timeData : time,
    expenses : null,
    optionalExpenses : null,
    income: null,
    savings : false
};

let expenses ={
    stat : HowMeny
};


alert ("Ваш бюджет на месяц: " + money/30);