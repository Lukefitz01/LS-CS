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
*/


//Q4


/*
let size = Number(prompt("Q4:Enter a number for square"));
document.write("<pre>")
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i == 0 || i == size - 1 || j == 0 || j == size - 1 || i == j || j == size - i - 1) {
            document.write("* ");
        } else {
            document.write("  ");
        }
    }
    document.write("<br />");
}
document.write("</pre>")
*/

// Q5

let row4 = Number(prompt("Q5:Enter a number for rhombus rows"));
document.write("<pre>")

let row44 = row4 * 2
let end = row44 - 1
let start = row4 - 2
for(let i = 0; i < row4; i++){

    for (let j = 0; j < row44; ) {
        if( j > start && j < end){
            document.write("* ")
            
            //console.log(start,end)
            
        }
        else{
            document.write("  ")
            console.log("bbb")
        }
    //console.log(j)
    j++
      
      
    }
    document.write("<br />");
    //start = row4
    //end = row44
    //console.log("i",start,end)
    start = start - 1
    end = end - 1
}


document.write("</pre>")

