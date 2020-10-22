function generateCustomSelectionButton() {
  const selects = document.querySelectorAll('[data-role="select-theme"]');

  selects.forEach((e, i) => {
    const options = e.querySelectorAll("option");
    const selectButton = generateButtonContainer(options);
    selectButton.classList.add(e.className);
    selectButton.classList.add(e.dataset.role);
    selectButton.id = e.id;
    selectButton.dataset.role = e.dataset.role;
    selectButton.dataset.state = "false";
    selectButton.addEventListener("click", function (event) {
      handleClickSelectButton(event);
    });
    selects[i].parentNode.insertBefore(selectButton, selects[i]);
  });
}

function generateButtonContainer(optionsList) {
  const selectButton = document.createElement("button");
  const icon = document.createElement("i");
  icon.className = "fas fas fa-angle-down";
  const buttonLabel = document.createElement("span");

  const list = generateOptionList(optionsList);
  buttonLabel.innerText = "Select";
  selectButton.appendChild(buttonLabel);
  selectButton.appendChild(list);
  selectButton.appendChild(icon);
  return selectButton;
}

function generateOptionList(optionList) {
  const list = document.createElement("ul");
  optionList.forEach((e) => {
    var li = generateListItem(e);
    list.appendChild(li);
  });
  return list;
}

function generateListItem(optionItem) {
  const li = document.createElement("li");
  li.className = "select-theme-options";
  li.innerText = optionItem.innerText;
  li.dataset.value = optionItem.value;
  li.addEventListener("click", (event) => hanldeClickSelectOption(event));
  return li;
}

function handleClickSelectButton(event) {
  event.stopPropagation();

  const selectButton = event.target.closest(".select-theme");
  const list = selectButton.querySelector("ul");

  const otherActivebuttonList = document.querySelector(".active-options-list");
  if (otherActivebuttonList && otherActivebuttonList != list) {
    const othebutton = otherActivebuttonList.closest(".select-theme");
    othebutton.dataset.state = "false";
    otherActivebuttonList.classList.remove("active-options-list");
  }

  if (selectButton.dataset.state == "false") {
    list.classList.add("active-options-list");
    selectButton.dataset.state = "true";
  } else {
    list.classList.remove("active-options-list");
    selectButton.dataset.state = "false";
  }
}

function hanldeClickSelectOption(event) {
  event.stopPropagation();
  const li = event.target.closest(".select-theme-options");
  const list = li.closest(".active-options-list");
  const selectButton = event.target.closest(".select-theme");
  const select = selectButton.nextElementSibling;
  select.selectedIndex = li.dataset.value;
  const selectButtonlabel = selectButton.querySelector("span");
  selectButtonlabel.innerText = li.innerText;
  selectButton.dataset.state = "false";
  list.classList.remove("active-options-list");
  const activeOption = list.querySelector(".selected-option");
  if (activeOption) activeOption.classList.remove("selected-option");
  li.classList.add("selected-option");
}

generateCustomSelectionButton();

window.addEventListener("click", (event) => {
  event.stopPropagation();
  const activeSelect = document.querySelector(".active-options-list");
  closeActiveSelectMenuWindowClick(activeSelect);
});

window.addEventListener("keydown", (event) => {
  event.stopPropagation();
  if (event.code == 27 || event.key == "Escape") {
    const activeSelect = document.querySelector(".active-options-list");
    closeActiveSelectMenuWindowClick(activeSelect);
  }
});

function closeActiveSelectMenuWindowClick(activeSelect) {
  if (activeSelect == null) return;
  activeSelect.classList.remove("active-options-list");
  const button = activeSelect.closest(".select-theme");
  button.dataset.state = "false";
}
