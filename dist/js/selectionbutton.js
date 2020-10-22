function generateCustomSelectionButton() {
  const selects = document.querySelectorAll('[data-role="select-theme"]');

  selects.forEach((e) => {
    const options = e.querySelectorAll("option");

    const buttonSelect = generateButtonContainer(e.className);
  });
}

function generateButtonContainer(className) {
  const buttonSelect = document.createElement("button");
  buttonSelect;

  buttonSelect.classList.add(className);
  const optionList = generateOptionList(optionList);
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
  li.innerText = optionItem.innerText;
  li.dataset.value = optionItem.value;
  return li;
}

generateCustomSelectionButton();
