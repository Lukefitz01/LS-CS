// Q1
let a = 1
let b = 117

function q1(a , b)
{
    return a + b


}
console.log(q1(a,b))


// Q2


function q2( c , d, e )
{
    if (e == "+"){
        return c + d
    }
    else if(e == "-")
        return c - d
    else if(e == "*"){
        return c * d
    }
    else{
        return c / d

    }

    


}
console.log(q2(117 , 8 , "-" ))

//q3
let newString = ""


function q3(str,newString)
{
   
    for (i - 1; i >= 1 ; i--) {
        newString = newString + str[i - 1] 
        
    }
    
    if(newString == str){
        return "Yes"
    }
    else{
        return "No"
    }

}


let str = "abccba"
let i = str.length
console.log(q3(str,newString))

// Q4 

let str4 = "Athlone"
let ns = ""
let count = 0
let y = str4.length

function q4(str4, count , ns , y )
{console.log(ns)
   
    for (let i2 = 0; i2 < y ; i2++) {
         ns = str4[i2]
         if( ns == "a"){
            count = count + 1
    
         }
         else if(ns == "e"){
            count = count + 1
       
         }
         else if (ns == "i" ){
            count = count + 1
           
         }
         else if(ns == "o" ){
            count = count + 1
          
         }
         else if(ns == "u"){
            count = count + 1
           
         }
        
    

    }
    return count;
}

console.log(q4(str4, count, ns , y))