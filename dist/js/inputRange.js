function addHandlerToInputRange() {
  const inputs = document.querySelectorAll("[data-role='input-range']");
  inputs.forEach((e, i) => {
    e.addEventListener("input", (event) => {
      style = window.getComputedStyle(e);
      var color = style.getPropertyValue("color");
      e.style.background =
        "linear-gradient(to right,  " +
        color +
        " 0%, " +
        color +
        e.value +
        "%, #d3d3d3 " +
        e.value +
        "%, #d3d3d3 100%)";
    });
  });
}

window.addEventListener("load", function () {
  const inputs = document.querySelectorAll("[data-role='input-range']");

  inputs.forEach((e, i) => {
    style = window.getComputedStyle(e);
    var color = style.getPropertyValue("color");
    e.style.background =
      "linear-gradient(to right,  " +
      color +
      " 0%, " +
      color +
      e.value +
      "%, #d3d3d3 " +
      e.value +
      "%, #d3d3d3 100%)";
  });
});

addHandlerToInputRange();
