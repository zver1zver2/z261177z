var x = prompt("Enter letter/number/symbol");

a = true;
counter = 0;

var sym = ''

while (a) {
  if (x.length != 1 || x === ''){
    a = false;
  }
  else {
    counter += 1;
    sym += x;
    document.write(sym+'<br>');
    console.log(x)
    if (counter >= 7){
      a = false
    }
  }
}
