let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

myArray.pop();

myArray.push('Zangief');
myArray.push('Ibuki');

myArray.forEach(function(element, index) {
  let newElement = `${ element } (${index})`;
  myArray[index] = newElement;
});

let myString = myArray.join(' - ');

console.log(myString)