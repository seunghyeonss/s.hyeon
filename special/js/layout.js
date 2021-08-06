$(function(){


    $(".xi-bars").on("click", function(){
        $("#gnb").toggleClass("on");
    });
    
    $("#gnb>ul>li").on("click", function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    
    
    
    $(".visual_slider").slick({
        aorrows:false,
        autoplay:true,
    });
    
    
    
    })
    
    