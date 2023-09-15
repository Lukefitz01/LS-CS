

function validateform() {

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

    if (document.getElementById("pw").value == "") {
        alert("Please provide your Password");
        return false;
    }

    if (document.getElementById("pw2").value == "") {
        alert("Please provide your Confirm Password ");
        return false;
    }

    if (document.getElementById("pw2").value != document.getElementById("pw").value) {
        alert("Password and Confirm Password do not match ");
    }


    else {
        console.log("Form Success")
    }
}


function validateform1() {

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

    if (document.getElementById("pw").value == "") {
        alert("Please provide your Password");
        return false;
    }


    else {
        console.log("Form Success")
    }
}
