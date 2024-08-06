$("#btn_record").on("click", function() {
    
    var txt_name = $("#name").val();
    var txt_message = $("#message").val(); 

    $.ajax({
        url: "http://92.168.2.132/include.php",
        type: "post",
        data: {name: txt_name, message: txt_message},
        beforeSend: function() {
            $("#response").html("Sending......");
        }
    }).done(function(e) {
        $("#response").html("Saved data......");
    })

})
