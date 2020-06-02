function validate(){
    var use=document.getElementById('username').value;
    var num=document.getElementById('txtMobile').value;
    var em=document.getElementById('email').value;
    var roll=document.getElementById('txtpin').value;
    
    var nu=/^[6-9][0-9]{9}$/;
    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var r=/^[2][2][1][7][1][0][3][0][9][0-3][0-9][1-9]$/;
    if(use=='' || num=='' || em=='' || roll=='')
    {
        window.alert('please enter all the fields');
        return false;
    }
    else{
        if(nu.test(num)&&e.test(em)&&r.test(roll)){
            window.alert('Valid');
        }
        else{
            window.alert('Invalid');
            return false;
        }
    }
}