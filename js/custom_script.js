var animated_boxs = $(".hellow-box__caption").next();
animated_boxs.hide();
animated_boxs.slideDown(1000);

$(".hellow-box__caption").on("click", function(){
    var animated_boxs = $(this).next();
    if(animated_boxs.css("display")=="none"){
        animated_boxs.slideDown();
    } else {        
        animated_boxs.slideUp();
    }
});
$("#send_request").next().slideUp(1000);
$( "#datepicker-start" ).datepicker();
$( "#datepicker-end" ).datepicker();
/*$("#send_request").next().slideUp(1000, function(){
    $("#send_request").popover({
        content:"Нажмите что бы раскрыть блок",
        "title":"Подсказка",
        trigger:"hover",
        placement:"bottom"
    }).popover("show");
});*/