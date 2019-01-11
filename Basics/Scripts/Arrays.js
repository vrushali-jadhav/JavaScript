
// can also be simply created as var arrayOfNames = ["Vrushali", "Utkarsha", "Medha"];
var arrayOfNames = new Array("Vrushali", "Utkarsha", "Medha");

//lets get the length of the array and print it on console
var length = arrayOfNames.length;
console.log("Length of the array 'arrayOfNames' is: " + length);

//now lets try to add an elem on the index that is greater than the lenght of the index
arrayOfNames[5] = "Rohan";
//IMPORTANT: Notice that this is permitted and the value on index 4 is just replaced with an empty value
console.log(arrayOfNames);

//array in JS can have variables of different datatypes
var person = ["Vrushali", "Software Engineer", 27, "Female", false];
console.log("Array is: " + person);

//Add an element at the end 
person.push(1991);
console.log("After push");
console.log("Array is: " + person);

//Add an element in the front
person.unshift("Miss")
console.log("After unshift");
console.log("Array is: " + person);

//remove an element from the front 
var val = person.shift()
console.log("After shift");
console.log("Removed value is: " + val)
console.log("Array is: " + person);

//remove an element from the end
val = person.pop()
console.log("After pop");
console.log("Removed value is: " + val)
console.log("Array is: " + person);

var isSheAPainter = person.indexOf("Painter") != -1 ? "Yes she is a painter" : "No she is not a painter"
console.log(isSheAPainter); 


