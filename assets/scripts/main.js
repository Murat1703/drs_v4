$('.single-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrow-l'),
    nextArrow: $('.arrow-r'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            },
            breakpoint: 600,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                infinite: true,
                dots: true
            }
        },

    ]

});
var map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.26153486699917, 76.929221636255],
        zoom: 16,
    });

    DG.marker([43.26153486699917, 76.929221636255]).addTo(map);
});
let mobileMenu = document.querySelector('.mobile-menu');
let menuBurger = document.querySelector('.menu-burger');
let menuBurgerContent = document.querySelector('.menu-burger-content');
menuBurger.addEventListener('click', ()=>{
    menuBurgerContent.classList.toggle('__active');
    mobileMenu.classList.toggle('__show-mobile-menu');
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
