var tagNameInput = document.querySelector(".tagname");
var colorInput = document.querySelector(".color");
var textInput = document.querySelector(".text");
var parent = document.querySelector(".parent");
function creatElement() {
  var newElement = document.createElement(tagNameInput.value);
  newElement.innerHTML = textInput.value;
  newElement.style.color = colorInput.value;
  console.log(parent);
  console.log(newElement);
  parent.after(newElement);
}
