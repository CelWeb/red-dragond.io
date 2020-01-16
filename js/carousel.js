$(document).ready(function() {
    $('.main__carousel').owlCarousel({
        loop:false, //Зацикливаем слайдер
        margin:0, //Отступ от элемента справа в 50px
        dots: true,
        nav:false, //Отключение навигации
        autoplay:false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});


