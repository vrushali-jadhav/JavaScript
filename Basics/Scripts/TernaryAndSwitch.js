FName = "Vrushali";
age = 27;

//ternary operator

var drink = age >= 18 ? "Beer!" : "Juice"

console.log("What kind of drink can "+FName+" have?: " + drink)


//switch cases

var profession = "Programmer"

switch(profession)
{
    case "Teacher":
    console.log("Do kids ever bug you?");
    break;

    case "Software Engineer":
    case "Programmer":
    console.log("Man do you code all day?!");
    break;

    case "Politician":
    console.log("I have to be careful of what I say");
    break;

    default:
    console.log("I have no comments!");
}