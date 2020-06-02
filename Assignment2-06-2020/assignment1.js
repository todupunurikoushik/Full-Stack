function agevalid(){
    var dob=document.getElementById('age').value;
    var cur=document.getElementById('tod').value;
    var d=/^[0-9][0-9][/][0-1][0-9][/][0-9]{1,4}$/;
    var c=/^[0-9][0-9][/][0-1][0-9][/][0-9]{1,4}$/;
    
    if(dob=='' || cur==''){
        window.alert('Enter the fields');
    }
    else{
        if(d.test(dob)&&c.test(cur)){
        window.alert('Valid age');
        }
        else {
            window.alert('Invalid age');
        }
    }
    
}