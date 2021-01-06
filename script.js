var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var theLIs = document.getElementsByTagName("li");
var removeButton = document.getElementsByClassName("remove");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var newRemoveButton = document.createElement("button");
	newRemoveButton.className = "remove";
	newRemoveButton.innerText = "Remove";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	ul.appendChild(newRemoveButton);
	input.value = "";
	removeListener();
	toggleListener();	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function toggleListener(){
	for (let i = 0; i < theLIs.length; i++) {
		const element = theLIs[i];
		element.addEventListener("click",doneToggle); 
	}
}

function doneToggle() {
	this.classList.toggle("done");
}

function removeListener () {
	for (let index = 0; index < removeButton.length; index++) {
		const element = removeButton[index];
		element.addEventListener("click",removeTheItem); 
	}
}

function removeTheItem() {
	this.previousElementSibling.remove();
	this.remove();
}

toggleListener();
removeListener();