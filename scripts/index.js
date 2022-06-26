var scroll2 = () => {
    $('html,body').removeClass('overflow-hidden');
    $('body,html').animate({scrollTop:$('#header').height()}, 400, 'swing');
}


$(()=>{

$('html,body').addClass('overflow-hidden');

$(window).scroll(()=>{
    var scroll = $(window).scrollTop();
    if(scroll==0){
        $('html,body').addClass('overflow-hidden');
    }
})

})