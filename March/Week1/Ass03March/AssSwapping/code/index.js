
function swappingResult() {
    // getting value first input field by reference 
    var ip1 = document.getElementById('ip_text1').value;
    // parsing the first input field
    var text1 = parseInt(ip1);
    // getting value second input field by reference 
    var ip2 = document.getElementById('ip_text2').value;
    // parsing the second input field
    var text2 = parseInt(ip2);
    // here are some calulation for swapping
    if (isNaN(ip1, ip2)) {
        alert("Please Enter a valid number.")
    } else {

        text1 = text1 + text2;
        text2 = text1 - text2;
        text1 = text1 - text2;

        // showng result after swapping in reference id
        document.getElementById('result1').innerText = "First Number is : " + text1;

        document.getElementById('result2').innerText = "Second Number is: " + text2;
        document.getElementById('ip_text1').value = text1;
        document.getElementById('ip_text2').value = text2;
    }

}
