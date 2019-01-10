/* Variable mutation and type coercion 
In JavaScript, primitive values such as numbers, strings and booleans are always immutable. 
However, data structures like objects and arrays are not.
*/

var FName = "Vrushali";
var LName = "Jadhav";
var age = 27;

console.log("Students name and age is: " + FName + " " + LName + "," + age);

alert('Displaying student\'s information');

var courseName = prompt("Enter the course taken by " + FName + ": ");

console.log("Course taken: "+ courseName);

//Over writing the accepted value for Course with course number (digits) assuming course name (string) was supplied

courseName = 2788;

console.log("Course number taken: "+ courseName);
