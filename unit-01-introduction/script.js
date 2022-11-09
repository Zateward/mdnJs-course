// the function 'createParagraph' will create a paragraph and append it on the bottom of the html document body

function createParagraph(){
	const paragraph = document.createElement('h2');
	paragraph.textContent = 'You clicked the button!!!';
	document.body.append(paragraph);
}

/*
	1. Will select all the buttons of the html.
	2. Will loop on the const button and when the browser detects a click on a button, will
	create a paragraph whit the function defined above.
*/

const button = document.querySelectorAll('button');

for (const i of button){
	i.addEventListener('click', createParagraph);
}