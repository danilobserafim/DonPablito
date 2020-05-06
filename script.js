$(function(e){
    $('ul li:first-child').click(function(e){
        $('html, body').animate({scrollTop:$('#inicio').offset().top},1000)
    })

    $('ul li:nth-child(2)').click(function(e){
        $('html, body').animate({scrollTop:$('#menu').offset().top},1000)
    })
    $('ul li:last-child').click(function(e){
        $('html, body').animate({scrollTop:$('#footer').offset().top},2000)
    })
});