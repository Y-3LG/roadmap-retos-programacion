//All Operators

/*Assignment
             Operators*/

//Binary Operator
let addition = 80 + 10;
let subtraction = 80 - 20;
console.log(addition + subtraction); //150

//Unary Operator
console.log(+'100'); //100
console.log(+100); //100
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0


/*Comparison 
            Operator*/

let operatingOne = 25;
let operatingTwo = 50;

//Equal 
console.log(25 == operatingOne); //true
console.log('25' == operatingOne); //true
console.log('25' == 25); //true
console.log(operatingOne == operatingTwo); //false

//Not equal 
console.log(operatingOne != operatingTwo); //true
console.log(operatingOne != operatingOne); //false
console.log('25' != operatingTwo); //true

//Strict equal 
console.log(operatingOne === 25); //true
console.log(operatingOne === '25'); //false

//Strict not equal
console.log(operatingOne !== 25); //false
console.log(operatingOne !== '25'); //true
console.log(operatingOne !== operatingTwo); //true

//Greater than 
console.log(operatingOne > operatingTwo); //false
console.log(operatingTwo > operatingOne); //true
console.log(150 > '100'); //true
console.log(150 > operatingTwo); //true




//Greater than or equal 

//Less than

//Less than or equal
