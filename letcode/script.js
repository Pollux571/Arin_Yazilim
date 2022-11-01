let form = document.querySelector(".main_form");
let input = form.querySelector(".main_input");
let inputBtn = form.querySelector(".input_btn");
let list = document.querySelector(".list");
let itemCheckBox = document.createElement("input");

function checked() {
  let itemCheckBox = document.createElement("input");
  if (itemCheckBox.checked) {
    itemText = "line-thgrouh";
  }
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = input.value;

  // ! create element
  let item = document.createElement("li");
  let checkBox = document.createElement("div");
  let itemCheckBox = document.createElement("input");
  let itemText = document.createElement("p");
  let buttonBox = document.createElement("div");
  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");

  // ? classlist add
  item.classList.add(
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "w-50",
    "mx-auto",
    "mb-2",
    "text-bg-success",
    "p-2",
    "list_item"
  );
  checkBox.classList.add("d-flex", "list_checkbox", "p-2");
  itemText.classList.add("m-0", "ms-2", "list-text");
  itemCheckBox.classList.add("list-input");
  itemCheckBox.type = "checkbox";

  editBtn.classList.add("me-3");
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";

  itemText.textContent = inputValue;
  input.value = "";

  // todo: Appends
  checkBox.append(itemCheckBox, itemText);
  buttonBox.append(editBtn, deleteBtn);
  item.append(checkBox, buttonBox);
  list.appendChild(item);
});
