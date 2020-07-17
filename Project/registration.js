function valid(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var num=document.getElementById('number').value;
    var add=document.getElementById('address').value;

    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var nu=/^[6-9][0-9]{9}$/;
    var n=/^[a-zA-Z.]{6,40}$/;
    var a=/^[a-zA-Z]{10,100}$/;


    if(email=='' || name=='' || num=='' || add=='')
    {
        swal('Please enter all the Fields');
        return false;
    }
    else{
        if(e.test(email) && nu.test(num) && n.test(name) && a.test(add)){
            swal('Thanks for Registration....!Our Agent will approach to your doorstep.');
            
        }
        else{
            swal('Please enter the valid details.... ');
            return false;
        }
    }
}
