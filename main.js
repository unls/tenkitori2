var scroll2 = () => {
    $('html,body').removeClass('no-scroll');
    $('body,html').animate({scrollTop:$('#header').height()}, 400, 'swing');
}


$(()=>{})
$(window).scroll(()=>{
    var scroll = $(window).scrollTop();
    if(scroll==0){
        $('html,body').addClass('no-scroll');
    }
})

