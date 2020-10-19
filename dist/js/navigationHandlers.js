function GenerateHandlersSideBar() {
   const ulItems = document.querySelectorAll(".side-bar-item");

   ulItems.forEach((element, i) => {
      const btn = element.children[0].querySelector("a");
      const submenu = element.querySelector(".side-bar-item-list");
      btn.addEventListener("click", (e) => {
         const activeSideMenu = document.querySelector(".active-side-1");
         const activeBtn = document.querySelector(".current");
         if (submenu.classList.length == 1) {
            if (activeSideMenu) activeSideMenu.classList.remove("active-side-1");
            if (activeBtn) activeBtn.classList.remove("current");
            btn.classList.add("current");
            submenu.classList.add("active-side-1");
         } else {
            submenu.classList.remove("active-side-1");
            btn.classList.remove("current");
         }
      });

      if (submenu) {
         const subMenuSub = submenu.querySelectorAll("ul");
         subMenuSub.forEach((element, i) => {
            const subBtnSub = element.parentElement.querySelector("a");
            subBtnSub.addEventListener("click", (e) => {
               const activeSideMenu2 = document.querySelector(".active-side-2");
               if (element.classList.length == 0) {
                  const activeBtn = document.querySelector(".current-2");
                  if (activeSideMenu2) activeSideMenu.classList.remove("active-side-2");
                  if (activeBtn) activeBtn.classList.remove("current-2");
                  subBtnSub.classList.add("current-2");
                  element.classList.add("active-side-2");
               } else {
                  subBtnSub.classList.remove("current-2");
                  element.classList.remove("active-side-2");
               }
            });
         });
      }
   });
}

GenerateHandlersSideBar();

function generateNavBtnFlag() {
   const activeSideNav = document.querySelector(".side-bar");
   if (activeSideNav) {
      const btnNav = document.getElementById("top-nav-button");
      btnNav.classList.remove("active-side-left");

      btnNav.addEventListener("click", function (e) {
         const rectEl = activeSideNav.getBoundingClientRect();
         if (rectEl.right <= (window.innerWidth || document.documentElement.clientWidth) && rectEl.right > 0) {
            btnNav.classList.add("active-side-left");
            activeSideNav.classList.add("hidden");
            activeSideNav.classList.add("toggled");
            clearSideMenu();
         } else {
            btnNav.classList.remove("active-side-left");
            activeSideNav.classList.remove("toggled");
         }
      });
   }
}

generateNavBtnFlag();

function clearSideMenu() {
   const activeSideMenu = document.querySelector(".active-side-1");
   const activeBtn = document.querySelector(".current");
   if (activeSideMenu) activeSideMenu.classList.remove("active-side-1");
   if (activeBtn) activeBtn.classList.remove("current");
   const activeSideMenu2 = document.querySelector(".active-side-2");
   const activeBtn2 = document.querySelector(".current-2");
   if (activeSideMenu2) activeSideMenu.classList.remove("active-side-2");
   if (activeBtn) activeBtn2.classList.remove("current-2");
}

const isInViewPort = (el) => {
   const rect = el.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
};
