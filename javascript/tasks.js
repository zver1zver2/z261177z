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
    }
    else if (i % 3 == 0) {
      document.write(i, " Fizz </br>");
    }
    else if (i % 5 == 0) {
      document.write(i, " Buzz </br>");
    }
    else {
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
    for (i=0; i<data.length; i++) {
        a = data.indexOf(data[i]);
        b = data.lastIndexOf(data[i]);
        //console.log(a, b)
        if (a != b) {
          newData.push(data[i]);
        }
    }
    document.write(newData);
    return newData;
}
