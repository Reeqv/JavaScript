console.log(steps);
var answers = [],
    count = 0,
    list,
    gameOn = true;

function game(steps) {
    for (var i = 0; i < steps.length; i += answer) {
        count++;

        while (gameOn) {
            list = "";
            for (var items = 0; items < steps[i][1].length; items++) {
                list += steps[i][1][items];
            }
            steps[i].push(list);
            var answer = +prompt("Ход #" + count + "\n" + steps[i][0] + steps[i][2]);
            if (answer > 0 & answer <= steps[i][1].length) {
                steps[i].push(answer);
                answers.push(steps[i]);
                break;
            } else {
                alert("Вы ввели некорректный номер ответа, попробуйте еще раз!");
            }
        }
    }
    var n = +prompt("Выберите ход, который хотите вспомнить? (Ходов сделано: " + count + ")");
    alert(answers[n-1][0] + answers[n-1][2] + "\nВы выбрали ответ #" + answers[n-1][3]);
}

game(steps);