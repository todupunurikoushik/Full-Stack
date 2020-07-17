function valid(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('message').value;

    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var n=/^[a-zA-Z.]{6,40}$/;
    var m=/^[a-zA-Z]{10,100}$/;

    if(email=='' || name=='' || msg=='')
    {
        swal('Please enter all the Fields');
        return false;
    }
    else{
        if(e.test(email) && n.test(name) && m.test(msg)){
            swal({
                text: 'Thanks for your Feedback....!',
                icon: "success"
            });
        }
        else{
            swal('Please enter the valid details.... ');
            return false;
        }
    }
}
