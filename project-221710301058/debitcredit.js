function valid(){

    var num=document.getElementById('number').value;
    var nam=document.getElementById('name').value;
    var dat=document.getElementById('date').value;
    var cv=document.getElementById('cvv').value;

    var nu= /^[0-9\s]{16}$/;
    var na= /^[A-Z\s]{5,30}$/;
    var da= /^(0?[1-9]|1[012])[\/\-]\d{2}$/;
    var c= /^[0-9]{3}$/;

    if(num=='' || nam=='' || dat=='' || cv=='')
    {
        swal({
            text:"Please enter all the Fields",
            icon:"error"
        });
        return false;
    }
    else{
        if(nu.test(num) && na.test(nam) && da.test(dat) && c.test(cv)){
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
            var api_url = "http://localhost:3000/debitcreditcard";
                    var data = {
                        card_no: $('#number').val(),
                        name_on_card: $('#name').val(),
                        expiry_date: $('#date').val(),
                        cvv: $('#cvv').val()
                        
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
