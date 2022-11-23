//Q1
/*let array = ["Red","Red","Blue","Blue"]

let newarray=[]

let l = array.length
let ii = 0

for(let i = 0; i<l; i++){

    if(newarray.includes(array[i])){
     
    }
    else{

     newarray[ii] = array[i]
     ii++
    }

}
let ll = newarray.length
for(let iii = 0; iii<ll; iii++){
    console.log(newarray[iii])
    
}
*/
//Q2

let array2 = ["Yellow","Yellow","Yellow","Black","Black","Red"]

let k = array2.length
let jj = 0
let h = 0
let newarray2=[]
for(let j = 0; j<k; j++){
    for( h ; h<k; h++){
        if(j == h){
            
        }
        else if(array2[j] == array2[h]){
            newarray2[jj] = array2[j]
            
        }
        


    }
    jj++
h = 0  
}
let kk = newarray2.length
/*
for(let iii = 0; iii<kk; iii++){
    console.log(newarray2[iii])
    
}
*/

let newarray3=[]
let f = 0
let gg = 0 
let g = 0
for(g; newarray2.includes(newarray2[g]); g++) {

console.log("A")


}

/*
let ggg = newarray3.length
for(let iii = 0; iii<ggg; iii++){
    console.log(newarray3[iii])
    
}
*/