// Импортируем другие js-файлы
const header = document.querySelector('.header');
    body = document.querySelector('.body');
    main = document.querySelector('.main');
    footer = document.querySelector('.footer');

// Header Slider

const swiper = new Swiper('.header-slider__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        320: {
            spaceBetween: 18,
            slidesOffsetAfter: 10,
        },
        768: {
            spaceBetween: 36,
        },
        1024: {
            slidesOffsetAfter: 20,
        }
    },
    navigation: {
        nextEl: '.swiper-button__next',
        prevEl: '.swiper-button__prev',
    },
});

// Header Mobile Catalog

const headerBurger = header.querySelector('.header-burger');
    headerMenuCatalog = header.querySelector('.menu-catalog');
    headerCatalogClose = headerMenuCatalog.querySelector('.menu-catalog__close');
    headerCatalogItemsLink = headerMenuCatalog.querySelectorAll('.menu-catalog__item-link');

// Вопросики

headerBurger.addEventListener('click', () => {
    headerMenuCatalog.classList.add('active');
    body.classList.add('no-scroll');
});
headerCatalogClose.addEventListener('click', () => {
    headerMenuCatalog.classList.remove('active');
    body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
    if(e === headerBurger) {
        headerMenuCatalog.classList.add('active');
        return;
    }
    if(e === headerCatalogClose) {
        headerMenuCatalog.classList.remove('active');
        return;
    }
});

headerCatalogItemsLink.forEach(link => {
    link.addEventListener('click', (e) => {
        const linkSublist = e.target.closest('.menu-catalog__item-link').nextElementSibling;
        const itemLink = e.target.closest('.menu-catalog__item');
        
        if(linkSublist.classList.contains('menu-catalog__sublist') && itemLink.classList.contains('active')) {
            event.preventDefault();
            itemLink.classList.remove('active');
            return;
        }
        
        if(linkSublist.classList.contains('menu-catalog__sublist')) {
            event.preventDefault();
            itemLink.classList.add('active');
            return;
        }
    });
});