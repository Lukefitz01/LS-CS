// 1 

let number1 = Number(prompt("Enter a number"));

number1 %= 2;

if(number1==0){
 console.log("You entered an even number")
}
else {
    console.log("You entered an odd number")
}

// 2

let number2 = Number(prompt("Enter a number"));
let number3 = Number(prompt("Enter another number"));

if(number2>number3){
    console.log(number2 ,"Is larger than", number3);
}
else if(number2<number3){
    console.log(number3 ,"Is larger than", number2); 
}
else{
    console.log(number2 ,"Is equal to", number3); 
}

// 3

let number4 = Number(prompt("Enter a number"));
let number5 = Number(prompt("Enter another number"));
let number6 = Number(prompt("Enter another number"));

if(number4>number5,number4>number6){
    console.log(number4,"Is the largest number")
}
else if(number5>number4,number5>number6){
    console.log(number5,"Is the largest number")
}
else{
    console.log(number6,"Is the largest number")
}

// 4

let side1 = Number(prompt("Enter one side of a triangle"));
let side2 = Number(prompt("Enter another side of the triangle"));
let side3 = Number(prompt("Enter the last side of the triangle "));

if(side1==side2,side1==side3,side2==side3){
 console.log("Your triangle is equilateral")
}
else if(side1!=side2,side1!=side3,side2!=side3){
    console.log("Your triangle is isosceles")
}
else{
    console.log("Your triangle is scalene")
}

//5