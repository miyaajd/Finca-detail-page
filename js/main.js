window.addEventListener("load", function () {
  const aTag = this.document.querySelectorAll("a");
  aTag.forEach((a) => {
    a.addEventListener("click", (e) => {
      if (a.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
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
  // 리뷰 더보기
  const readMore = document.querySelector("#readMore");
  const reviewTxt = document.querySelector("#moreTxt");
  readMore.addEventListener("click", (e) => {
    const isOpen = reviewTxt.classList.toggle("open");
    readMore.textContent = isOpen ? "접기" : "더보기";
    e.currentTarget.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  // 고탑버튼
  const goTop = this.document.querySelector("#goTop");
  goTop.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // 고바텀 버튼
  const goBottom = this.document.querySelector("#goBottom");
  goBottom.addEventListener("click", () => {
    this.window.scrollTo({
      top: this.document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
  // detail 더보기
  const moreBtn = this.document.querySelector(".moreBtn");
  const detail = this.document.querySelector(".detail-wrap");
  const closeBtn = this.document.querySelector(".closeBtn");
  moreBtn.addEventListener("click", () => {
    detail.classList.add("open");
    if (detail.classList.contains("open")) {
      closeBtn.style.display = "flex";
      moreBtn.style.display = "none";
    }
    closeBtn.addEventListener("click", () => {
      this.window.scrollTo({
        top: detail.offsetTop,
        behavior: "smooth",
      });
      detail.classList.remove("open");
      closeBtn.style.display = "none";
      moreBtn.style.display = "flex";
    });
  });
  // animation
  function bounceEffect(el) {
    el.classList.add("bounce");
    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("bounce");
      },
      { once: true }
    );
  }
  function bounceEffectUp(el) {
    el.classList.add("bounceUp");
    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("bounceUp");
      },
      { once: true }
    );
  }
  this.setInterval(() => {
    bounceEffect(moreBtn);
    bounceEffectUp(closeBtn);
  }, 1700);
  // modal
  const modalClose = this.document.querySelector("#modalClose");
  const modal = this.document.querySelector(".modalWrap");
  this.document.documentElement.style.overflow = "hidden";
  modalClose.addEventListener("click", () => {
    modal.classList.add("none");
    this.document.documentElement.style.overflow = "";
  });
  //
  // help
  // help Btn
  const helpBtn = this.document.querySelector("#helpBtn");
  const helpwrap = this.document.querySelector(".helpwrap");
  helpBtn.addEventListener("click", (e) => {
    const isOpenHelp = helpwrap.classList.toggle("open");
    helpBtn.style.transform = "scale(0.8)";
    this.setTimeout(() => {
      helpBtn.style.transform = "scale(1)";
    }, 150);
    const isClick = helpBtn.classList.toggle("click");
    helpBtn.textContent = isClick ? "✕" : "Help";
    e.currentTarget.setAttribute("aria-expanded", isClick ? "true" : "false");
    const helpMenuBtn = this.document.querySelectorAll(
      ".helpMenu > li > button"
    );
    const helpMenu = this.document.querySelectorAll(
      ".helpMenu > li > button >i, .helpMenu > li > button >span"
    );
    if (isOpenHelp) {
      helpMenu.forEach((menu) => {
        menu.classList.remove("active");
      });
      if (helpMenu.length > 0) {
        helpMenu[0].classList.add("active");
        helpMenu[1].classList.add("active");
      }
    }  
    helpMenuBtn.forEach((button) => {
      button.addEventListener("click", () => {
        helpMenu.forEach((menu) => {
          menu.classList.remove("active");
        });
        helpMenu.forEach((m) => {
          if (button.contains(m)) {
            m.classList.add("active");
          }
        });
      });
    });
  });
});
