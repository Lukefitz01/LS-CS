//Q1 Square

let L = Number(prompt("Enter a q1 number"));

let l1 = L * L
let l2 = L * 4 

console.log("The area of the square is", l1)
console.log("The perimiter of the square is", l2)

//Q2 Rectangle

let LR = Number(prompt("Enter a length q2 number"));
let WR = Number(prompt("Enter the width q2 number"));

let LR1 = LR * WR
let LR2 = 2*LR + 2*WR

console.log("The area of the rectangle is", LR1)
console.log("The perimeter of the rectangle is", LR2)

//Q3 Interest
let P = Number(prompt("Enter a q3 principal number"));
let N = Number(prompt("Enter a q3 years number"));
let R = Number(prompt("Enter a q3 interest decimal number"));

let SI = P * N * R

console.log("Euro",SI,"is the simple interest")