console.log("HelloWorld");

// Single line Comment


/*
Multi line comment
 this will cover
  multiple lines
*/

//variables

/*

There are two types of ways to declare variables in JavaScript

var a = 10;

let a = 10;

const x = 10;    This is when you dont want a variable to change

*/

let a =10;
console.log(a);

const x =20;
console.log(x);

//x=15

//Variables in JavaScript are case sensitive

let bob=20;

let boB=10;

//Datatypes

/*
Numbers
Strings
Booleans

*/

let temp = 10 ;//Datatype number

let temp1 = "10"; //Datatype string

/*
All numbers in Javascript are floating point numbers
*/

/*

All variable names in javascript must begin with a
letter or an undersore. You cannot use a reserved word
as a variable name.

*/

//ARITHMETHIC OPERATORS

//Addition

  console.log(5+2);

  console.log("abc"+"def");

// Subtraction

  console.log(5-2);

//Multiplication

  console.log(5*2);

//division

  console.log(5/2);

//Exponent

  console.log(3**4);

//Increment

  let h =11 ;
  console.log(h++);//11 Post-Increment
  console.log(h);//12

  let k = 10;

  console.log(++k)//11 Pre-Increment

//Decrement
  let y = 5
  console.log(y--);

  console.log(y);

  console.log(--y); 




//COMPARISON OPERATORS

//Equals

  console.log(5==3); // False

  console.log(4==4); //True

//Not Equals

  console.log(5!=4)// True
  console.log(4!=4) //False

//Greater than >

  console.log(5>4)//True

  console.log(4 > 5)

//Less than

  console.log(5 < 4)

  console.log(4 < 5)//True

// Greater than or Equal to

  console.log(5 >= 4) //True

  console.log(4 >= 5) //False

//Less than or Equyal too

  console.log(5 <=4 ) //False

  console.log(4 <= 5) //True

//ASSIGNMENT OPERATORS

// Equals

  //This is the simple assignment
  let n = 12;

//Add and Assignment

  n+=12; // This is the same as writing n = n +12
  console.log(n);

// Subtract and Assignment

  n-=4; //This is the same as writing n = n - 4
  console.log(n);

//Multiply and assign
          
  n*=5; // This is n = n * 5
  console.log(n);

//Divide and Assignment

  let p =4;

  p/=2 ;// This is the same as writing p = p/2

//Modulus and Assignment

  y %= 2; // This is y = y y%2

console.log(y);



//CONDITIONAL OPERATOR ?:

/* The conditional operator evaluates an expression for true or false.
If true , it executes the first statement. Otherwise it executes
the second statement */ 

  let first = 10;
  let second = 12;

  console.log(first>second?"True":"False");

  // first>second? = Test condition
  // Will print "False"


//TYPEOF OPERATOR

  let myString = "Hello"

  console.log(typeof(myString));  

  let myNumber = 12
  console.log(typeof(myNumber));  


//USER INPUT

/* The prompt() function is used to take input from
the user.
The default datatype for input is string. To convert the input to
a number, wraop the prompt in a NUMBER() function call */

  let mySecondString = prompt("Enter something");

  console.log(mySecondString);

  let mySecondNumber = Number(prompt("Enter a number"));
  console.log(mySecondNumber);


//IF STATEMENT

/*The if statement is a control statement which executes if the
test condition evaluates to true */

  let myage = 400

  if(myagee > 500){
    console.log("You are over 500 years old");
  }









