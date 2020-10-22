const switches = document.querySelectorAll(".btn-switch-primary");

switches.forEach((el) => {
  el.addEventListener("click", (e) => {
    parseInt(el.dataset.index)
      ? (el.dataset.index = "0")
      : (el.dataset.index = "1");
  });
});
