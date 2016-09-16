var chessBoard = function(rows, columns, loopType) {
    var i = 0,
        y = 0;
    switch (loopType) {
        case "for":
            document.getElementById('idH1').innerHTML = 'Loop FOR';
            //document.write("</br>Loop 'FOR'</br>");
            var pColumns = new Array();
            for (i = 0; i < columns; i++) {
                //pColumns =
                for (y = 0; y < rows; y++) {
                    document.write("#");
                }
                document.write("</br>");
            }
            break;
        case "while":
            document.write("</br>Loop 'WHILE'</br>");
            while (i < columns) {
                while (y < rows) {
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
                } while(y < rows);
                i++;
                y = 0;
                document.write("</br>");
            } while(i < columns);
            break;
        default:
            document.write("Sorry! You didn't select available loops type: FOR, WHILE, DO...WHILE</br>");
    }
}
