const link = document.querySelector('a');

link.textContent = 'Mozzilla Developer Network';
link.href = 'https://developer.mozilla.org'

const section = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'Hope you enjoyed the ride!';
section.appendChild(para);

const text = document.createTextNode(' ~~~ The premier source for the web development knowledge.');

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

section.appendChild(linkPara);

section.removeChild(linkPara); // removing the child "linkPara" of section.

/* Also you can manipulate CSS on Javascript with the DOM API */

// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

para.setAttribute('class', 'highlight');

