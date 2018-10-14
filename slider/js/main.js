const slideShow = $('.slide-show');
const slideCount = $('single-slide').length;
const prev = $ ('slider-nav-prev');
const next = $ ('slider-nav-next');

let slideCount =slides.length;
let slidewidth = 100/slideCount;
let slideIndex=0;

slideShow.css({'width': slideCount +'00%'});

slides.each('function(ind)' {
    $(this).css {
        'with': slidewidth + '%',
        'margin-left': ind * slidewidth + '%'
});

prev.on('click',function()){    
        
        }
    