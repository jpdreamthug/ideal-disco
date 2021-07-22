let money = prompt('Ваш бюджет на месяц?');
let time = prompt("Введите дату в формате YYYY-MM-DD");
let exp1 = prompt("Введите обязательную статью расходов в этом месяце");
let exp2 = prompt("Во сколько обойдется?");
let exp3 = prompt("Введите обязательную статью расходов в этом месяце");
let exp4 = prompt("Во сколько обойдется?");

let obj = {
    budget: money,
    timeData: time,
    optionalExpenses: '',
    expenses: {
        exp1: exp2,
        exp3: exp4
    },
    income: [],
    savings: false
};
alert(`Ваш бюджет на 1 день: ${(money-exp2-exp4)/30}`);

