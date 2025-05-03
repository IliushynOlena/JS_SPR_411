// alert("Hello in Java Script")
// console.log("Hello in JS from Console")

//------------------ variable ----------------
//number
let empty;//undefined
let nullObject = null;
let number = 10.33;
let email = "helen@gmail.com"
let flag = true;
console.log(number);
console.log(typeof(number));
console.log(`Number = ${number}, type : ${typeof(number)}`);
number = 33;
console.log(`Number = ${number}, type : ${typeof(number)}`);
console.log(`Email = ${email}, type : ${typeof(email)}`);
console.log(`Flag = ${flag}, type : ${typeof(flag)}`);
console.log(`empty = ${empty}, type : ${typeof(empty)}`);
console.log(`nullObject = ${flag}, nullObject : ${typeof(nullObject)}`);

number = "hello";
email = false;
console.log(`Number = ${number}, type : ${typeof(number)}`);
console.log(`Email = ${email}, type : ${typeof(email)}`);

let summa= function(a,b){console.log(`${a} + ${b} = ${a+b}`)}
console.log(`summa = ${summa}, type : ${typeof(summa)}`);
summa(5,8);
//Arrays
let array = [1,2,3,'red',"green", true,[10,11,12],summa];
console.log(`array = ${array}, type : ${typeof(array)}`);
console.log(array[5])
console.log(array[6][0])

//---------- cycles ---------------
//let numbers = [33,5,7,8,99,36,45,12];
const numbers = [33,5,7,8,99,36,45,12];

for (let i = 0; i < numbers.length; i++) {
    const element = array[i];
    console.log(`[${i}] - ${numbers[i]}`)    
}

console.log("Value : " + 333 + "!!!!!")   
console.log("Value : " + 333 + 10 + "!!!!!")   
console.log("Value : " + (333 + 10) + "!!!!!")   
console.log(`Value : ${333+10} !!!!`)   

//forof - get all elements in array
for (const element of numbers) {
    console.log(element);
    
}
//forin - get all index of elements
for (const index in numbers) {    
     console.log(index);
}
console.log("---------------------------------");
for (const element of numbers) {
    console.log(element);
    
}
console.log("---------------------------------");
console.log(`Lenght array : ${numbers.length}`)
numbers[8] = 200;
numbers[17] = 300;
for (const element of numbers) {
    console.log(element);    
}
console.log(`Lenght array : ${numbers.length}`)
for (const index in numbers) {    
    console.log(index);
}

console.log("Some message");
console.warn("Some warning!!!");
console.error("Some error!!!");
// ---------------- conditions --------------
let message = (3>2) ?"bigger": "less";
if (5 > 4)
{
    console.log("True")
}
else{
    console.log("False")
}
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

function divide(a,b)
{
    if(b == 0){
        console.error("Can't divide by zero");return;
    }
    return a/b;
}
function Summa(a,b)
{
    return a+b;
}
//alert("Result = " + divide(45,0));

let numA = +prompt("Enter number A : ")
let numB = +prompt("Enter number B : ")
alert("Result = " + divide(numA,numB));
alert("Result = " + Summa(numA,numB));
