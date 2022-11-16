//Q1
 let myarray2 = [-2,-1,0,1,2];

x = myarray2.length
//Q2
/*
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
*/
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
let newarray = []; 
let newarray2 = [];
let newarray3 = [];
let y = newarray.length;
let c = newarray2.length;
let v = newarray3.length;
for(let i = 0; i<x; i++){

    if (myarray2[i] % 2 == 0) {
        temp7 = myarray2[i]
        for(let z = 0; z<y; z++)
        newarray[i] = temp7 
        
      } 
    else if(myarray2[i] == 0){
        temp7 = myarray2[i]
        newarray2[i]
    }
    else{

    }

}