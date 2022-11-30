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
  pagination: {
    el: ".home-news__slider-dots",
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

  pagination: {
    el: ".home-articles__slider-dots",
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
  spaceBetween: 20,
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
// just mobile

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

  // search in header

  const searchBtn = document.querySelector(".navbar__search-btn");
  const navbar = document.querySelector(".navbar");
  const logoText = document.querySelector(".navbar__logotext-link");
  const toggleBtn = document.querySelector(".navbar__toggle");
  const searchForm = document.querySelector(".navbar__search");
  const searchInput = document.querySelector(".navbar__search-input");

  const closeSearch = (event) => {
    if (!event.target.closest(".navbar__search-input")) {
      navbar.classList.remove("search-open");
      setTimeout(() => {
        toggleBtn.style.display = "";
        logoText.style.display = "";
      }, 200);
      document.removeEventListener("click", closeSearch);
    }
  };

  searchBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (navbar.classList.contains("search-open")) {
      if (searchInput.value.length == 0) {
        closeSearch(event);
      } else {
        searchForm.submit();
      }
    } else {
      navbar.classList.add("search-open");
      toggleBtn.style.display = "none";
      logoText.style.display = "none";
      document.addEventListener("click", closeSearch);
    }
  });
}

// desktop search header
if (window.matchMedia("(min-width: 768px)").matches) {
  const searchBtn = document.querySelector(".navbar__search-btn");
  const navbar = document.querySelector(".navbar");
  const searchForm = document.querySelector(".navbar__search");
  const searchInput = document.querySelector(".navbar__search-input");

  const closeSearch = (event) => {
    if (!event.target.closest(".navbar__search-input")) {
      navbar.classList.remove("search-open");
      document.removeEventListener("click", closeSearch);
    }
  };

  searchBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (navbar.classList.contains("search-open")) {
      if (searchInput.value.length == 0) {
        closeSearch(event);
      } else {
        searchForm.submit();
      }
    } else {
      navbar.classList.add("search-open");
      document.addEventListener("click", closeSearch);
    }
  });
}

const postSimilarSwiper = new Swiper(".similar-posts__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".home-news__slider-next",
    prevEl: ".home-news__slider-prev",
  },
  pagination: {
    el: ".home-news__slider-dots",
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

// album page light box

Fancybox.bind('[data-fancybox="album"]', {
  // Your options go here
});
