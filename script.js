var obj ={
    name :"ranjth",
    mail :"ranjith@mail.com"
}

var modified = obj;

modified.name = "ranjithkumar";

console.log(modified);
console.log(obj);


//deep copy

var objects = {
    mame : "ranjith",
    gmail :" ranjith17@mail.com"

}


var obJ =  JSON.parse(JSON.stringify(objects));
obJ.mame = "ranjithkumar R"

console.log(obJ);
console.log(objects);




