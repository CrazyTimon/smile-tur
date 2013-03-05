var animated_boxs = $(".hellow-box__caption").next();
animated_boxs.hide();
animated_boxs.slideDown(3000);

$(".hellow-box__caption").on("click", function(){
    var animated_boxs = $(this).next();
    if(animated_boxs.css("display")=="none"){
        animated_boxs.slideDown();
    } else {        
        animated_boxs.slideUp();
    }
});