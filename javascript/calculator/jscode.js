// JS code for an calculator

// displays objects
var fDisp = document.getElementById('fDisp');
var sDisp = document.getElementById('sDisp');
var numbers = [];
var calcBtnClicked = false;

// buttons with numbers
for (i = 0; i <= 9; i++) {
    numbers[i] = document.getElementById(i);
    numbers[i].addEventListener('click', btnNumber);
}

function btnNumber() {
    var num = this.value;
    // if screens clear
    if (sDisp.value == '0' && fDisp.value == '0') {
        fDisp.value = num;
        sDisp.value = num;
    } else if (sDisp.value == '0') {
        fDisp.value += num;
        sDisp.value = num;
    }
    // if you clicked some calc button (+ - * /)
    else if (calcBtnClicked) {
        fDisp.value += num;
        sDisp.value = num;
    }
    // else
    else {
        fDisp.value += num;
        sDisp.value += num;
    }
    calcBtnClicked = false;
}
// end buttons with numbers

//button 'C' - clear displays
document.getElementById('c').addEventListener('click', btnClear);

function btnClear() {
    fDisp.value = '0';
    sDisp.value = '0';
}
// end button 'C'

//button '<--'
document.getElementById('backspace').addEventListener('click', btnBackspace);

function btnBackspace() {
    var f = fDisp.value;
    var s = sDisp.value;
    var lastChar = f[f.length - 1];
    var isLastCharCalc = isNaN(lastChar);

    // if empty screens (equal 0)
    if (s == '0') return;
    // if last char on the first screen is calc char (+ - * /)
    if (isLastCharCalc) {
        console.log(lastChar);
        return;
    }
    // if second's screen value equal 1
    if (s.length == 1) {
        sDisp.value = '0';
    } else {
        sDisp.value = s.slice(0, s.length - 1);
    }
    // if first's screen value equal 1
    if (f.length == 1) {
        fDisp.value = '0';
    } else {
        fDisp.value = f.slice(0, f.length - 1);
    }
}
//end button '<--'

// buttons + - * /
document.getElementById('addition').addEventListener('click', btnCalc);

function btnCalc() {
    var f = fDisp.value;
    var s = sDisp.value;
    var fLastChar = f[f.length - 1];

    calcBtnClicked = true;

    if (isNaN(fLastChar)) {
        fDisp.value = f.slice(0, f[f.length - 1]) + '+';
    } else {
        fDisp.value += '+';
    }
}
