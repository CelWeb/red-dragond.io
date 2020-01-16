document.querySelector('.m__icon').onclick = function () {
    document.querySelector('.mobile__menu').classList.toggle('mobile__menu-active');
}
document.querySelector('.header__search').onclick = function () {
    document.querySelector('body','.search__form').classList.toggle('header__search-active');
}

document.querySelector('.search__close').onclick = function () {
    document.querySelector('body','.search__form').classList.remove('header__search-active');
}
document.querySelector('.mobile__menu').onclick = function () {
    document.querySelector('.mobmenu__list').classList.toggle('mobmenu__list-active');
}
