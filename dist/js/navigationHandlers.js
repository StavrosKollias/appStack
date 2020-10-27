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
    const btnNav = document.getElementById("nav-bar-button");
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

// function getUsersInfoContainer() {
//   const userInfoContainers = document.querySelectorAll(
//     '[data-role="user-info"'
//   );
//   if (userInfoContainers.length > 0) {
//     addEventListenerToUserInfo(userInfoContainers);
//   }
// }
// getUsersInfoContainer();

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
  const naimWrapper = document.querySelector("[data-role='page']");
  activeSideNav.classList.remove("toggled");
  activeSideNav.classList.add("sticky");
  naimWrapper.classList.add("sticky");
}

window.addEventListener("load", function () {
  getSideBar();

  handleNavResizeLoad();
});

window.addEventListener("resize", function () {
  handleNavResizeLoad();
});

function handleNavResizeLoad() {
  var mainWrapper = document.querySelector("[data-role='page']");
  var sideBar = mainWrapper.querySelector('[data-role="side-bar"]');
  var btnNav = mainWrapper.querySelector("#nav-bar-button");
  var btnClassName, toggleClassName;
  if (mainWrapper.className == "flex-row") {
    toggleClassName = "toggled-left";
    btnClassName = "active-side-left";
  } else {
    toggleClassName = "toggled-right";
    btnClassName = "active-side-right";
  }
  if (document.documentElement.clientWidth < 1500) {
    mainWrapper.querySelector("[data-role='page-sub-content']").dataset.tablet =
      "true";
    hideSideBar(sideBar, btnNav, btnClassName, toggleClassName);
  } else {
    if (!btnNav.classList.contains(btnClassName)) {
      mainWrapper.querySelector(
        "[data-role='page-sub-content']"
      ).dataset.tablet = "false";
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

if (window.location.pathname == "/dist/index.html") {
  // Testing Icons Update
  var counter = 0;
  var temperature = 0;
  setInterval(function () {
    counter += 1;

    temperature += 20;

    if (temperature >= 300) {
      temperature = 20;
    }

    const batteryIcon = document.querySelector(".battery-icon");
    const batteryLevel = document.querySelector("#battery-level-label");

    const connectionIcon = document.querySelector(".connection-icon");
    const connectionLabel = document.querySelector("#connection-label");

    const calibrationIcon = document.querySelector(".calibration-icon");
    const calibrationLabel = document.querySelector("#calibration-label-date");

    if (batteryIcon.className.includes("fa-battery-empty")) {
      batteryIcon.className = "fas fa-battery-full txt-success battery-icon";
      counter = 0;
      batteryLevel.innerText = "100%";
    } else {
      if (counter == 1) {
        batteryIcon.className =
          "fas fa-battery-three-quarters txt-success battery-icon";
        batteryLevel.innerText = 75 + "%";
      }

      if (counter == 2) {
        batteryIcon.className = "fas fa-battery-half txt-info battery-icon";
        batteryLevel.innerText = 50 + "%";
      }

      if (counter == 3) {
        batteryIcon.className =
          "fas fa-battery-quarter txt-warning battery-icon";
        batteryLevel.innerText = 25 + "%";
      }

      if (counter == 4) {
        batteryIcon.className = "fas fa-battery-empty txt-danger battery-icon";
        batteryLevel.innerText = 0 + "%";
      }
    }

    // Wifi On /OFF

    if (counter) {
      connectionIcon.className = "fas fa-wifi txt-success connection-icon";
      connectionLabel.innerText = "ON";
    } else {
      connectionIcon.className = "fas fa-wifi txt-danger connection-icon";
      connectionLabel.innerText = "OFF";
    }

    // Calibration Date
    const date = new Date();
    const todaysDate = date.toLocaleDateString();

    if (counter == 1) {
      calibrationIcon.className =
        "fas fa-check-double txt-success calibration-icon";
      date.setMonth(date.getMonth() + 5);
      const after5Months = date.toLocaleDateString();
      calibrationLabel.innerText = after5Months;
    } else if (counter == 2) {
      calibrationIcon.className =
        "fas fa-check-double txt-danger calibration-icon";
      calibrationLabel.innerText = todaysDate;
    } else if (counter == 3) {
      date.setMonth(date.getMonth() + 1);
      const afterAMonth = date.toLocaleDateString();
      calibrationIcon.className =
        "fas fa-check-double txt-warning calibration-icon";
      calibrationLabel.innerText = afterAMonth;
    }

    const avgTemoIcon = document.querySelector(".avg-temp-icon");
    const avgTempLabel = document.querySelector("#avg-temp-label");
    avgTempLabel.innerHTML = temperature + " &#8451;";
    if (temperature > 80 && temperature < 120) {
      avgTemoIcon.className = "fas fa-chart-line txt-success avg-temp-icon";
    } else {
      avgTemoIcon.className = "fas fa-chart-line txt-danger avg-temp-icon";
    }

    // &#8451;

    const maxTempIcon = document.querySelector(".max-temp-icon");
    const maxTempLabel = document.querySelector("#max-temp-label");

    maxTempLabel.innerHTML = temperature + 50 + " &#8451;";
    if (temperature + 50 > 250 || temperature + 50 < 100) {
      maxTempIcon.className = "fas fa-chart-line txt-danger max-temp-icon";
    } else {
      maxTempIcon.className = "fas fa-chart-line txt-success max-temp-icon";
    }

    const lossTempLabel = document.querySelector("#loss-temp-label");
    const lossTempIcon = document.querySelector(".loss-temp-icon");
    lossTempLabel.innerHTML = counter + " &#8451;";
    if (counter) {
      lossTempIcon.className =
        "fas fa-angle-double-down txt-danger loss-temp-icon";
    } else {
      lossTempIcon.className =
        "fas fa-angle-double-down txt-success loss-temp-icon";
    }

    const pwiLabel = document.querySelector("#pwi-label");
    const pwiIcon = document.querySelector(".pwi-icon");

    pwiLabel.innerText = temperature / 100;

    if (temperature / 100 > 1 && temperature / 100 < 2) {
      pwiIcon.className = "fas fa-chart-area txt-success  pwi-icon";
    } else {
      pwiIcon.className = "fas fa-chart-area txt-danger  pwi-icon";
    }
  }, 2000);
}

// Chart handlers
var pieChartElement = document.getElementById("pie-chart");

if (pieChartElement && window.location.pathname == "/dist/index.html") {
  pieChartElement.addEventListener("click", function (event) {
    window.location = "./chart.html";
  });
}

var tempChartElement = document.getElementById("temperature-chart");

if (tempChartElement && window.location.pathname == "/dist/index.html") {
  tempChartElement.addEventListener("click", function (event) {
    window.location = "./chartTemperature.html";
  });
}

function handleZoomParent(element) {
  const parent = element.closest(".table-container");
  const html = document.querySelector("html");
  if (element.dataset.active == "false") {
    element.innerText = "Close";
    html.style.overflow = "hidden";
    parent.classList.add("table-container-zoomed");
    element.dataset.active = "true";
  } else {
    element.innerText = "Zoom";
    html.style.overflow = "auto";
    parent.classList.remove("table-container-zoomed");
    element.dataset.active = "false";
  }
}
