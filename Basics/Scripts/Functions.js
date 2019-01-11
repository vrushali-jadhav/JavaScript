
//This is a function expression 
//an expression always produces a result 
var operation = function(op,x,y){
    if(op === "add"){
        z = add(x,y);
        console.log("Addition of the numbers is: " + z);
    }
}

//This is a function definition
//IMPORTANT: Notice that the function doesn't have a return type
function add(x,y)
{
    return x+y
}

operation("add",2,3);
