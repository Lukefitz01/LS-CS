// Q5 

let str4 = "Athlone"
let ns = ""
let count = 0
let y = str4.length

function q5(str4, count , ns , y )
{
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

console.log(q5(str4, count, ns , y))

// Q6

let str = "AthLonE"
let newstr = ""
let count2 = 0
let yy = str4.length

function q6( str, count2 , newstr , yy )
{
   
    for (let i = 0; i < yy ; i++) {
        newstr = str[i]

         if( newstr == "A" || newstr == "B" || newstr == "C"|| newstr == "D"|| newstr == "E"|| newstr == "F"|| newstr == "G"|| newstr == "H"|| newstr == "I"|| newstr == "J"|| newstr == "K"|| newstr == "L"|| newstr == "M"|| newstr == "N"|| newstr == "O"|| newstr == "P"|| newstr == "Q"|| newstr == "R"|| newstr == "S"|| newstr == "T"|| newstr == "U"|| newstr == "V"|| newstr == "W"|| newstr == "X"|| newstr == "Y" || newstr == "Z"){
            count2 = count2 + 1
    
         }


    }
    return count2;
}

console.log(q6(str, count2, newstr , yy))

// Q7

let string = "7 people own 9 people"
let newstring = ""
let count3 = 0
let t = string.length
let temp = 0
function q7(string , count3 , newstring , t , temp ){

    for (let i3= 0; i3 < t ; i3++) {
        newstring = string[i3]
        console.log()
        if( newstring == "1" || newstring == "2" ||newstring == "3" ||newstring == "4" ||newstring == "5" ||newstring == "6" ||newstring == "7" ||newstring == "8" ||newstring == "9" ||newstring == "0" )
        {
            newstring = newstring / 1
            temp = newstring
            count3 = count3 + temp



        }
      


    }

    return count3


}
console.log(q7(string, count3, newstring , t , temp ))