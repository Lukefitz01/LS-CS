function validateform() {

    if( document.getElementById("fname").value == "") {
        alert( "Please provide your First name!" );
        return false;
     }

     if( document.getElementById("lname").value == "") {
        alert( "Please provide your Last name!" );
        return false;
     }

     if( document.getElementById("pw").value == "" ) {
        alert( "Please add your password" );
        return false;
     }

     if( document.getElementById("pwc").value == "") {
        alert( "Please confirm your password" );
        return false;
     }

     if( document.getElementById("gen").value == "" ) {
        alert( "Please provide your Gender" );
        return false;
     }

     if( document.getElementById("street").value == "") {
        alert( "Please provide your Street" );
        return false;
     }

     if( document.getElementById("town").value == "") {
        alert( "Please provide your First name!" );
       // document.ASSIGNMETN2.town.focus() ;
        return false;
     }

     if( document.getElementById("county").value == "" ) {
        alert( "Please provide your county" );
       // document.ASSIGNMETN2.county.focus() ;
        return false;
     }

     if( document.getElementById("postcode").value == "" ) {
        alert( "Please provide your Postcode " );
       // document.ASSIGNMETN2.postcode.focus() ;
        return false;
     }

     if( document.getElementById("num").value == "" ) {
        alert( "Please provide your Phone number" );
        return false;
     }


     if( document.getElementById("pw").value != document.getElementById("pwc").value) {
        alert( "Your passwords do not match" );
       // document.ASSIGNMETN2.pw.focus() ;
        return false;
     }

     else{
        alert("Form Submitted")
     }

}