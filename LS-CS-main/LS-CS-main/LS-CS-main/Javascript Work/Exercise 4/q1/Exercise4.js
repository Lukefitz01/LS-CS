let rps = (prompt("Enter rock,paper or scissors"));

x = Math.floor(Math.random()*3)+1


switch(x){

    case 1:
      x="rock"
      if(rps=="scissors"){
        console.log("You lost! Computer picked ",x)
      }
      else if(rps=="paper"){
        console.log("You won! Computer picked ",x)
      }
      else if(rps==x){
        console.log("Draw! Computer also picked",x)
      }
      else{
        console.log(rps,"is an invalid input")
      }
      break;
  
    case 2:
      x="paper"
      if(rps=="rock"){
        console.log("You lost! Computer picked ",x)
      }
      else if(rps=="scissors"){
        console.log("You won! Computer picked ",x)
      }
      else if(rps==x){
        console.log("Draw! Computer also picked",x)
      }
      else{
        console.log(rps," is an invalid input")
      }
      break;

    case 3:
      x="scissors"
      if(rps=="paper"){
        console.log("You lost! Computer picked ",x)
      }
      else if(rps=="rock"){
        console.log("You won! Computer picked ",x)
      }
      else if(rps==x){
        console.log("Draw! Computer also picked",x)
      }
      else{
        console.log(rps,"is an invalid input")
      }
      
      break;
  
    default:
      console.log("Not recognized") ; 
    }