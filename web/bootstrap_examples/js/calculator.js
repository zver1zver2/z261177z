var calcDisplay = document.getElementById('calcDisplay');
var calcSecondDisplay = document.getElementById('calcSecondDisplay');
var calcOperators = ['+', '-', '*', '/'];
var calculation = false;

// creating array with all num button elements
var allNumButtons = [];
for (var i = 0; i < 10; i++) {
    allNumButtons[i] = document.getElementById(i.toString());
    //allNumButtons[i].addEventListener('click', numClick(allNumButtons[i]));
    allNumButtons[i].addEventListener('click', numClick);
}
// number button click event
function numClick(event) {
    var dsp = calcDisplay.value;
    if (dsp == '0') {
        calcDisplay.value = this.value;
        calcSecondDisplay.value = this.value;
    } else if (calculation) {
        calcDisplay.value = this.value;
        calcSecondDisplay.value += this.value;
    } else {
        calcDisplay.value += this.value;
        calcSecondDisplay.value += this.value;
    }
    calculation = false;
}

// button '<--'
document.getElementById('backspace').addEventListener('click', function() {
    var fd = calcDisplay.value;
    var sd = calcSecondDisplay.value;
    if (fd == '0') return;
    else {
        if (fd.length == 1) {
            calcDisplay.value = 0;
            calcSecondDisplay.value = 0;
        } else {
            calcDisplay.value = fd.slice(0, fd.length-1);
            calcSecondDisplay.value = sd.slice(0, sd.length-1);
        }
    }
});

// button 'C'
document.getElementById('c').addEventListener('click', function() {
    calcDisplay.value = '0';
    calcSecondDisplay.value = '0';
});

// button ','
document.getElementById('float').addEventListener('click', function() {
  var fd = calcDisplay.value;
  var sd = calcSecondDisplay.value;
  if (fd.indexOf('.') != -1) return;
  if (fd[fd.length - 1] != '.') {
    calcDisplay.value = fd + '.';
    calcSecondDisplay.value = sd + '.';
  }
});

// button '+-'
document.getElementById('plusMinus').addEventListener('click', function() {
  var fd = calcDisplay.value;
  //var sd = calcSecondDisplay.value;
  if (fd == '0') return;
  if (fd[0] == '-') {
    calcDisplay.value = fd.slice(1);
    //calcSecondDisplay.value = sd + '.';
  } else {
    calcDisplay.value = '-' + fd;
  }
});

// buttons '+' '-' '*' '/'
document.getElementById('plus').addEventListener('click', calcBtn);
document.getElementById('minus').addEventListener('click', calcBtn);
document.getElementById('multiply').addEventListener('click', calcBtn);
document.getElementById('divide').addEventListener('click', calcBtn);

function calcBtn() {
    var dsp = calcSecondDisplay.value;
    var dspLastIndex = calcSecondDisplay.value.length - 1;
    var dspLastChar = calcSecondDisplay.value[dspLastIndex];

    if (calcOperators.indexOf(dspLastChar) != -1) {
        calcSecondDisplay.value = calcSecondDisplay.value.slice(0, dspLastIndex) + this.value;
        calculation = true;
        return;
    }

    var anotherOp;
    for (var i = 0; i < calcOperators.length; i++) {
        anotherOp = dsp.indexOf(calcOperators[i]);
        if (anotherOp != -1) {
            calcDisplay.value = eval(calcSecondDisplay.value);
        }
    }
    calcSecondDisplay.value += this.value;
    calculation = true;
}

// button '='
document.getElementById('equal').addEventListener('click', equalBtn);

function equalBtn() {
    var dspLastIndex = calcSecondDisplay.value.length - 1;
    var dspLastChar = calcSecondDisplay.value[dspLastIndex];
    var eq;
    var isCase = false;

    switch (dspLastChar) {
        case '0':
            isCase = true;
            break;
        case '+':
            calcDisplay.value = eval(calcDisplay.value + '+' + calcDisplay.value);
            console.log(calcDisplay.value);
            calcSecondDisplay.value = calcDisplay.value;

            isCase = true;
            break;
        case '-':
            calcDisplay.value -= calcDisplay.value;
            calcSecondDisplay.value = calcDisplay.value;
            isCase = true;
            break;
        case '*':
            calcDisplay.value *= calcDisplay.value;
            calcSecondDisplay.value = calcDisplay.value;
            isCase = true;
            break;
        case '/':
            calcDisplay.value /= calcDisplay.value;
            calcSecondDisplay.value = calcDisplay.value;
            isCase = true;
            break;
    }

    if (isCase == false) {
        eq = eval(calcSecondDisplay.value);
        calcDisplay.value = eq;
        calcSecondDisplay.value = eq;
    }
}
