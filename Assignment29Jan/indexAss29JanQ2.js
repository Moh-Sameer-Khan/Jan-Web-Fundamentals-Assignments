// Enter a number by user
var num=prompt("Enter any number: ");
// converting string to a number
var num1=parseInt(num);
// check the given input is number or not
if(isNaN(num)){
    // alert if input is not a number
    alert(num+" Please enter a valid number: ")
}
else{
    // counter initialize
    var ctr=0;
    // for loop using for iteration
    for(var i=1; i<=num1; i++){
        // check the condition for prime
        if (num1%i==0){ 
            ctr=ctr+1;
        }
    }
    // for prime counter should be 2..
    if(ctr>2){
        console.log(num1+" not a prime number.")
    }else{
        console.log(num1+" is a Prime Number.")
    }    
}


