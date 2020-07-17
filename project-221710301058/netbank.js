function valid(){
    var use = document.getElementById('txtUsername').value;
    var pas = document.getElementById('txtPassword').value;

    var u=/^[a-zA-Z0-9.-_]{3,20}$/;
    var p=/^[a-zA-Z0-9!@#*.]{3,20}$/;

    if(use=='' || pas==''){
        swal({
            text:"Please enter all the fields",
            icon:"error"
        });
    }
    else {
        if(u.test(use) && p.test(pas)){
            swal({
                text: "Enter OTP",
                content: "input",
                button: {
                            text: "Submit",
                        }
            }).then((value)=>{
        
                swal({
                    title:'Please Wait',
                    text:'Your transaction is in progress',
                    icon:"info",
                    button:false
                });
                setTimeout(function(){
                    swal({
                        text:"Your transaction has completed successfully",
                        icon:"success"
                    });
                },2000);
            });
            var api_url = "http://localhost:3000/netbank";
            var data = {
                username: $('#txtUsername').val(),
                password: $('#txtPassword').val(),
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
                text:"Please enter the valid details....",
                icon:"error"
            });
            return false;
        }
    }
    
}