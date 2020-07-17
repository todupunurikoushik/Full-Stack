function valid(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var feed = document.getElementById('feed_back').value;

    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var n=/^[a-zA-Z.\s]{6,40}$/;
    var f=/^[a-zA-Z0-9.,\s]{10,100}$/;

    if(email=='' || name=='' || feed=='')
    {
        swal({
            text:"Please enter all the Fields",
            icon:"error"
        });
        return false;
    }
    else{
        if(e.test(email) && n.test(name) && f.test(feed)){
            swal({
                text: 'Thanks for your Feedback....!',
                icon: "success"
            });
            var api_url = "http://localhost:3000/feedback";
            var data = {
                name: $('#name').val(),
                email: $('#email').val(),
                feedback: $('#feed_back').val()
                
                
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
