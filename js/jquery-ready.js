$(document).ready(function() {
    //===========Мобильное меню
    let body = $('body')
    let windowWidth = window.innerWidth;
    let header = $('.header');
    let headerWrap = $('.header__wrap');
    let nav = header.find('.nav');
    let phone = header.find('.phone');
    let lang = header.find('.lang')
    let burger = $('.burger');
    let windowHeight = $(window).height();

    if (windowWidth <= 992) {
        //создаем контейнер для менюшки
        let mobileMenu = $(document.createElement('div'));
        mobileMenu.addClass('mobile-menu');

        headerWrap.append(mobileMenu)

        //клонируем элементы хедера
        let mobileNav = nav.clone();
        let mobilePhone = phone.clone();
        let mobileLang = lang.clone();

        mobileMenu.append(mobileNav);
        mobileMenu.append(mobilePhone);  
        mobileMenu.append(mobileLang);        
    }

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
    }

    burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)

    //=====Якорные ссылки====
    function anchorLinks () {
        let currentLink = $(this).attr('data-anchor');
        let currentDiv = $('[data-anchor="'+ currentLink +'"]:not(a)');        

        //скролл до элемента
        $('html, body').animate({scrollTop: currentDiv.offset().top}, 500);

        if (windowWidth <= 992) {
            let mobileMenu = $('.mobile-menu');

            burger.removeClass('active');
            body.removeClass('no-scroll');
            mobileMenu.removeClass('active');
        }
    }

    $('a[data-anchor]').click(anchorLinks);

    //=====Якорные ссылки КОНЕЦ==

    //=====Слайдер======
    if ($('.intro').length) {
        $('.intro .slider').slick({
            slidesToShow: 1,
            dots: true,
            appendDots: '.slider-pag',
            arrows: false
        })
    }
    //=====Слайдер КОНЕЦ==============

    //==========селекты в форме===========
    if ($('.form__row_select').length) {
        $('.form__item-select').each(function() {
            $(this).select2({
                placeholder: "Выбрать",
            });
        })
    }
    //=========== селекты в форме КОНЕЦ======

    //======карта========
    if($('.map').length) {
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {                
                center: [53.38891907106437,83.74414849999994],         
                zoom: 16,
                controls: []
            });

            var myPlacemark = new ymaps.Placemark([53.38891907106437,83.74414849999994], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/map-marker.png',
                iconImageSize: [55, 57],
                iconImageOffset: [-28, -45]
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }
    //======карта КОНЕЦ======
});
