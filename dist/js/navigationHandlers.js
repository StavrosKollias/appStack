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
      openCloseSideNav(sideBar, btnNav);
    });
  }
}

function openCloseSideNav(sideBar, btnNav) {
  const mainWrapperClass = sideBar.parentElement.className;
  var btnClassName, toggleClassName;

  if (mainWrapperClass == "flex-row") {
    toggleClassName = "toggled-left";
    btnClassName = "active-side-left";
  } else {
    toggleClassName = "toggled-right";
    btnClassName = "active-side-right";
  }
  if (isInViewPortRightLeft(sideBar)) {
    hideSideBar(sideBar, btnNav, btnClassName, toggleClassName);
  } else {
    showSideBar(sideBar, btnNav, btnClassName, toggleClassName);
  }
}

function showSideBar(sideBar, btnNav, btnClassName, toggleClassName) {
  btnNav.classList.remove(btnClassName);
  sideBar.classList.remove(toggleClassName);
}

function hideSideBar(sideBar, btnNav, btnClassName, toggleClassName) {
  btnNav.classList.add(btnClassName);
  sideBar.classList.add(toggleClassName);
  closeOpenedSideMenus(sideBar);
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
    element.addEventListener("click", function () {
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

function handleStickySideBar() {
  const activeSideNav = document.querySelector(".side-bar");
  const naimWrapper = document.getElementById("main-wrapper");
  activeSideNav.classList.remove("toggled");
  activeSideNav.classList.add("sticky");
  naimWrapper.classList.add("sticky");
}

window.addEventListener("load", function () {
  getSideBar();
  getUsersInfoContainer();
  handleNavResizeLoad();
});

window.addEventListener("resize", function () {
  handleNavResizeLoad();
});

function handleNavResizeLoad() {
  var mainWrapper = document.getElementById("main-wrapper");
  var sideBar = mainWrapper.querySelector('[data-role="side-bar"]');
  var btnNav = mainWrapper.querySelector("#top-nav-button");
  var btnClassName, toggleClassName;
  if (mainWrapper.className == "flex-row") {
    toggleClassName = "toggled-left";
    btnClassName = "active-side-left";
  } else {
    toggleClassName = "toggled-right";
    btnClassName = "active-side-right";
  }
  if (document.documentElement.clientWidth < 987) {
    mainWrapper.querySelector("#main-wrapper-right").dataset.tablet = "true";
    hideSideBar(sideBar, btnNav, btnClassName, toggleClassName);
  } else {
    if (!btnNav.classList.contains(btnClassName)) {
      mainWrapper.querySelector("#main-wrapper-right").dataset.tablet = "false";
      showSideBar(sideBar, btnNav, btnClassName, toggleClassName);
    }
  }
}

const isInViewPortRightLeft = (el) => {
  const rect = el.getBoundingClientRect();
  const inView =
    rect.left >= 0 &&
    rect.right >= 0 &&
    rect.right <= document.documentElement.clientWidth &&
    rect.left <= document.documentElement.clientWidth;
  return inView;
};
