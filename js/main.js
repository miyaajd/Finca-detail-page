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
  sizes.addEventListener("change", () => {
    if (sizes.value === "ss") {
      won.innerText =`${s.toLocaleString()} 원`;
    } else if (sizes.value === "qk") {
      won.innerText = `${q.toLocaleString()} 원`;
    } else {
      won.innerText = `0 원`;
    }
  });
});
