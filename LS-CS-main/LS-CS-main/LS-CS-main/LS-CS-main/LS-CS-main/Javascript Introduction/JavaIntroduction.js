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

//            ARITHMETHIC OPERATORS

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




//              COMPARISON OPERATORS

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

//                    ASSIGNMENT OPERATORS

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

  if(myagee
     > 500){
    console.log("You are over 500 years old");
  }


// IF ELSE STATEMENT
/* If else is also a control statement. If the test condition is true 
it executes the code in the if block, otherwise it executes the code 
in the else block */


  if(myage > 500){
    console.log("You are over 500 years old");
  }
  else{
    console.log("You are not over 500 years old");
  }

//IF ELSE IF STATEMENT
/* Similar to the two control statements above:
This can test multiple different conditions,
if they all fail it will rin the else condition */

if(myage > 500){
  console.log("You are over 500 years old");
}
else if(myage < 500){
  console.log("You are less than 500 years old");
}
else{
  console.log("You are exactly 500 years old");
}





//     5-10-22


//                    LOGICAL OPERATORS


// Logical AND (&&) 

// Returns true if both operands are true

  a = true;
  let b = true;
  console.log(a && b) ;//Will print true 

  b = false;
  console.log(a && b); // Will print false

  let firstnumber = 10;
  let secondnumber = 20;

  if((firstnumber > 5) && (secondnumber > 15)){
    console.log("First is greater than 5 and second is greater than 15")
  }
  else{
    console.log("One of the expressions failed that test");
  }


// Logical OR (||) 
// If either A or B is True then all is true

  a = true;
  b = false;

  console.log(a || b); // True


// Logical NOT (!)
// Reverses the result if true becomes false .if False becomes true

  console.log(!(a)); // False


// Switch statement

  let myVar = "A";

  switch(myVar){

  case "A":
    console.log("You got an A");
    break;

  case "B":
    console.log("you got a B");
    break;

  default:
    console.log("Grade not recognized") ; 
  }

//               FOR LOOPS
/*for(initialisation; test condition; increment statement){

CODE will run in here if test condition is true

}


INITIALISATION: this step executes first. It only executes once. 
You can declare and initialise a loop control variable here.
It is optional, but you must put in a semi-colon at the end;

TEST CONDITION:  If the test condition is true the blocks of code executes,
otherwise it does not.

INCREMENT STATEMENT: After the body of the loop executes, control
goes to the increment statement which allows you to update any control
variable values. This statement is optional but a semi colon must be at the end

*/

  for(let i=0; i<2; i++){
    console.log("Hello",i)
  }
//We get the same output from this
  let j = 0;
  for(;j<2;j++){
    console.log("Hello",j)
  }
//Same again
  let k = 0;
  for(;k<2;){
    console.log("Hello",k);
    k++
  }

//3 semicolons is an infinite loop

