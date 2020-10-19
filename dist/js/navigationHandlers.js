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
