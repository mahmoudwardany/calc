let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operto = document.getElementById("opa");
let total = document.getElementById("total");
let btn = document.getElementById('btn')
let myArray = ['green','#fff'];


function myresult (e){
    e.preventDefault()
if(operto.value == '+' ){
total.innerText=(Number(num1.value) + Number(num2.value));
 total.style=` background: ${myArray[0]} ; color : ${myArray[1]}`
}
else if(operto.value == '-' ){
total.innerText=(Number(num1.value) - Number(num2.value));
 total.style=   ` background: ${myArray[0]} ; color : ${myArray[1]}`
}
else if (operto.value == '*' ){
total.innerText=(Number(num1.value) * Number(num2.value));
 total.style=` background: ${myArray[0]} ; color : ${myArray[1]}`
}
else if (operto.value == '/' ){
total.innerText=(Number(num1.value) / Number(num2.value));
total.style= ` background: ${myArray[0]} ; color : ${myArray[1]}`
}
else if (operto.value == '%' ){
total.innerText=(Number(num1.value) % Number(num2.value));
total.style=` background: ${myArray[0]} ; color : ${myArray[1]}`
}
}
btn.onclick = myresult

