function validate() {
    var result = "";
    result += validatename();
    result += validateemail();
    result += validatepassword();
    result += validateterms();

    if(result == "") return true;

    alert("Validation Result:\n\n" + result);
    return false;
}

function validatename() {
    var name = document.getElementsByName("name")[0].value;
    if(name.length <= 3)
        return "Name should be atleast 3 characters.\n";
    return "";
}
 function validatepassword(){
     var password = valueof("password");
     var retype = valueof("retype_password");

     if(password.length<=6)
        return "Password should be atleats 6 characters.\n";

    if(password != retype)
        return "password do not match.\n";
    return "";
 }
 function validateemail() {
     var email = valueof("email");
     var retype = valueof("retype_email");

     if(email.indexOf('@') == -1)
         return "Email should be a valid address.\n";

     if(email != retype)
        return "Email address do not match.\n";
    return "";
 }
 function validateterms(){
     var terms = document.getElementsByName("terms")[0];
     if(!terms.checked)
        return "Please accept the Terms of Services and Privacy Policy";
    return "";
 }
 function valueof(name) {
     return document.getElementsByName(name)[0].value;
 }
