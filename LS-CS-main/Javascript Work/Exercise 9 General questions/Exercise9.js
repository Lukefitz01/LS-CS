//Question 1
/*
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    temp = parseInt(temp / 10);
}

if (sum == number) {
    console.log(number,"is an Armstrong number");
}
else {
    console.log(number,"is not an Armstrong number.");
}
*/

// Question 2

let n11 = 1
let q2 = Number(prompt("Q2:Enter a number"));
let temp2 = 0
let temp22 = 0
let temp23 = 0
let n1 = 0
let n2 = 0
let n3 = 0
let n4 = 0
let n5 = 0
let n6 = 0
let n7 = 0
let n8 = 0
let n9 = 0

while(q2 > 0){
 temp2 =  q2 % 10;
 temp22 = temp2
 temp23 = temp2
 for(let i = 0;i<temp23;){
  
    n11 = n11 * temp23
    if(temp22 == 1){
     n1 = n11
    }
    else if(temp22 == 2){
     n2 = n11
    }
    else if(temp22 == 3){
     n3 = n11
    }
    else if(temp22 == 4){
     n4 = n11
    }
    else if(temp22 == 5){
     n5 = n11
    }
    else if(temp22 == 6){
     n6 = n11
    }
    else if(temp22 == 7){
     n7 = n11
    }
    else if(temp22 == 8){
     n8 = n11
    }
    else if(temp22 == 9){
     n9 = n11
    }
    temp23--
    
 }

 q2 = Math.floor(q2 / 10);
 console.log("a",q2)
 

}
console.log(q2)
/*
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)
console.log(n8)
console.log(n9)
*/
