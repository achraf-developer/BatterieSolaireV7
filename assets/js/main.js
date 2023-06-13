const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // centred:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type:"fraction"
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    breakpoints:{
        200: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
    }
  });