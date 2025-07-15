var name=prompt(" what is your name ")
//2 capitalize the first letter of thier name
var firstchar=name.slice(0,1);
var upperCaseFirstChar=firstchar.toUpperCase();
var rest0fName=name.slice(1,name.length);
var capitalizedname =upperCaseFirstChar + rest0fName
alert(capitalizedname)