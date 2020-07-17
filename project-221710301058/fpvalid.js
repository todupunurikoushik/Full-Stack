function validate(){
    var em=document.getElementById('email').value;
    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    if(em=='')
    {
        swal({
            text:"Please enter the Email",
            icon:"error"
        });
        return false;
    }
    else{
        if(e.test(em)){
            swal({
                text:"Reset Password Link has been sent to Your Email!",
                icon:"success"
            });
            var api_url = "http://localhost:3000/fgpass";
                    var data = {
                        email: $('#email').val()
                        
                    }
                    $.ajax({
                        url:api_url,
                        type:"POST",
                        dataType:"Json",
                        data:data,
                        
                    })
        }
        else{
            swal({
                text:"Please enter the valid Email....",
                icon:"error"
            });
            return false;
        }
    }
}