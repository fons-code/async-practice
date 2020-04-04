//Sumar utilizando callbacks
function sum(num1,num2){
    return num1+num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2)
}

console.log(calc(5,6,sum));

//imprimir por consola fecha actual usando callbacks
function getDate(callback){
    let myDate = new Date;
    setTimeout(function(){
        callback(myDate)
    }, 3000)
}
function printDate(date){
    console.log(date);
}

getDate(printDate);
