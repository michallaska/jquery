$("p").on('click', function(){
    $(this).toggleClass('decor-bold');
});

$('h1').on({
    'mouseenter': function(){
        $('body').addClass('decor');
    },
    'mouseleave': function(){
        $('body').removeClass    
    }
})