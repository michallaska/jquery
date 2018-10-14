$('p').on('click', function () {
    $(this).hide(1500);
    //$(this).slideDown("slow");//
});




$('anim').on('click', function () {
    $(this).animate({
        'width': '600px',
        'height': '600px',
        'left': '100px'
    }, 2500, function () {
        $('body').addClass('decor');
    })
})
