for (i = 1; i < 100; i++) {
    if (i%3 === 0 && i%5 === 0){
      document.write("FizzBuzz <br>")
    }
    else if (i%3 === 0){
      document.write("Fizz <br>")
    }
    else if (i%5 === 0){
      document.write("Buzz<br> ")
    }
    else {
      document.write(i+' <br>')
    }
}
