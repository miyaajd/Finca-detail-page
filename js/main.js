window.addEventListener("load", function () {
  const swiper = new Swiper(".mainLeft", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  // account
  const sizes = this.document.querySelector("#sizes");
  const won = this.document.querySelector("#won");
  const s = 104000;
  const q = 154000;
  //
  won.innerText = `0 원`;
  //
  sizes.addEventListener("change", () => {
    if (sizes.value === "ss") {
      won.innerText = `${s.toLocaleString()} 원`;
    } else if (sizes.value === "qk") {
      won.innerText = `${q.toLocaleString()} 원`;
    } else {
      won.innerText = `0 원`;
    }
  });
  //
  //active
  const moreTitle = this.document.querySelectorAll(".more-title");
  const moreDscr = this.document.querySelectorAll(".more-dscr");
  moreTitle.forEach((more, index) => {
    more.addEventListener("click", () => {
      more.classList.toggle("active");
      moreDscr[index].classList.toggle("active");
    });
  });
  //
  // swiper
  const productSwiper = new Swiper(".product-swiper", {
    loop: true,
    breakpoints: {
      1000: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    },
  });
});
