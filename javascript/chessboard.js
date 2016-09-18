var chessBoard = function(rows, columns, loopType) {
    var i = 0,
        y = 0;
    switch (loopType) {
        case "for":
            var myNode = document.getElementById("div1");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            //document.getElementById('idH1').innerHTML = 'Loop FOR';
            //document.write("</br>Loop 'FOR'</br>");
            var s = '';
            var pColumns = new Array();
            var pNodes = [];
            var element = document.getElementById('div1');
            for (i = 0; i < columns; i++) {
                pColumns[i] = document.createElement('p');
                for (y = 0; y < rows; y++) {
                    s += '  #  ';
                }
                pNodes[i] = document.createTextNode(s);
                s = '';
                pColumns[i].appendChild(pNodes[i]);
                element.appendChild(pColumns[i]);
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
                } while (y < rows);
                i++;
                y = 0;
                document.write("</br>");
            } while (i < columns);
            break;
        default:
            document.write("Sorry! You didn't select available loops type: FOR, WHILE, DO...WHILE</br>");
    }
}
