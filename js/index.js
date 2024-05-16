$(document).ready(function () {
    
    let list_1 = document.querySelectorAll('.list_1');

    init();

    list_1.forEach(function (element){
        element.onclick = showTabs;
    });

    function init(){
        let block = document.querySelectorAll('.block');

        for (let i = 1; i < block.length; i++){
            block[i].style.display = 'none';
        }
    }

    function showTabs (){
        let data = this.getAttribute('data');
        let block = document.querySelectorAll('.block');

        for (let i = 0; i < block.length; i++){
            block[i].style.display = 'none';
        }

        document.querySelector(`.block[data="${data}"]`).style.display = 'block';
    }
// ---------------------------Портфолио---------------------------
    $('.all_li').click(function (){
        $('.photo').show();
        $('.gr_des').show();
        $('.web_des').show(); 
    });
    $('.photo_li').click(function (){
        $('.gr_des').hide();
        $('.web_des').hide(); 
        $('.photo').show();
    });
    $('.gr_des_li').click(function (){
        $('.web_des').hide();
        $('.photo').hide(); 
        $('.gr_des').show();
    });
    $('.web_des_li').click(function (){
        $('.photo').hide();
        $('.gr_des').hide();
        $('.web_des').show();
    });

// ---------------------------навигация для картинок---------------------------
    $('main').hide();
    $('.home_li').click(function (){
        $('main').hide();
        $('.home').show();
    });

    $('.more_about').click(function (){
        $('main').show();
        $('.home').hide();
    });
// ---------------------------------
    let nav_im = document.querySelectorAll('.nav_im');

    init();

    nav_im.forEach(function (element){
        element.onclick = showImg;
    });

    function init(){
        let block = document.querySelectorAll('.block');

        for (let i = 1; i < block.length; i++){
            block[i].style.display = 'none';
        }
    }

    function showImg (){
        let data = this.getAttribute('data');
        let block = document.querySelectorAll('.block');

        for (let i = 0; i < block.length; i++){
            block[i].style.display = 'none';
        }

        document.querySelector(`.block[data="${data}"]`).style.display = 'block';
    }
// ---------------------------------

    // ----------------------Модальное окно 1----------------------
    $('.mo_1').click(function (){
        $('.overlay').show(300);
    });
    $('.close_popup').click(function (){
        $('.overlay').hide(300);
    });
    // ----------------------Модальное окно 2----------------------
    $('.mo_3').click(function (){
        $('.overlay_contact').show(300);
    });
    $('.close_popup_contact').click(function (){
        $('.overlay_contact').hide(300);
    });
    // ----------------------Модальное окно 3----------------------
    $('.mo_4').click(function (){
        $('.overlay_sale').show(300);
    });
    $('.close_popup_sale').click(function (){
        $('.overlay_sale').hide(300);
    });
    // ----------------------Модальное окно 4----------------------
    $('.mo_5').click(function (){
        $('.overlay_cookie').show(300);
    });
    $('.close_popup_cookie').click(function (){
        $('.overlay_cookie').hide(300);
    });
    // ---------------------------------------------------------------
    let changeThemeButtons = document.querySelectorAll('.theme_svg');

    changeThemeButtons.forEach(button => {
        button.addEventListener('click', function () { 
            let theme = this.dataset.theme; 
            applyTheme(theme);
        });
    });

    function applyTheme(themeName){
        document.querySelector('[title="theme"]').setAttribute('href', `theme-${themeName}.css`);

        changeThemeButtons.forEach(button => {
            button.style.display = 'block';
        });

        document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
        localStorage.setItem('theme', themeName); 
    }
    let activeTheme = localStorage.getItem('theme'); 

    if(activeTheme === null || activeTheme === 'light'){ 
        applyTheme('light');
    } else if (activeTheme === 'dark'){
        applyTheme('dark');
    }
    // --------------------------Карта-------------------------------------
    ymaps.ready(yandex_map);

    function yandex_map () {
    let map = new ymaps.Map('map',{
        center: [55.03019714355469, 82.9204330444336],
        zoom: 15,
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');

    let mark = new ymaps.Placemark([55.030342, 82.9243106],{}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin-mark.png',
        iconImageSize: [30, 30],
    });
    map.geoObjects.add(mark);
}

});

