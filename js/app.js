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

// player

/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/

/*
	Initializes AmplitudeJS
*/

if (document.querySelector(".home-speech")) {
  Amplitude.init({
    songs: [
      {
        name: "Risin' High (feat Raashan Ahmad)",
        artist: "Ancient Astronauts",
        album: "We Are to Answer",
        url: "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
      },
      {
        name: "The Gun",
        artist: "Lorn",
        album: "Ask The Dust",
        url: "https://521dimensions.com/song/08 The Gun.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg",
      },
      {
        name: "Anvil",
        artist: "Lorn",
        album: "Anvil",
        url: "https://521dimensions.com/song/LORN - ANVIL.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/anvil.jpg",
      },
      {
        name: "I Came Running",
        artist: "Ancient Astronauts",
        album: "We Are to Answer",
        url: "https://521dimensions.com/song/ICameRunning-AncientAstronauts.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg",
      },
      {
        name: "First Snow",
        artist: "Emancipator",
        album: "Soon It Will Be Cold Enough",
        url: "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
      },
      {
        name: "Terrain",
        artist: "pg.lost",
        album: "Key",
        url: "https://521dimensions.com/song/Terrain-pglost.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/key.jpg",
      },
      {
        name: "Vorel",
        artist: "Russian Circles",
        album: "Guidance",
        url: "https://521dimensions.com/song/Vorel-RussianCircles.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg",
      },
      {
        name: "Intro / Sweet Glory",
        artist: "Jimkata",
        album: "Die Digital",
        url: "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg",
      },
      {
        name: "Offcut #6",
        artist: "Little People",
        album: "We Are But Hunks of Wood Remixes",
        url: "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg",
      },
      {
        name: "Dusk To Dawn",
        artist: "Emancipator",
        album: "Dusk To Dawn",
        url: "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg",
      },
      {
        name: "Anthem",
        artist: "Emancipator",
        album: "Soon It Will Be Cold Enough",
        url: "https://521dimensions.com/song/Anthem-Emancipator.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
      },
    ],
    callbacks: {
      play: function () {
        document.getElementById("album-art").style.visibility = "hidden";
        document.getElementById("large-visualization").style.visibility =
          "visible";
      },

      pause: function () {
        document.getElementById("album-art").style.visibility = "visible";
        document.getElementById("large-visualization").style.visibility =
          "hidden";
      },
    },
    waveforms: {
      sample_rate: 50,
    },
  });
}
