// Q1

let num = Number(prompt("Q1:Enter a number"));
let n2 = Math.ceil(num / 2)
for(let i = 1;i<n2 + 1;n2++ ){
    
   
    console.log(i);
    i = i + 2
    
    
}

//Q2

let num2 = Number(prompt("Q2:Enter a number"));
let n3 = 1
for(let i = 1;i<num2;){
  
   n3 = n3 * num2 
   
   num2--
}
console.log(n3)

// Q3


let number = 75897589

for(let i = 1;i<5;i++){
let guess =  Number(prompt("Q3:Enter an 8 digit number"));

if(guess == number){
    console.log("That is correct")
    break;
    
}
else{
    console.log("That is incorrect")
}

}


//Q4

let userinput =  Number(prompt("Q4: Enter a number"));
let n4 = 0
let o = userinput +1
for(let i = 1;i < o;i++){

n4 = n4 + i
    if(userinput < 1){
        console.log("Invalid Input")
        break;
    }
}

console.log(n4)