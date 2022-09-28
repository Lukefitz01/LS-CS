// 1 

let number1 = Number(prompt("Q1: Enter a number"));

number1 %= 2;

if(number1==0){
 console.log("You entered an even number")
}
else {
    console.log("You entered an odd number")
}

// 2

let number2 = Number(prompt("Q2: Enter a number"));
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

let number4 = Number(prompt("Q3: Enter a number"));
let number5 = Number(prompt("Enter another number"));
let number6 = Number(prompt("Enter another number"));

if(number4>number5&&number4>number6){
    console.log(number4,"Is the largest number")
}
else if(number5>number4&&number5>number6){
    console.log(number5,"Is the largest number")
}
else{
    console.log(number6,"Is the largest number")
}

// 4

let side1 = Number(prompt("Q4: Enter one side of a triangle"));
let side2 = Number(prompt("Enter another side of the triangle"));
let side3 = Number(prompt("Enter the last side of the triangle "));

if(side1==side2 && side1==side3 && side2==side3){
 console.log("Your triangle is equilateral")
}
else if(side1!=side2&&side1!=side3&&side2!=side3){
    console.log("Your triangle is isosceles")
}
else{
    console.log("Your triangle is scalene")
}

//5 

let digit51 = Number(prompt("Q5:Enter a number"));

let digit52 = Number(prompt("Enter another number"));

let useri = prompt("Please enter add,subtract,multiply,divide or modulus.")

if(useri=="add"){
    let if1 = digit51+digit52
    console.log("Your numbers added are", if1 )
   }
   else if(useri=="subtract"){
    let if2 = digit51-digit52
    console.log("Your numbers subtracted are",if2)
   }
   else if(useri=="multiply"){
    let if3 = digit51*digit52
    console.log("Your numbers multiplied are",if3)
}
   else if(useri=="divide"){
    let if4 = digit51/digit52
    console.log("Your numbers divided are",if4)
    }
    else if(useri=="modulus"){
    let if5 = digit51%digit52
    console.log("Your numbers modulus is",if5)
    }
   else{
       console.log(useri,"Is not a valid input")
   }
   