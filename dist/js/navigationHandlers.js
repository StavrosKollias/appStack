const sandwitchMenuButton = document.getElementById("sandwitch-check-btn");
const mainContainer = document.getElementById("app-stack-container");
sandwitchMenuButton.addEventListener("click", function (e) {
  if (e.target.checked) {
    mainContainer.style.transform = "translateX(-20rem)";
    mainContainer.style.width = "calc(100% + 20rem)";
  } else {
    mainContainer.style.width = "100vw";
    mainContainer.style.transform = "translateX(0)";
  }
});

const sideBar = mainContainer.querySelector("#side-bar");
const li = sideBar.querySelectorAll("ul li");
const subli = sideBar.querySelectorAll("ul li ul li");

subli.forEach(function (e, i) {
  e.addEventListener("click", function (e) {
    const ul = e.target.querySelector("ul");
    if (ul) {
      let rectCollection = ul.getClientRects();

      if (rectCollection.length == 0) {
        const arrow = e.target.querySelector(".fa-angle-down");
        ul.style.display = "block";
        arrow.className = "fas fa-angle-up";
      } else {
        const arrow = e.target.querySelector(".fa-angle-up");
        ul.style.display = "none";
        arrow.className = "fas fa-angle-down";
      }
    }
  });
});
li.forEach(function (e, i) {
  e.addEventListener("click", function (e) {
    const ul = e.target.querySelector("ul");
    if (ul) {
      let rectCollection = ul.getClientRects();
      if (rectCollection.length == 0) {
        const allUls = sideBar.querySelectorAll("ul li ul");
        resetULBlock(allUls);
        const arrow = e.target.querySelector(".fa-angle-down");
        arrow.className = "fas fa-angle-up";
        ul.style.display = "block";
        ul.scrollIntoView({ behavior: "smooth" });
      } else {
        const arrow = e.target.querySelector(".fa-angle-up");
        ul.style.display = "none";
        arrow.className = "fas fa-angle-down";
      }
    }
  });
});

function resetULBlock(uls) {
  uls.forEach((e, i) => {
    const rectangleUL = e.getClientRects();
    if (rectangleUL.length > 0) {
      const arrow = e.parentElement.querySelector(".fa-angle-up");
      arrow.className = "fas fa-angle-down";
      e.style.display = "none";
    }
  });
}
