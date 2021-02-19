var colorChange = 0,
i,
container = document.getElementById('container');

container.insertAdjacentHTML("afterbegin", "<div id = board></div>");
var board = document.getElementById("board");
board.style.width = "800px";
board.style.height = "800px";
board.style.display = "flex";
board.style.flexWrap = "wrap";

for (i = 0; i < 64; i++) {
    board.insertAdjacentHTML("beforeEnd", "<div class = container__cell></div>")
}
var cells = document.getElementsByClassName('container__cell');
console.log(cells);
for (i = 0; i < 64; i++, colorChange++) {
    if (colorChange % 2 == 1) {
        cells[i].style.backgroundColor = "#604020";
    } else {
        cells[i].style.backgroundColor = "#ffda9e";
    }
    cells[i].style.width = "100px";
    cells[i].style.height = "100px";
    if (i % 8 == 7) { // Смещение цвета в конце ряда
        colorChange++;
    }
}