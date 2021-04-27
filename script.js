'use strict';
let display = document.querySelector('.display');
let keys = document.querySelectorAll('.key');
let clear = document.querySelector('.clear');
let spaceBtn = document.querySelector('.key_space');

clear.onclick = function () {
	display.textContent = '';
}

for (let key of keys) {
	key.onclick = function () {
		display.textContent += key.textContent;
		}
}

spaceBtn.onclick = function () {
	display.textContent += ' ';
}
