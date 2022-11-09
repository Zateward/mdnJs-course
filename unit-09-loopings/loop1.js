const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for (const items of myArray){
    listItem = document.createElement('li');
    listItem.textContent += items;
    list.appendChild(listItem);
}

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(list);