const btn = document.querySelector('button');

function greet() {
	const name = prompt('What is your name?');
	alert(`Hello ${name}, have a good day!!!`)
}

btn.addEventListener('click', greet);