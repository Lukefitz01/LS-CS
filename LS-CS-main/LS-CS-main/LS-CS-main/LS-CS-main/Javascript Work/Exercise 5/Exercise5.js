let ltr = (prompt("Enter a letter"));


a = "a"
e = "e"
i = "i"
o = "o"
u = "u"
switch(ltr){

    case a:
      console.log("You entered an vowel");
      break;

    case e:
      console.log("You entered an vowel");
    break;

    case i:
        console.log("You entered an vowel");
        break;

    case o:
        console.log("You entered an vowel");
        break;

    case u:
        console.log("You entered an vowel");
        break;
                                  
    default:
      console.log("Constant") ; 
    }
  

// Q2

let num = Number(prompt("Q2:Enter a number"));

mod5 = num % 5
mod11 = num % 11

console.log(mod5,mod11)
if(mod5 == 0 && mod11 == 0){
    console.log("Your number is divisible by 5 and 11")
}
else{
    console.log("Your number is not divisible by 5 and 11")
}


//Q3

let month = Number(prompt("Q3:Enter a number of a month"));


switch(month){

    case 1:
        console.log("January has 31 days");
        break;

    case 2:
        console.log("Feburary has 28 days");
        break;

    case 3:
        console.log("March has 31 days");
        break;

    case 4:
        console.log("April has 30 days");
        break;

    case 5:
        console.log("May has 31 days");
        break;

    case 6:
        console.log("June has 30 days");
        break;

    case 7:
        console.log("July has 31 days");
        break;

    case 8:
        console.log("August has 31 days");
        break;

    case 9:
        console.log("September has 30 days");
        break;

    case 10:
        console.log("October has 31 days");
        break;

    case 11:
        console.log("November has 30 days");
        break;

    case 12:
        console.log("December has 31 days");
        break;
                 
    default:
      console.log("Not a number 1-12") ; 
    }
  

//Q4

hrs= Number(prompt("Q4:Enter the current hour"));
mins = Number(prompt("Q4:Enter the current miniute"));


time = hrs - 12

if(hrs < 12 && hrs >= 0 && mins < 60 && mins >= 0){
    console.log("It is currently",hrs,mins,"AM")
}
else if(hrs > 11 && hrs < 25 && mins < 60 && mins >= 0){
    console.log("It is currently",time,mins,"PM")
}
else{
    console.log("Invalid input")
}
