const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/*Declaring the array of image filenames*/
let fileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
fileNames = fileNames.map(i => ('images/' + i)); // inserting the directory location where the pics are

/*Declaring the alternative text for each image file*/
const altText = {'txt1': 'Description: Close-up of a couple of green eyes.',
'txt2': 'Description: Some kind of erosion on a rock.',
'txt3': 'Description: Close-up of a bunch of purple flowers.',
'txt4': 'Description: A very anciet rock painting.',
'txt5': 'Description: A butterfly standing on a green leave.'};

/*Looping through images*/

function altIndex() { // here i'm creating a function to call the alternative text for each image
	altLap = altLap.toString();
	index = 'txt' + altLap;
	// console.log(index);

	return index.toString();
}

function disImage(e) {
	displayedImage.setAttribute('src', e.target.src);
	displayedImage.setAttribute('alt', e.target.alt);
}

let altLap = 1;

for (image of fileNames){
	const newImage = document.createElement('img');
	newImage.setAttribute('src', image);
	newImage.setAttribute('alt', altText[altIndex()]);
	thumbBar.appendChild(newImage);

	newImage.addEventListener('click', disImage);
	// console.log(newImage.alt);

	altLap++;
}


/*Wiring up the Darken/Lighten button*/

overlay.setAttribute('onclick', darkBtn)

function darkBtn(e) {
	if (btn.textContent === 'Darken') {
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
		btn.textContent = 'Lighten';
	}
	else {
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
		btn.textContent = 'Darken';
	}
}


btn.addEventListener('click', darkBtn);