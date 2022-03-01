function fizzBuzz() {
    // here are taking a number by user
    var num = parseInt(prompt("Enter a number"));
    // here are print that number who enterd by user
    document.write("<br>" + "Entered Number by User is : " + num);
    // here are checking number is is valid or not
    if (isNaN(num)) {
        // alert if entered number is not valid.
        alert("Pleae enter a valid number");
    }
    // if entered number is valid 
    else {
        // using a loop for printing the all values as given by user
        for (var i = 1; i <= num; i++) {
            // here are checking a condition as per given
            if (i % 3 == 0 && i % 5 == 0) {
                document.write("<br>" + "FizzBuzz" + ",");
            }
            // here are checking another condition as per given
            else if (i % 3 == 0) {
                document.write("<br>" + "Fizz" + ",");
            }
            // here are checking another one condition as per given question
            else if (i % 5 == 0) {
                document.write("<br>" + "Buzz" + ",");
            }
            // if not any condtion that print number
            else {
              
                document.write("<br>" + i  + ",");
            }
        }
    }
}
