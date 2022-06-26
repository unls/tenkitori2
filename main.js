var scroll2 = () => {
    $('body,html').animate({scrollTop:$('#header').height()}, 400, 'swing');
}

/*
$(()=>{

var where = $('nav').position().top;
$(window).scroll(()=>{
    var scroll = $(window).scrollTop();
    if(scroll>where){
        $('nav').css({
            position:'fixed',
            top: 0,
        })
    }else{
        $('nav').css({
            position:'static',
        })
    }
})
})
*/