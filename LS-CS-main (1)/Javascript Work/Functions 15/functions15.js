// Q1

let array = [1, 7 , 9]
let ns = ""
let count = 0
let y = array.length
let temp = 0
function q1(array, count , ns , y , temp )
{
    for (let i2 = 0; i2 < y ; i2++) {
        ns = array[i2]
       temp = ns
       count = count + temp
        
    }
    count = count / y
    return count;
}
console.log(q1(array, count, ns , y , temp))


// Q2 
let array2 = [1, 7 ,7,  9 , 9, 9 , 7]
let ns2 = ""
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
let count7 = 0
let count8 = 0
let count9 = 0
let count0 = 0
let yy = array2.length
let temp2 = 0
let temp3 = 0
let modes = [];
function q2( array2 , ns2 , yy , temp2 ,temp3,  count0 ,count1 , count2 , count3 , count4 , count5 , count6 , count7 , count8 , count9)
{
    for (let i = 0; i < yy ; i++) {
        ns2 = array2[i]
       temp2 = ns2
       temp2 = temp2 / 1
       if(temp2 ==  0){
        count0 = count0 + 1
       }
       else if(temp2 == 1){
        count1 = count1 + 1
       }
       else if(temp2 == 2){
        count2 = count2 + 1
       }
       else if(temp2 == 3){
        count3 = count3 + 1
       }
       else if(temp2 == 4){
        count4 = count4 + 1
       }
       else if(temp2 == 5){
        count5 = count5 + 1
       }
       else if(temp2 == 6){
        count6 = count6 + 1
       }
       else if(temp2 == 7){
        count7 = count7 + 1
       }
       else if(temp2 == 8){
        count8 = count8 + 1
       }
       else if(temp2 == 9 ){
        count9 = count9 + 1
       }

    
    }
    let array22 = [count0,count1 , count2 , count3 , count4 , count5 , count6 , count7 , count8 , count9 ]
    let yyy= array22.length
    //console.log( count0 ,count1 , count2 , count3 , count4 , count5 , count6 , count7 , count8 , count9)
    //console.log(array22[9])
    for(let j = 0; j < yyy ; j++){

        if (array22[j] > temp3) {
            temp3 = array22[j];
           // console.log(temp3)
           modes = []
           modes.push(j);
          } 

        else if(array22[j] == temp3){
            modes.push(j);
        }
        }
    
    return modes; 

    }
console.log(q2(array2, ns2 , yy , temp2, temp3, count0 ,count1 , count2 , count3 , count4 , count5 , count6 , count7 , count8 , count9))


// Q3

function q3(array3, w , q ,a ,s)
{


if(w % 2 == 0){
//Even
let ww = w / 2
    for (let t = 1; t < ww + 1; t++) {
        if( t == ww  ){
        a = array3[ww]}
        else if(t == ww - 2 ){
        s = array3[ww - 1]


        }
       
    }  
    console.log(a , s)
    a = a + s;
    console.log(a)
    a = a / 2;
    return a 
}
else{
//Odd
    let ww = Math.floor(w/2)
    q = array3[ww];
    return q;

}

}

let array3 = [1, 7 , 9 , 7 ,45  , 9];
array3.sort(function(a, b) {
    return a - b;
  });
console.log(array3); 

let w = array3.length
let q = 0
let a = 0
let s = 0

console.log(q3(array3 , w , q , a ,s))



// Q4


function q4(array4 , l , tunoc , v , e , ee , outputnumbers)
{

    for(let vv = 0 ; vv < l ; vv++){

        if(v == vv){

        }
        else if(array4[v] == array4[vv]){

        tunoc = tunoc + 1


        }





    }
    


   


    e = array4[v].toString()
    ee = tunoc.toString()
    return array4[v] + " occurs "  + tunoc + " times "


}


let array4 = [3 , 16 , 45 , 7 , 8 , 8 , 8 , 3 ]
let l = array4.length
let tnuoc = 1
let ee = ""
let e = ""
let outputnumbers = []

for(let v = 0 ; v < l ; v++ ){

    if( outputnumbers.includes(array4[v])){

        
    
    }
    else{
    console.log(q4(array4 , l , tnuoc  , v ,e,  ee , outputnumbers))
    tnuoc = 1
    outputnumbers.push(array4[v])
    
        }


    

}