const heroSwiper = new Swiper(".hero-slider", {
  navigation: {
    nextEl: ".hero-slider__next",
    prevEl: ".hero-slider__prev",
  },
  loop: true,
  spaceBetween: 20,
});

const homeNewsSwiper = new Swiper(".home-news__slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".home-news__slider-next",
    prevEl: ".home-news__slider-prev",
  },
});

// books slider

const bookSlider = new Swiper(".home-books__slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "5",
  loop: true,
  navigation: {
    nextEl: ".home-books__slider-next",
    prevEl: ".home-books__slider-prev",
  },
  coverflowEffect: {
    rotate: 0,
    stretch: -100,
    depth: 200,
    slideShadows: false,
  },
});

// players

const players = Array.from(
  document.querySelectorAll(".home-video__player")
).map(
  (p) =>
    new Plyr(p, {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "pip",
        "fullscreen",
      ],
    })
);

// Expose player so it can be used from the console
// window.player = players;
