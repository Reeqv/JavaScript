console.log(steps);
var answers = [],
    count = 0,
    list,
    prize = 100,
    total = 0,
    gameOn = true;
    
function game(steps){
    for (var i = 0; i < steps.length; i ++) {
        count++;
        
        while (gameOn) {            
            list = "";
            for(var items = 0; items < steps[i][1].length; items++){
                list += steps[i][1][items];            
            }
            steps[i].push(list);
            var answer = +prompt(count + " вопрос и " + prize + " очков\n" + steps[i][0] + steps[i][3]);
            if (answer > 0 & answer <= steps[i][1].length) {
                if(answer == steps[i][2])
                {
                    alert("Правильный ответ!")
                    total = total + prize;
                    prize = prize * 5;
                }
                else{
                    alert("Вы проиграли!")
                    gameOn = false;
                }
                answers.push(steps[i]);
                break;
            } else {
                alert("Вы ввели некорректный номер ответа, попробуйте еще раз!");
            }
        }
    }
        console.log(answers);
        alert("Вы набрали " + total + " очков!");
}

game(steps);
