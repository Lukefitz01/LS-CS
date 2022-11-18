//Q1
 let myarray2 = [-2,-1,0,1,2];

x = myarray2.length
//Q2

for(let i = 0; i<x; i++){
    document.write(myarray2[i])
    document.write("<br>")
}

//Q3
let temp = 0
for(let i = 0; i<x; i++){
    
    temp = myarray2[i] 
    if(temp < 0){
        document.write(temp)
    }
    document.write("<br>")
}


//Q4
let temp2 = 0 
for(let i = 0; i<x; i++){
    
    temp2 = temp2 + myarray2[i] 
    
}
document.write(temp2)

//Q5
let temp3 = myarray2[0]
let temp4 = myarray2[0]

for(let i = 0; i<x; i++){

    if (myarray2[i] > temp3) {
        temp3 = myarray2[i];
      } else if (myarray2[i] < temp4) {
        temp4 = myarray2[i];
      }
    

}
document.write(temp3,"<br>",temp4)

//Q6

let temp5 = myarray2[0]
let temp6 = myarray2[0]

for(let i = 0; i<x; i++){

    if (myarray2[i] > temp5) {
        temp5 = myarray2[i];
      } 
    
    

}
//document.write(temp5)

for(let i = 0; i<x; i++){

    if (myarray2[i] > temp6 && myarray2[i] < temp5) {
        temp6 = myarray2[i];
      } 
    
    

}
document.write(temp6)

//Q7
let temp7 = 0
let temp8 = 0
let temp9 = 0
let temp10 = 0
let newarray = []; 
let newarray2 = [];
let newarray3 = [];
let y = newarray.length;+ 1;
let c = newarray2.length + 1;
let v = newarray3.length + 1;
for(let i = 0; i<x; i++){
temp10 = myarray2[i]
    if (temp10 == 0 ) {
        
        temp7 = temp10
        console.log(temp7)
        for(let x = 0; x<y;x++) {
        newarray[x] = temp7
        }
        y = newarray.length + 1;
      } 
    else if(temp10 % 2 == 0){
       
        temp8 = temp10
        for(let z = 0; z<c; z++){
        newarray2[z] = temp8 
        }
        c = newarray2.length + 1;
     }
    else{
        
        temp9 = temp10 
        for(let a = 0; a<v ; a++){
        newarray3[a] = temp7 
        }
        v = newarray3.length + 1;
    }
    
   temp7 = 0
   temp8 = 0
   temp9 = 0
   temp10 = 0
    
}

console.log("There are",newarray2.length,"even elements in the array")
console.log("There are",newarray3.length,"odd elements in the array")




//Q8 
let newarray4 = []; 
let temp11 = 0

for(let i = 0; i<x; i++){

newarray4[i] = myarray2[i]
    
}
let xx = newarray4.length 
for(let qq = 0; qq<xx; qq++){
    console.log(newarray4[qq])
    
}

//Q9

myarray2.push(3)
let xx = myarray2.length
for(let qq = 0; qq<xx; qq++){
    console.log(myarray2[qq])
    
}

//Q10

myarray2.pop();
let xy = myarray2.length
for(let qq = 0; qq<xy; qq++){
    console.log(myarray2[qq])
    
}