$(document).ready(function(){
    // Hide
    $('#hide').click(function(){
        $('#box').hide(300);
    })
    
    // Show
    $('#show').click(function(){
        $('#box').show(300);
    })

    // FadeOut
    $('#fadeOut').click(function(){
        $('.box1').fadeOut(1000);
        $('.box2').fadeOut(900);
        $('.box3').fadeOut(800);
    })

    // FadeIn
    $('#fadeIn').click(function(){
        $('.box1').fadeIn(800);
        $('.box2').fadeIn(900);
        $('.box3').fadeIn(1000);
    })

    // FadeToggle
    $('#fadeToggle').click(function(){
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(5000);
    })

    // FadeTo
    $('#fadeTo').click(function(){
        $('.box1').fadeTo("slow",0.2);
        $('.box2').fadeTo("slow",0.3);
        $('.box3').fadeTo("slow",0.4);
    })

    // Efek SlideUp
    $('#slideUp').click(function(){
        $('#slide').slideUp("slow")
    })
    
    // Efek SlideDown
    $('#slideDown').click(function(){
        $('#slide').slideDown("slow")
    })
    
    // Efek SlideToggle
    $('#slideToggle').click(function(){
        $('#slide').slideToggle("slow")
    })

    // Efek animate
    $('#kiri').click(function(){
        $('#animate-box').animate({'left': "-=350px"}, "slow")
    })
    $('#kanan').click(function(){
        $('#animate-box').animate({'right': "-=350px"}, "slow")
    })

    // Efek clearQueue
    $('#start').click(function(){
        $('#clearQueue-Box').animate({left:'+=600'}, 5000);
        $('#clearQueue-Box').queue(function(){});
    })
    
    $('#stop').click(function(){
        $('#clearQueue-Box').clearQueue();
        $('#clearQueue-Box').stop();
    })
})