var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
var li = document.querySelector("li");

// Crea un botón nuevo
var newButton = function () {
	var addButton = document.createElement("button");
	var addButtonText = document.createTextNode("Delete");
	addButton.appendChild(addButtonText);
	return addButton;
};

// Agrega el botón al sitio seleccionado
function addingDeleteButton() {
	for (i = 0; i < listItem.length; i++) {
		listItem[i].appendChild(newButton());
	};
};
addingDeleteButton();

// Le da funcionalidad al botón
function functionalDeleteButton() {
	ul.addEventListener("click", function (e) {
		if(e.target.tagName === "BUTTON") {
			e.target.parentElement.remove();
		};
	})
};

functionalDeleteButton();

// Funciones para crear nuevo elemento en la lista
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(e) {
	if (inputLength() > 0) {
		createListElement();
		document.querySelector("li:last-child").appendChild(newButton());
	};
	listItem = document.querySelectorAll("li");
	e.preventDefault();
}

button.addEventListener("click", addListAfterClick);

function toggleDoneTolist() {
	ul.addEventListener("click", function (e) {
		if(e.target.tagName==="LI") {
			e.target.classList.toggle("done");
		}
	});
};

ul.addEventListener('click', function (e) {
	if (ul.getElementsByTagName("li").length > 0) {
		console.log(e.target)
	}
}
);

toggleDoneTolist();

