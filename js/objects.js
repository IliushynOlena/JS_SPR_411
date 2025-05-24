console.log(obj);

var obj = new Object();
var obj = {};
//add new property
obj.name = "Olena";
obj.name = "Ivan";
obj.number = 1020;
obj.address = "Soborna 16";
console.log("Address : " + obj.address);
//delete property
delete obj.address;
console.log("Address : " + obj.address);

//console.log(product);
let product = {
    name : "Motorola",
    price : 3500,
    memory : 64,
    applications: ["Facobook","Opera","Viber"],
    owner :{
        name: "Volodia",
        surname:"Super"
    }
}
console.log(`Owner full name : ${product.owner.name} ${product.owner.surname}`)

var poductNew = {}
//set 
poductNew["name"] = "Ball";
poductNew["size"] = 20.5;
poductNew["price"] = 550;
poductNew["type"] = "mini-football";

poductNew["name"] = "Football";
//get
console.log(poductNew["name"] );
console.log(poductNew["size"] );
console.log(poductNew["price"] );
console.log(poductNew["type"] );

var student = {};
student.name = "Vova";
student.age = 15;
student.AverageMark = 8.8;

student["Average Mark"] = 7.8;
console.log(student.AverageMark);
console.log(student["Average Mark"]);

delete student.AverageMark;
console.log(student.AverageMark);

if( 'address' in student)
    console.log(student.address)
else
    console.log("Property not found !!!")

//view all properties
for(var property in student)
    console.log(property + " : " + student[property] )

var car = {
    model : "Nissan",
    power : 250,
    color : "Dark blue",
    year : 2020
};

var res = "\t Car info : \n";
for(var property in car)
     res += property + " : " + car[property] + "\n";

//alert(res);

var person ={
    firstName : "Inna",
    lastName : "Oliunuk",
    birthdate : 2000,
    address : {
        street : "Kyivska 54",
        city :"Rivne",
        building: 22
    },
    cars: ["Nissan","Volvo","Leaf"]
}

function addcarToPerson(person, newCar)
{
    person.cars.push(newCar);
}

function showAllCars(person)
{
    console.log(person.cars)
}
//let nameCar = prompt("Enter car model");

//addcarToPerson(person, nameCar);
//showAllCars(person)
//console.log(name)

var player = {
    login : "super_user123",
    password : "qwerty",
    email:"super_user123@gnail.com",
    score: 0,
    print : function(){
        console.log(`User : ${this.login} with score : ${this.score}`)
    },
    increaseScore(value)
    {
        this.score += value;
    }
}

player.print();
player.increaseScore(20);
player.print();