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
  //
  const moreBtn = this.document.querySelectorAll(".more li");
  const moreDscr = this.document.querySelectorAll(".more-dscr li");
  moreBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      moreDscr.forEach((dscr, index) => {
        dscr.classList.remove("active");
      });
      moreDscr[index].classList.toggle("active");
    });
  });
});
