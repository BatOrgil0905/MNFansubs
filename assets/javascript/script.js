// --SwiperJs--
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

// --Tailwind Config--
tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        transparentWhite: "rgba(255 , 255 , 255 , 0)",
        transparentBlack: "rgba(0, 0, 0, 0.7)",
      },
    },
  },
};

// --logo--
const logo = document.querySelector("#mainLogo");
logo.style.cursor = "pointer";
document.addEventListener("click", (e) => {
  if (e.target.id === "mainLogo") {
    location.pathname = "../index.html";
  }
});

// --Toggles--
const layer = document.querySelector("#layer");
const filmLayer = document.querySelector("#layer2");
const searchLayer = document.querySelector("#layer3");

// --Open Menu--
document.addEventListener("click", (e) => {
  if (e.target.id == "bars" || e.target.id == "barsIcon") {
    layer.classList.toggle("open");
  } else if (e.target.id === "film" || e.target.id === "filmIcon") {
    layer.classList.remove("open");
  } else if (e.target.id === "search" || e.target.id === "searchIcon") {
    layer.classList.remove("open");
  }
});

// --Open Film--
document.addEventListener("click", (e) => {
  if (e.target.id == "film" || e.target.id == "filmIcon") {
    filmLayer.classList.toggle("open");
  } else if (e.target.id == "bars" || e.target.id == "barsIcon") {
    filmLayer.classList.remove("open");
  } else if (e.target.id === "search" || e.target.id === "searchIcon") {
    filmLayer.classList.remove("open");
  }
});

//--Open Searchbar--
document.addEventListener("click", (e) => {
  if (e.target.id == "search" || e.target.id == "searchIcon") {
    searchLayer.classList.toggle("open");
  } else if (e.target.id == "bars" || e.target.id == "barsIcon") {
    searchLayer.classList.remove("open");
  } else if (e.target.id === "film" || e.target.id === "filmIcon") {
    searchLayer.classList.remove("open");
  }
});
