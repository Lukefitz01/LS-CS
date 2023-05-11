function validateform() {
    let cc = document.getElementById("cc").value;
    let ccstring = String(cc);
    let myArray = []

    myArray = ccstring.split("");

    let lasts = myArray[myArray.length - 1];
    let last = Number(lasts);

    myArray.pop();
    myArray.reverse();
    let x = 0

    let result = 0
    for (let i = 0; i < myArray.length; i++) {
        if (i % 2 == 0) {
            myArray[i] = myArray[i] * 2;

            if (myArray[i] > 9) {
                myArray[i] = myArray[i] - 9;
            }
        }
        else {

        }

        result = result + myArray[i];

    }
    result = result + last;
    if (result % 10 == 0) {
        console.log("Valid");

    }
    else {
        console.log("Fraud");
    }





}