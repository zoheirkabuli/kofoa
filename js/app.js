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

// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr("video", {
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
});

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
