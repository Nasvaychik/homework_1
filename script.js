const student = "Матвеев Кирилл Дмитриевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

let scores = [];

alert ('Вводить счёт надо так: цифра:цифра, например: 4:1');

true_score = prompt ('Введите счёт команды').split(":");
scores.push(Number(true_score[0]), Number(true_score[1]));

guess_score = prompt('Введите предполагаемый счёт команды').split(':');
scores.push(Number(guess_score[0]), Number(guess_score[1]));

if ((scores[0] == scores[2]) && (scores[1] == scores[3])) {
    alert("Счёт был угадан верно!")
}
else if (((scores[0] < scores[1]) && (scores[2] < scores[3])) || (scores[0] > scores[1]) && (scores[2] > scores[3]) || ((scores[0] == scores[1]) && (scores[2] == scores[3]))) {
    alert('Счёт не угадали, но исход угадали!')
}

else {
    alert("Ни счёта, ни исхода не угадали")
};

//Теперь разобрался больше, надеюсь, что правильно сделал.
//Оцените аватарку от 0 до 10.
