let colour = false;

function changeBodyBg(color) {
    document.body.style.background = color;
}




function validateform(color) {

    if (document.getElementById("fname").value == "") {
        alert("Please provide your First name!");
        return false;
    }

    if (document.getElementById("lname").value == "") {
        alert("Please provide your Last name!");
        return false;
    }

    if (document.getElementById("email").value == "") {
        alert("Please provide your email");
        return false;
    }

    if (document.getElementById("ad").value == "") {
        alert("Please provide your address line 1");
        return false;
    }

    if (document.getElementById("ad2").value == "") {
        alert("Please provide your address line 2 ");
        return false;
    }

    if (document.getElementById("city").value == "") {
        alert("Please provide your city");
        return false;
    }

    if (document.getElementById("region").value == "") {
        alert("Please provide your region!");
        // document.ASSIGNMETN2.town.focus() ;
        return false;
    }

    if (document.getElementById("country").value == "") {
        alert("Please provide your country");
        // document.ASSIGNMETN2.county.focus() ;
        return false;
    }

    if (document.getElementById("postcode").value == "") {
        alert("Please provide your Postcode ");
        // document.ASSIGNMETN2.postcode.focus() ;
        return false;
    }

    if (document.getElementById("num").value == "") {
        alert("Please provide your Phone number");
        return false;
    }


    if (document.getElementById("cc").value == "") {
        alert("Please provide your credit card number");
        return false;
    }

    if (document.getElementById("ccv").value == "") {
        alert("Please provide your ccv ");
        return false;
    }

    if (document.getElementById("exp").value == "") {
        alert("Please provide your expiry date");
        return false;
    }
    else {
        console.log("Form Success")
    }


    let cc = document.getElementById("cc").value;
    let ccstring = String(cc);
    let myArray = [];
    let type = 0;

    myArray = ccstring.split("");

    let lasts = myArray[myArray.length - 1];
    let last = Number(lasts);

    // Amex
    let ax1 = String(myArray[0]);
    let ax2 = String(myArray[1]);

    let ax3 = ax1 + ax2;

    //Mastercard 
    let m1 = Number(ax3);

    let m2 = String(myArray[2])
    let m3 = String(myArray[3])

    let m4 = ax3 + m2 + m3;
    let m5 = Number(m4);

    // Discover 
    let d1 = String(myArray[4]);
    let d2 = String(myArray[5]);

    let d3 = m4 + d1 + d2;

    let d4 = Number(d3);


    if ((myArray[0] == 4) && (myArray.length == 16 || myArray.length == 13)) {
        type = 1;
    }
    else if ((ax3 == "34" || ax3 == "37") && myArray.length == 15) {
        type = 2;
    }
    else if ((m1 > 50 && m1 < 56) && myArray.length == 16) {
        type = 3;
    }
    else if ((m5 > 2220 && m5 < 2721) && myArray.length == 16) {
        type = 3;
    }
    else if ((ax3 == "54" || ax3 == "55") && (myArray.length > 15 && myArray.length < 20)) {
        type = 4;
    }
    else if (m5 == 6011 && (myArray.length > 15 && myArray.length < 20)) {
        type = 4;
    }
    else if ((d4 > 622125 && d4 < 622926) && (myArray.length > 15 && myArray.length < 20)) {
        type = 4;
    }
    else if ((d4 > 623999 && d4 < 627000) && (myArray.length > 15 && myArray.length < 20)) {
        type = 4;
    }
    else if ((d4 > 628199 && d4 < 628900) && (myArray.length > 15 && myArray.length < 20)) {
        type = 4;
    }



    myArray.pop();
    myArray.reverse();
    let x = 0;

    let result = 0
    for (let i = 0; i < myArray.length; i++) {
        if (i % 2 == 0) {
            myArray[i] = myArray[i] * 2;


            if (myArray[i] > 9) {
                myArray[i] = myArray[i] - 9;
            }


        }
        //document.write(myArray[i]);
        //document.write("<br>");
        // document.write(result);
        // document.write("<br>");
        result = result + Number(myArray[i]);
    }

    result = result + last;
    if (result % 10 == 0) {

        if (type == 1) {
            alert("Card Num Valid . Visa");
            changeBodyBg('lime')

            return colour;

        }
        else if (type == 2) {
            alert("Card Num Valid . American Express");
            changeBodyBg('lime')

            return colour;

        }
        else if (type == 3) {
            alert("Card Num Valid . Mastercard");
            changeBodyBg('lime')

            return colour;
        }
        else if (type == 4) {
            alert("Card Num Valid . Discover");

            changeBodyBg('lime')

            return colour;
        }
        else {
            alert("Card Num Valid . Unknown Type");
            changeBodyBg('lime')
            return colour;
        }


    }
    else {
        alert("Invalid Card Num");
        changeBodyBg('orange')
        return colour;

    }


}


/*if (colour == true) {
    document.body.style.backgroundColor = "red";
}

*/


