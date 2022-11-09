const btn = document.querySelector('button');
const txt = document.querySelector('p');

function updateBtn() {
	if (btn.textContent === 'Start Machine'){
		btn.textContent = 'Stop Machine';
		txt.textContent = 'The machine has started!';
	}
	else{
		btn.textContent = 'Start Machine';
		txt.textContent = 'The machine has stopped!'
	}
}

btn.addEventListener('click', updateBtn)