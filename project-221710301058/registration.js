function valid(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var num=document.getElementById('number').value;
    var add=document.getElementById('address').value;

    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var nu=/^[6-9][0-9]{9}$/;
    var n=/^[a-zA-Z\s]{6,40}$/;
    var a=/^[#.0-9a-zA-Z\s,-]+$/;


    if(email=='' || name=='' || num=='' || add=='')
    {
        swal('Please enter all the Fields');
        return false;
    }
    else{
        if(e.test(email) && nu.test(num) && n.test(name) && a.test(add)){
            swal('Thanks for Registration....!Our Agent will approach to your doorstep.');
            var api_url = "http://localhost:3000/registration";
            var data = {
                name: $('#name').val(),
                email: $('#email').val(),
                phn_number: $('#number').val(),
                address: $('#address').val(),
                
            }
            $.ajax({
                url:api_url,
                type:"POST",
                dataType:"Json",
                data:data,
                
            })
        }
        else{
            swal('Please enter the valid details.... ');
            return false;
        }
    }
}
