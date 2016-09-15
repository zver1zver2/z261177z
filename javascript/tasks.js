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

function fizzBuzz(num, loop) {
    var i = 1;
    // condition function
    function inCondition() {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write(i, " FizzBuzz </br>");
        } else if (i % 3 == 0) {
            document.write(i, " Fizz </br>");
        } else if (i % 5 == 0) {
            document.write(i, " Buzz </br>");
        } else {
            document.write(i, " </br>");
        }
    } // end inCondition
    switch (loop) {
        case 'while':
            document.write('<h1 style="color: brown;">WHILE </h1></br>');
            while (i <= num) {
                inCondition()
                i++;
            }
            break;
        case 'do':
            document.write('<h1 style="color: brown;">DO ... WHILE </h1></br>');
            do {
                inCondition();
                i++;
            } while (i <= num);
            break;
        case 'for':
            document.write('<h1 style="color: brown;">FOR </h1></br>');
            for (; i <= num; i++) {
                inCondition();
            }
            break;
        default:
            document.write("<h1 style='color: brown;'>Sorry! You didn't type available loops.</h1>");
    }
}

function nonUnique(listOfNumbers, loop) {
    var i = 0;
    var lenOfList = listOfNumbers.length;
    var newList = new Array(0);
    switch (loop) {
        case 'for':
            for (; i < lenOfList; i++) {
                newList
                document.write(listOfNumbers[i], "</br>");
            }
            break;
        default:
            document.write("Sorry. You didn't chose any available loop");
    }
}

function nonUniqueElements(data) {
    var newData = new Array();
    var a, b;
    for (i = 0; i < data.length; i++) {
        a = data.indexOf(data[i]);
        b = data.lastIndexOf(data[i]);
        //console.log(a, b)
        if (a != b) {
            newData.push(data[i]);
        }
    }
    console.log(newData);
    document.write(newData, "</br>");
}

/*Tasks #3: Chess board
Write a program that creates a string that represents an 8 x 8 grid,
using newline character for separate lines. At each position of the grid
there is either a space or a # character. The characters should form a chess
board. Passing this string to console.log should show something like this.
When you have a program that generates this pattern, define a variable size = 8
and change the program so that it works for any size, out putting a grid of
the given width and height*/
var chessBoard = function(gridSize, loop) {
    switch (loop) {
        case 'for':
            document.write("</br>Using loop <span style='color:red;'>FOR</span></br>");
            for (i = 0; i < gridSize; i++) {
                for (y = 0; y < gridSize; y++) {
                    document.write("#");
                    console.log("#");
                }
                document.write("</br>");
                console.log("\n");
            }
            break;
        case 'while':
            document.write("</br>Using loop <span style='color:red;'>WHILE</span></br>");
            var i = 0,
                y = 0;
            while (i < gridSize) {
                while (y < gridSize) {
                    document.write("#");
                    console.log("#");
                    y++;
                }
                document.write("</br>");
                console.log("i=", i);
                i++;
                y = 0;
            }
            break;
        case 'do':
            document.write("</br>Using loop <span style='color:red;'>DO ... WHILE</span></br>");
            var i = 0,
                y = 0;
            do {
                do {
                    document.write("#");
                    console.log("#");
                    y++;
                } while (y < gridSize);
                document.write("</br>");
                console.log("\n");
                i++;
                y = 0;
            } while (i < gridSize);
            break;
        default:
            document.write("</br> You didn't select available loops: 'FOR, WHILE or DO ... WHILE'");
    }
};
