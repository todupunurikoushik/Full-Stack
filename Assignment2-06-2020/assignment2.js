function validpass(){
    
    var val=document.getElementById('pass').value;
    if(/^[A-Z]{1,12}[a-z]{1,12}[0-9]{1,12}$/.test(val)){
        window.alert('Valid password');
    }
    else{
        window.alert('Invalid password');
    }

}