let userNumber = Number(prompt("What number do you want to go up to"));
let n = 0;
let number2 = userNumber * 2
let number = number2 - 1
document.write("<pre>");
for(let row = 0; row < number; row++){
//console.log("D")
    if(row < userNumber){

        n = n + 1
        //console.log("A")
    }
    else{
        n = n - 1
        //console.log("B")
    }
    
    for(let i = 0; i < number; i++){
        //console.log("c")
        if (row == i || i == number - row - 1) {

            document.write(n, " ");
            
        } else {
            for(let k = 0 ; k < row; k++){
                document.write(" ")
            }
            for(let j = row + 1 ; j < i ; j++){
                document.write(" ")
            }
            for(let h = i ; h < number; h++ ){
                document.write(" ")
            }

 
    }

    }

    document.write("<br/>");

}