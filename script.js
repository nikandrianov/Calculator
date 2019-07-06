let input1 = document.getElementById('num1');
let input2 = document.getElementById('num2');

let operationButton = document.getElementsByClassName('operation-button');

function onOperationButtonClick (e) {
	let clickElement = e.currentTarget;
	let operation = clickElement.innerHTML;
	makeOperations(operation);
}

for (let i = 0; i < operationButton.length; i++) {
	operationButton[i].addEventListener('click', onOperationButtonClick);
}

function onButtonClickIn_1 () {
	let button1 = prompt('Введите значение 1', '');
	document.getElementById('num1').value = button1;
}

function onButtonClickIn_2 () {
	let button2 = prompt('Введите значение 2', '');
	document.getElementById('num2').value = button2;
}

function makeOperations (e) {
	let number1 = Number(input1.value);
	let number2 = Number(input2.value);
	let result = 0;
	if (e === '+') {
		result = number1 + number2;
	} else if (e === '-') {
		result = number1 - number2;
	} else if (e === '*') {
		result = number1 * number2;
	} else if (e === '/') {
		result = number1 / number2;
	} else {
		alert("Операция не известна");
	}
	document.getElementById('result').innerHTML= "<h3>Результат: </h3>" + result;
}