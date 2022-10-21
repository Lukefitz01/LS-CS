// Q1
/*
let q1 = Number(prompt("Q1:Enter a number"));
let count1 =0

while(q1 > 0 ){

  q1 = Math.floor(q1 /10);
  count1++;
}
console.log(count1)

// Q2


let q21 = Number(prompt("Q2:Enter a number"));
let q22 = q21
let q23 = q21
let count21 =0
while(q22 > 0 ){

  q22 = Math.floor(q22 /10);
  count21++;
}
console.log(count21)

let i = 0


let temp = 0

let temp2 = 0
while(i < count21 ){
 temp = temp + q21 % 10;
 q21 = Math.floor(q21 / 10);

 if(i == count21 - 2 ){
   temp2 = temp
 }
 
 i++
}
console.log(temp - temp2);
console.log(q23 % 10);
*/

//Q3

let q21 = Number(prompt("Q3:Enter a number"));
let i = 0

while(q21 > 0 ){
 lastdigit = q21 % 10;
 console.log(lastdigit);

 switch(lastdigit){

    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
        break;
    case 8:
        console.log("eight");
        break;
    case 9:
        console.log("nine");
        break;
    
 }
 q21 = Math.floor(q21 / 10);
 
 

}

