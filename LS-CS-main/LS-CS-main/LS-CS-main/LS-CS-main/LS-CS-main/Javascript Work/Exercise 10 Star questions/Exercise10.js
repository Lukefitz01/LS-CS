// Q1
/*
let row1 = Number(prompt("Q1:Enter a number for rows"));



for(let j= 0; j<row1; j++){
    for (let k = 0; k<row1; k++){
    document.write("*" );
    }
    document.write("<br />");

}
*/
// Q2
/*
let row2 = Number(prompt("Q2:Enter a number for rows"));
let column2 =  Number(prompt("Q2:Enter a number for columns"));

for(let q= 0; q<row2; q++){
    for (let w = 0; w<column2; w+++){
    document.write("*" );
    }
    document.write("<br />");

}
*/
// Q3 

let row3 = Number(prompt("Q3:Enter a number for rows"));
let column3 =  Number(prompt("Q3:Enter a number for columns"));
let r = 0
document.write("<pre>")
for(let e = 0; e<row3; e++){
    if(e == 0 || e == row3 - 1){
        for (let o = 0; o<column3; o++){
            document.write("*" );
            }
            
    }
        
        
    
    else{
        for ( r = 0; r<column3; ){
    
            if(r == 0 || r == column3 - 1){
                document.write("*");
                
            }
                document.write(" ");
            r++
            }


        
    }
    

    document.write("<br />");

}
document.write("</pre>")

//Q4

let row4 = Number(prompt("Q3:Enter a number for rows"));
let column4 =  Number(prompt("Q3:Enter a number for columns"));
let a = 0

document.write("<pre>")
for(let e1 = 0; e1<row4; e++){
    if(e1 == 0 || e1 == row4 - 1){
        for (let o1 = 0; o1<column4; o1++){
            document.write("*" );
            }
            
    }
        
        
    
    else{
        for ( a = 0; a<column4; ){
    
            if(a == 0 || q == column4 - 1){
                document.write("*");
                
            }
                document.write(" ");
            a++
            }


        
    }
    

    document.write("<br />");

}
document.write("</pre>")

//q3 copied