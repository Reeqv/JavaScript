
        var chessPieces = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]

        container.style.fontSize = "85px";
        container.style.textAlign = "center";
        container.style.lineHeight = "100px";        
        function pawns(start, color) {
            for (var i = start; i < (start + 8); i++) {
                cells[i].innerText = "♙";
                cells[i].style.color = color;
            }
        }

        function pieces(start, color) {
            for (var i = start, k = 0; i < (start + 8); i++, k++) {                
                cells[i].innerText = chessPieces[k];
                cells[i].style.color = color;
            }
        }
        pieces(0, "black");
        pieces(56, "white");
        pawns(48, "white");
        pawns(8, "black");