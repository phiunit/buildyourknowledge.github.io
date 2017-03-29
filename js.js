$("#mc-embedded-subscribe-form").submit(function(e){
    e.preventDefault();
    submitSubscribeForm($("#mc-embedded-subscribe-form"));
});

function submitSubscribeForm($form, $resultElement) {
        $.ajax({
            type: "GET",
            url: $form.attr("action"),
            data: $form.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c",
            contentType: "application/json; charset=utf-8",

            error: function(error){},

            success: function(data){
                if (data.result != "success") {
                    var message = data.msg || "<div class='alert alert-danger'>Sorry. Unable to subscribe. Please try again later.</div>";

                    if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                        message = "You're already subscribed. Thank you.";
                    }

                    $("#result").html("<div class='alert alert-warning'>"+message+"</div>");

                } else {
                    $("#main").html("<div class='alert alert-success' role='alert'> <strong>Thank you!<strong><br>You must confirm the subscription in your inbox.</div>");
                }
            }
        });
    }