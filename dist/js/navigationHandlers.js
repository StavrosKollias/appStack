const ulItems = document.querySelectorAll(".side-bar-item");

ulItems.forEach((element, i) => {
  const btn = element.children[0].querySelector("a");
  const submenu = element.querySelector(".side-bar-item-list");
  btn.addEventListener("click", (e) => {
    if (submenu.classList.length == 1) {
      const activeSideMenu = document.querySelector(".active-side-1");
      if (activeSideMenu) activeSideMenu.classList.remove("active-side-1");
      btn.querySelector(".fa-angle-down").className = "fas fa-angle-up";
      submenu.classList.add("active-side-1");
    } else {
      btn.querySelector(".fa-angle-up").className = "fas fa-angle-down";
      submenu.classList.remove("active-side-1");
    }
  });

  const subMenuSub = submenu.querySelectorAll("ul");
  subMenuSub.forEach((element, i) => {
    const subBtnSub = element.parentElement.querySelector("a");
    subBtnSub.addEventListener("click", (e) => {
      if (element.classList.length == 1) {
        const activeSideMenu2 = document.querySelector(".active-side-2");
        if (activeSideMenu2) activeSideMenu.classList.remove("active-side-2");
        subBtnSub.querySelector(".fa-angle-down").className = "fas fa-angle-up";
        element.classList.add("active-side-2");
      } else {
        subBtnSub.querySelector(".fa-angle-up").className = "fas fa-angle-down";
        element.classList.remove("active-side-2");
      }
    });
  });
});
