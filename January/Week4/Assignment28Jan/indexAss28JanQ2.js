
var num = prompt("Enter any number : ");
var num1 = parseInt(num);
console.log("Given number by user is : " + num);
if (isNaN(num)) {
    alert(num + " is not a number. Please Enter a Valid Number : ")
}
else {
    if (num1 >= 3) {
        a = 0;
        b = 1;
        sum = a + b;
        console.log(a);
        console.log(b);
        console.log(sum);

        for (var i = 4; i <= num; i = i + 1) {
            a = b;
            b = sum;
            sum = a + b;
            console.log(sum);
        }
    }
    else {
        alert(" Please enter your number should be greater or equal 3 ")
    }
}
