// Here are a function it will work when we will click on a button
function sumOfTwoInput() {
    // here are getting referennce an element
    var ip_first_num = document.getElementById("ip_num_first");
    // here are getting value that reference element
    var ip_new_first_text = ip_first_num.value;
    // here parsing
    var first_input = parseInt(ip_new_first_text);
    // here are getting referennce an element
    var ip_second_num = document.getElementById("ip_num_second");
    // here are getting value that reference element
    var ip_new_second_text = ip_second_num.value;
    // here parsing
    var second_input =  parseInt(ip_new_second_text);
    // here are sum of two inputs store in a variable
    var sum_of_inputs = first_input + second_input;
    // here are checking input value is a number or not
    if(isNaN(first_input,second_input)) {
        // here are showing number is not valid
        document.getElementById("result").innerHTML = `These '${ip_new_first_text}' and '${ip_new_second_text}' are not a number please enter a valid number`;
    }else {
        // here are showing sum of two inputs
        document.getElementById("result").innerHTML ="Sum of two inputs is : " + sum_of_inputs;
    }
   
}