function orderedList(array) {
  let items = array.map((el) => isNum(el)).join(" ");
  return `<ol>${items}</ol>`;
}

function isNum(el) {
  let res = `<li class="item">${el}</li>`;
  if (typeof el === "number") {
    res = `<li class="item item_number">${el}</li>`;
  }
  return res;
}

const bodyElement = document.querySelector("body");
bodyElement.innerHTML = orderedList(["Hello", 300, "Java", "Nodejs", 100]);
orderedList(bodyElement.innerHTML);
