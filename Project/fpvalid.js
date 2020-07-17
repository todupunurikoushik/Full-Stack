function validate(){
    var em=document.getElementById('email').value;
    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    if(em=='')
    {
        swal('Please enter the Email');
        return false;
    }
    else{
        if(e.test(em)){
            swal('Reset Password Link has been sent to Your Email!')
        }
        else{
            swal('Please enter the valid Email.... ');
            return false;
        }
    }
}