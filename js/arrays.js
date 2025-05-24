let obj = new Object();

var array = new Array();
array[0] = 100;
array[1] = 200;
array[2] = 300;

//var array = new Array(5);//leght = 5
var array = new Array(6.5,2.2,5,7,9,12,3.33,5.24);
console.log(`Lenght : ${array.length}`)

for (let i = 0; i < array.length; i++) {
    console.log(`Element [${i}] - ${array[i]}`)    
}

var array = [];//empty array
var array = [3,-5,-7,4,6,9,15,23,3.33];//lenght = 9
console.log(`Lenght : ${array.length}`)

console.log(array[0]);
array[0] = 100;
console.log(array[0]);
console.log("Before : " + array);
array[5] = 111;
console.log("After : " + array);

array[20] = 55;
console.log("After : " + array);
console.log(`Lenght : ${array.length}`)
for (let i = 0; i < array.length; i++) {
    console.log(`Element [${i}] - ${array[i]}`)    
}

array.forEach((elem, index)=>{
    console.log(`Element [${index}] = ${elem}`)    
});
/////////---------------- Array methods----------------
var array = [3,23,-5,-7,4,6,9,15,8,2,4,6,23,3.33];
console.log("Original array : ", array);

//add element to the end
array.push(777);
console.log("Array : ", array);

//delete elemnt in the end
array.pop();
console.log("Array : ", array);

//delete first element
array.shift()
console.log("Array : ", array);

///add element to the start
array.unshift(555);
console.log("Array : ", array);

console.log("Index of fist element 9 : ", array.indexOf(9));
console.log("Index of fist element 9 : ", array.indexOf(999));//-1 - element not found
console.log("Index of fist element 9 : ", array.lastIndexOf(23));//-1 - element not found

console.log("Found : ", array.find((elem)=> elem < 0));

array.sort();
console.log("Sorted array : ", array);

array.sort((a,b)=>a-b);
console.log("Sorted array : ", array);

array.splice(2,3);
console.log("Array : ", array);

const copy = array.slice(2,array.length-1)
console.log("Array copy: ", copy);

const filtered = array.filter((el)=>el%2==0)
console.log("Array filtered: ", filtered);

const colors = ['red','green','blue','yellow'];
const str = colors.join(" - ");
console.log("Str after join : " ,str)

console.log("Str after split : ", str.split(' - '))
console.log("Str after split : ", str.split(' - ').length)
