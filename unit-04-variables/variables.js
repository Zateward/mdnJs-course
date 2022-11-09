const btn1 = document.querySelector('#btn-1');
const heading1 = document.querySelector('#heading-1');

const btn2 = document.querySelector('#btn-2');
const heading2 = document.querySelector('#heading-2');

let myName = 'Luis Eduardo Noguera Trejo'
let myBirthday = '03/29/2003'

// creating a variable that contains an array...
let likedThings = [7, 'programming', 'videogames', 5+5]

// creating a variable that have objects...
let personalInfo = {name:'Luis Eduardo', last_name:'Noguera Trejo', age:19, location:'Mexico City', ocupation:'Junior Developer'}

btn1.onclick = () => {
	let name = prompt('What is your name???');
	alert(`Hello ${name}, nice to see u!`);
	heading1.textContent = `Welcome, ${name}!`;
	
}

btn2.onclick = () => {
	alert(`Hello ${prompt('What is your name?')}, nice to see u!`);
	heading2.textContent = (`Welcome, ${prompt('What is your name?')}!`)

}