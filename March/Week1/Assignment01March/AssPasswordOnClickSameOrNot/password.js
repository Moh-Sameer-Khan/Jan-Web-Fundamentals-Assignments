// here are a function who will work on click button
function passwordMatch() {
    // here are getting reference 
    var ip_field_password = document.getElementById("ip_text_password");
    // Here are getting value that reference element
    var ip_new_text_password = ip_field_password.value;
    // here are getting reference 
    var ip_field_cinfirm_pswd = document.getElementById("ip_text_cinfirm_pswd");
    // Here are getting value that reference element
    var ip_new_text_cinfirm_pswd = ip_field_cinfirm_pswd.value;
    // Here are checking both inputs are same or not check by a condition
    if(ip_new_text_password == ip_new_text_cinfirm_pswd) {
      document.getElementById("result").innerHTML = "🤝 Thanks Your Form has Submitt";
    }else {
      document.getElementById("result").innerHTML = "** Password not Match please re-entered your password";
    }
}
