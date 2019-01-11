

var student = ["Vrushali", "Jadhav", 1991, 27, "SE"];

for(var i=0; i< student.length ; i++)
{
    if(typeof student[i] !== "string")
    continue;
    else
    console.log(student[i])
}

var country = ["India", "Delhi", "3rd wolrd"];
var j=0;

while(j<country.length)
{
    console.log(country[j]);
    j++;
}