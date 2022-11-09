const heroSwiper = new Swiper(".hero-slider", {
  navigation: {
    nextEl: ".hero-slider__next",
    prevEl: ".hero-slider__prev",
  },
  pagination: {
    el: ".hero-slider__dots",
  },
  loop: true,
  spaceBetween: 20,
});

const homeNewsSwiper = new Swiper(".home-news__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".home-news__slider-next",
    prevEl: ".home-news__slider-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".home-news__slider-next",
        prevEl: ".home-news__slider-prev",
      },
    },
  },
});

// article slider

const homeArticleSwiper = new Swiper(".home-articles__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".home-articles__slider-next",
    prevEl: ".home-articles__slider-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".home-articles__slider-next",
        prevEl: ".home-articles__slider-prev",
      },
    },
  },
});

// qa slidr

const homeQaSwiper = new Swiper(".home-qa__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: false,
    },
  },
});

// books slider

const bookSlider = new Swiper(".home-books__slider", {
  effect: "coverflow",

  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".home-books__slider-next",
    prevEl: ".home-books__slider-prev",
  },
  coverflowEffect: {
    rotate: 40,
    stretch: -20,
    depth: 100,
    slideShadows: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 5,
      coverflowEffect: {
        rotate: 40,
        stretch: -100,
        depth: 200,
        slideShadows: false,
      },
    },
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

// mobile toggle

const toggle = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// home album

if (window.matchMedia("(max-width: 768px)").matches) {
  const homePosts = new Swiper(".home-posts__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".home-posts__slider-next",
      prevEl: ".home-posts__slider-prev",
    },
    pagination: {
      el: ".home-posts__slider-dots",
    },
  });
  const homeAlbum = new Swiper(".home-album__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".home-album__slider-next",
      prevEl: ".home-album__slider-prev",
    },
    pagination: {
      el: ".home-album__slider-dots",
    },
  });
}
