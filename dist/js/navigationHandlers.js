function GenerateHandlersSideBar(sideBar) {
  const ulItems = sideBar.querySelectorAll(".side-bar-item");

  ulItems.forEach(function (element, i) {
    const btn = element.children[0].querySelector("a");
    const submenu = element.querySelector(".side-bar-item-list");
    btn.addEventListener("click", function (e) {
      const activeSideMenu = document.querySelector(".active-side-1");
      const activeBtn = document.querySelector(".current");
      if (submenu.classList.length == 1) {
        if (activeSideMenu) activeSideMenu.classList.remove("active-side-1");
        if (activeBtn) activeBtn.classList.remove("current");
        btn.classList.add("current");
        submenu.classList.add("active-side-1");
        submenu.focus();
        submenu.scrollIntoView({ behavior: "smooth" });
      } else {
        submenu.classList.remove("active-side-1");
        btn.classList.remove("current");
      }
    });

    if (submenu) {
      const subMenuSub = submenu.querySelectorAll("ul");
      subMenuSub.forEach(function (element, i) {
        const subBtnSub = element.parentElement.querySelector("a");
        subBtnSub.addEventListener("click", function (e) {
          const activeSideMenu2 = document.querySelector(".active-side-2");
          if (element.classList.length == 0) {
            const activeBtn = document.querySelector(".current-2");
            if (activeSideMenu2)
              activeSideMenu.classList.remove("active-side-2");
            if (activeBtn) activeBtn.classList.remove("current-2");
            subBtnSub.classList.add("current-2");
            element.classList.add("active-side-2");
            submenu.scrollIntoView({ behavior: "smooth" });
          } else {
            subBtnSub.classList.remove("current-2");
            element.classList.remove("active-side-2");
          }
        });
      });
    }
  });
}

function generateNavBtnFlag(sideBar) {
  if (sideBar) {
    const btnNav = document.getElementById("top-nav-button");
    btnNav.classList.remove("active-side-left");

    btnNav.addEventListener("click", function (e) {
      const rectEl = sideBar.getBoundingClientRect();
      if (
        rectEl.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        rectEl.right > 0
      ) {
        btnNav.classList.add("active-side-left");
        sideBar.classList.add("hidden");
        sideBar.classList.add("toggled");
        closeOpenedSideMenus(sideBar);
      } else {
        btnNav.classList.remove("active-side-left");
        sideBar.classList.remove("toggled");
      }
    });
  }
}

function closeOpenedSideMenus(sideBar) {
  const activeSideMenu = sideBar.querySelector(".active-side-1");
  const activeBtn = sideBar.querySelector(".current");
  if (activeSideMenu) activeSideMenu.classList.remove("active-side-1");
  if (activeBtn) activeBtn.classList.remove("current");
  const activeSideMenu2 = sideBar.querySelector(".active-side-2");
  const activeBtn2 = sideBar.querySelector(".current-2");
  if (activeSideMenu2) activeSideMenu.classList.remove("active-side-2");
  if (activeBtn) activeBtn2.classList.remove("current-2");
}

function addEventListenerToUserInfo(userInfoContainers) {
  userInfoContainers.forEach(function (element) {
    element.addEventListener("click", function (event) {
      const settingsPopup = element.querySelector(".user-info-settings");
      var active = settingsPopup.dataset.active == "true";
      active
        ? (settingsPopup.dataset.active = "false")
        : (settingsPopup.dataset.active = "true");
      active
        ? element.classList.remove("active")
        : element.classList.add("active");
    });
  });
}

function getUsersInfoContainer() {
  const userInfoContainers = document.querySelectorAll(
    '[data-role="user-info"'
  );
  if (userInfoContainers.length > 0) {
    addEventListenerToUserInfo(userInfoContainers);
  }
}

function getSideBar() {
  const sideBars = document.querySelectorAll('[data-role="side-bar"]');
  if (sideBars.length > 0) {
    sideBars.forEach(function (e) {
      GenerateHandlersSideBar(e);
      generateNavBtnFlag(e);
    });
  }
}

getSideBar();
getUsersInfoContainer();

const line = document.querySelector("#line-section");

line.addEventListener("click", function (event) {
  const rectEl = line.nextElementSibling.getBoundingClientRect();
  if (rectEl.height !== 1) {
    line.dataset.txt = "+";
    line.nextElementSibling.style.height = "0px";
    line.nextElementSibling.style.minHeight = "1px";
  } else {
    line.nextElementSibling.style.height = "auto";
    line.nextElementSibling.style.minHeight = "10rem";
    line.dataset.txt = "-";
  }
});

const isInViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function handleStickySideBar() {
  const activeSideNav = document.querySelector(".side-bar");
  const naimWrapper = document.getElementById("main-wrapper");
  activeSideNav.classList.remove("toggled");
  activeSideNav.classList.add("sticky");
  naimWrapper.classList.add("sticky");
}
