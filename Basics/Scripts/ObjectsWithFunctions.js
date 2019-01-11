
//Objects in JS are key value pairs 

//Object literals
//IMPORTANT: properties should be assigned values uisng : and not = 

var person1 = {
    FName : "Vrushali",
    LName : "Jadhav",
    Profession : "Software Engineer",
    BirthYear : 1991,
    FamilyMembers : ["Dad","Mom","Younger sister"],
    //IMPORTANT: Age is not a defined property. But it can be added to the object using this. 
    CalculateAge : function(ThisYear)
    {
        this.Age = ThisYear - this.BirthYear;
    }
};

//new Object
var person2 = new Object();
person2["FName"] = "Utkarsha";
person2["BirthYear"] = 1995;
person2.Profession = "CA";

console.log("Name of the 1st person is: " + person1.FName);
console.log("Family members of the 1st person are: "+ person1["FamilyMembers"]);

console.log("Details of the 1st person are :");
console.log(person1);
console.log("Details of the 2nd person are :");
console.log(person2);

person1.CalculateAge(2019);
console.log("Person1 with 'Age' field added:");
console.log(person1);

