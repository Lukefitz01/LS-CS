let lvl = (prompt("Enter H or O for your level"));

let gde = Number(prompt("Enter your grade, 1-8"));

switch(lvl){

    case "H":
     switch(gde){
        case 1:
            console.log("Your",lvl,gde,"gets you 100 points")
            break;
        case 2:
            console.log("Your",lvl,gde,"gets you 88 points")
            break;
        case 3:
            console.log("Your",lvl,gde,"gets you 77 points")
            break;
        case 4:
            console.log("Your",lvl,gde,"gets you 66 points")
            break;
        case 5:
            console.log("Your",lvl,gde,"gets you 56 points")
            break;
        case 6:
            console.log("Your",lvl,gde,"gets you 46 points")
            break;
        case 7:
            console.log("Your",lvl,gde,"gets you 37 points")
            break;
        case 8:
            console.log("Your",lvl,gde,"gets you 0 points. You have failed")
            break;
        
        default:
            console.log(gde," is an Unrecognised Grade") ; 
            break;
     }
    break;
    case "O":
     switch(gde){

        case 1:
            console.log("Your",lvl,gde,"gets you 56 points")
            break;
        case 2:
            console.log("Your",lvl,gde,"gets you 46 points")
            break;
        case 3:
            console.log("Your",lvl,gde,"gets you 37 points")
            break;
        case 4:
            console.log("Your",lvl,gde,"gets you 28 points")
            break;
        case 5:
            console.log("Your",lvl,gde,"gets you 20 points")
            break;
        case 6:
            console.log("Your",lvl,gde,"gets you 12 points")
            break;
        case 7:
            console.log("Your",lvl,gde,"gets you 0 points. You have failed")
            break;
        case 8:
            console.log("Your",lvl,gde,"gets you 0 points. You have failed")
            break;
        
        default:
            console.log(gde,"is an Unrecognised Grade") ; 
            break;
     }
    break;
    default:
      console.log("Unrecognised Level") ; 
      break;
    }