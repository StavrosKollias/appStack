function getTabItems() {
  const tabsContainer = document.querySelector(".tabs");
  const tabItems = tabsContainer.querySelectorAll(".tabs-item");
  return tabItems;
}

function getTabBlocks() {
  const tabsBlocksContainer = document.querySelector(".tabs-blocks");
  const tabBlocks = tabsBlocksContainer.querySelectorAll(".tabs-blocks-item");
  return tabBlocks;
}

function addClickHandlerToTabItems() {
  const tabItems = getTabItems();
  const tabBlocks = getTabBlocks();

  tabItems.forEach((item, i) => {
    item.addEventListener("click", (event) => {
      const activeTab = item.parentElement.querySelector(".active");
      activeTab.classList.remove("active");
      const activeTabBlock = item.parentElement.nextElementSibling.querySelector(
        ".active"
      );
      activeTabBlock.classList.remove("active");
      tabBlocks[i].classList.add("active");
      item.classList.add("active");
    });
  });
}
addClickHandlerToTabItems();
