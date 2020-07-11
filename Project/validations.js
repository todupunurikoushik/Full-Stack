function valid(){
    var fn=document.getElementById('fname').value;
    var ln=document.getElementById('lname').value;
    var use=document.getElementById('username').value;
    var num=document.getElementById('number').value;
    var pass=document.getElementById('password').value;
    var repass=document.getElementById('retype_password').value;
    var nu=/^[6-9][0-9]{9}$/;
    var pw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,20}$/;
    var rpw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,20}$/;
    var nf=/^[a-zA-Z.]{6,40}$/;
    var nl=/^[a-zA-Z.]{2,40}$/;
    var us=/^[a-zA-Z-_]{6,40}$/;
    
    
    if(use=='' || num=='' || pass=='' || repass=='' || fn=='' || ln=='')
    {
        swal('please enter all the fields');
        return false;
    }
    else{
        if(nu.test(num) && rpw.test(repass) && pw.test(pass) && nf.test(fn) && nl.test(ln) && us.test(use)){
            swal({
                text: "Your Account has been created successfully and please wait while we redirect you to Login page",
                icon: "success",
                button: false
            });
            setTimeout(function(){
                window.open('internet.html');
            },5000);
        }
        else{
            if(!nf.test(fn)){
                swal({
                    text: "Invalid First Name",
                    icon: "error",
                });
                return false;    
            }
            else if(!nl.test(ln)){
                swal({
                    text: "Invalid last Name",
                    icon: "error",
                });
                return false;    
            }
            else if(!us.test(use)){
                swal({
                    text: "Invalid Username",
                    icon: "error",
                });
                return false;
            }
           
            else if(!pw.test(pass)){
                swal({
                    text: "Invalid Password",
                    icon: "error",
                });
                return false;    
            }         
            else if(!rpw.test(repass)){
                swal({
                    text: "Invalid Confirm Password",
                    icon: "error",
                });
                return false;
            }
            else{
                swal({
                    text: "Invalid Number",
                    icon: "error",
                });
                return false;
            }                     
        }
    }
}