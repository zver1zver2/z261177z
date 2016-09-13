function task1(tSize, loop) {
    var char = "#";
    var tText = "";
    var i = 0;

    switch (loop) {
        case 'while':
            document.write("We used loop 'WHILE' for completing this task! </br>");
            while (i < tSize) {
                tText += char;
                document.write(tText, '</br>');
                i++;
            }
            break;
        case 'for':
            document.write("We used loop 'FOR' for completing this task! </br>");
            for (; i < tSize; i++) {
                tText += char;
                document.write(tText, "</br>");
                console.log(i);
            }
            break;
        case 'do':
            document.write("We used loop 'DO ... WHILE' for completing this task! </br>");
            console.log('char=', char);
            console.log('tText=', tText);
            //tText += char;
            console.log('tText=', tText);
            do {
                tText += char;
                document.write("i=", i, tText, "</br>");
                console.log(i, tText);
                i++;
            } while (i < tSize);
            break;
        default:
            document.write("You did't use any available loops: WHILE, FOR, DO.");
    }
}

function hello(a, b) {
    return a + b;
}
