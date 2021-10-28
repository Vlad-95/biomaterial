$(document).ready(function() {
    //===========Мобильное меню
    let body = $('body')
    let windowWidth = window.innerWidth;
    let header = $('.header');
    let headerWrap = $('.header__wrap').first();
    let nav = header.find('.nav');
    let phone = header.find('.phone');
    let btn = header.find('.btn');
    let sites = header.find('.sites');
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
        let mobileBtn = btn.clone();
        let mobileSites = sites.clone();

        mobileMenu.append(mobileNav);
        mobileMenu.append(mobileSites);  
        mobileMenu.append(mobileBtn);   
        mobileMenu.append(mobilePhone);         
            
    }

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
    }

    burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)


    //=======Все сайты======
    if ($('.sites').length) {
        $('.sites__toggle').click(function() {
            $(this).toggleClass('active').next().slideToggle();

            if ($(this).parent().parent().hasClass('mobile-menu')) {
                
            } else {
                
            }
        })
    }
    //=======Все сайты КОНЕЦ=====

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

    //=====текст эксперта=======
    if ($('.expert').length) {
        function truncate(str, maxlength) {
            return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
        }

        let text = $('.expert__citate').html(); 
        let truncacteText = truncate(text, 256);

        //подменяем текст
        $('.expert__citate').html(truncacteText)
        console.log(text)

        //клик по кнопке Читать дальше
        $('.expert__btn').click(function() {
            $(this).toggleClass("open");

            if ($(this).hasClass('open')) {
                $('.expert__citate').fadeOut(100);

                setTimeout(() => $('.expert__citate').html(text), 100);
                
                $('.expert__citate').fadeIn();

                $(this).text('Скрыть')
            } else {
                $('.expert__citate').fadeOut(100);

                setTimeout(() => $('.expert__citate').html(truncacteText), 100);
                
                $('.expert__citate').fadeIn();

                $(this).text('Читать дальше')
            }
            
            

        })
    }
    //======текст эксперта КОНЕЦ

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
            myMap.behaviors.disable('scrollZoom')
        }
    }
    //======карта КОНЕЦ======
});
