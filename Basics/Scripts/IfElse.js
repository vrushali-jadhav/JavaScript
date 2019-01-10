var isMarried = false;
var age = 18;
var FName = 'John';

if(isMarried)
{
   console.log(FName + " is married. Leave him alone!")
}
else if(!isMarried && age < 21)
{
    console.log("Nope! "+ FName + " is not married. But he is under 21!")
}
else
{
    console.log("Nope! "+ FName + " is not married. Try your luck!")
}
