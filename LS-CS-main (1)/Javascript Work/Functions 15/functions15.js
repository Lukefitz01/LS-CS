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