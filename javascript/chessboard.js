var chessBoard = function(boardSize, loopType) {
    var i = 0,
        y = 0;
    switch (loopType) {
        case "for":
            document.write("</br>Loop 'FOR'</br>");
            for (i = 0; i < boardSize; i++) {
                for (y = 0; y < boardSize; y++) {
                    document.write("#");
                }
                document.write("</br>");
            }
            break;
        case "while":
            document.write("</br>Loop 'WHILE'</br>");
            while (i < boardSize) {
                while (y < boardSize) {
                    document.write("#");
                    y++;
                }
                y = 0;
                i++;
                document.write("</br>");
            }
            break;
        case "do":
            document.write("</br>Loop 'DO...WHILE'</br>");
            do {
                do {
                    document.write("#");
                    y++;
                } while(y < boardSize);
                i++;
                y = 0;
                document.write("</br>");
            } while(i < boardSize);
            break;
        default:
            document.write("Sorry! You didn't select available loops type: FOR, WHILE, DO...WHILE</br>");
    }
}
