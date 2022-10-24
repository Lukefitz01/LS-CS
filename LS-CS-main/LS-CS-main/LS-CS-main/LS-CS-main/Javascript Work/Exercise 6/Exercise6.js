 // Q1
 let count=1;
while(count<=10){
  console.log(count);
  count++; 
}

//Q2
let count2=2;
while(count2<=98){
 console.log(count2);
  count2++; 
  count2++;
}

//Q3

let num = Number(prompt("Q3:Enter a number"));
let num2 = Number(prompt("Q3:Enter a power"));
let result = 1

while (num2 != 0) {
    result = result * num;
    num2--;
}
console.log(result)


//Q4 

let q4 = Number(prompt("Q4:Enter a number"));
let one = 0
let star = "*"
let x = star
while (one != q4){
    one++
    console.log(star)
    star = star + x
   
}


// Q5


let q5 = Number(prompt("Q5:Enter a number"));
let count5 =0

while(q5 > 0 ){

  q5 = Math.floor(q5 /10)
  count5++;
}
console.log(count5)


//Q6
let q6  = Number(prompt("Q6:Enter a number"));
let temp = 0
while(q6 > 0){
 temp = temp + q6 % 10;
 q6 = Math.floor(q6 / 10);

}
console.log(temp)



