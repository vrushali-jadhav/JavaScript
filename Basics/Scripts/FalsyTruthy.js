/********************************
 * Falsy values : null, 0, undefined, NaN, ''
 * Thruthy values : anything that isn't falsy
 */

 var age = 0;
 var height = 0;

 if(age || age === 0)
 {
     console.log("We are here because 2nd part of the condition turned out to be true")
 }
 else
    console.log("We weren't supposed to reach here!")

if(height)
    console.log("We weren't supposed to reach here!")
else
    console.log("We are here because value of var 'height' is a 'falsy' value")

