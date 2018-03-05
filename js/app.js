$(document).ready(function(){
    $('.courses-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="prew-arrow"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button class="next-arrow"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]
    });

    $('.accordion').click(function(){
       $(this).parent().toggleClass('hidden');
       $(this).parent().next().slideToggle();
    });
});