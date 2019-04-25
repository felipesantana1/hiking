$(document).ready(function(){
    $('.burger').click(function(){
        $('nav').toggleClass('active')
    });

    $(window).scroll(function(){
        var scrollFromTop = $(window).scrollTop();

        if(scrollFromTop >= 50){
           $("header").css("background-color", "rgba(255, 228, 194, 0.88)")
        } else {
            $("header").css("background-color", "rgba(130, 83, 51, 0.0)")
        }
    });
});

