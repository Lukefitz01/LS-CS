
<!DOCTYPE html>
<html>

<head>
<title>Hello World</title>
</head>

<body>


<?php

function validate_input($data) {
    $data = trim($data);//remove any trailing spaces
    $data = stripslashes($data);//remove and unnecessary slashes
    $data = htmlspecialchars($data); //convert any special chars to their html equivalent
    return $data;
    }
 $continue = true;
//Check all the fields have data

$submitbutton= $_POST['submitbutton'];
if (isset($_POST['submit'])) { //Check that the submit button was pressed

//echo("Submit Pressed");


if(!empty($_POST['fname'])) { //Check that the field name FirstName is not empty
$FirstName = validate_input($_POST['fname']); //Check the input is valid
//echo("fname");
//echo "<br>";
}
else {
    $continue = false;
}

    if(!empty($_POST['lname'])) {
    $SecondName = validate_input($_POST['lname']);
  //  echo("lname");
  //  echo "<br>";
    }
    else {
        $continue = false;
    }

    if(!empty($_POST['pw'])) {
    $Pwd = validate_input($_POST['pw']);
   // echo("pw");
  //  echo "<br>";
    }else {
        $continue = false;
    }

    if(!empty($_POST['pwc'])) {
        $Pwc = validate_input($_POST['pwc']);
      //  echo("pwc");
    //    echo "<br>";
        }else {
            $continue = false;
        }

    if(!empty($_POST['gen'])) {
    $gen = validate_input($_POST['gen']);
  //  echo("gen");
  //  echo "<br>";
    }else {
        $continue = false;
    }

    if(!empty($_POST['street'])) {
    $street = validate_input($_POST['street']);
 //   echo("street");
 //   echo "<br>";
    }     else {
        $continue = false;
    }   
    if(!empty($_POST['town'])) {
    $town = validate_input($_POST['town']);
  //  echo("town");
   // echo "<br>";
    }
    else {
        $continue = false;
    }
     if(!empty($_POST['county'])) {
    $county = validate_input($_POST['county']);
  //  echo("county");
 //    echo "<br>";
    }
    else {
        $continue = false;
    }

    if(!empty($_POST['postcode'])) {
    $postcode = validate_input($_POST['postcode']);
  //  echo("postcode");
  //  echo "<br>";
                            }else {
        $continue = false;
    }

    if(!empty($_POST['num'])) {
    $num = validate_input($_POST['num']);
  //  echo("1num");
  //  echo "<br>";
    }else {
        $continue = false;
    }

  }
     else{
       echo("Submit not pressed");
   }


    
    if($continue == false){
        echo("test wrong");
    }
    
   // $FirstName='a';
 //$SecondName = 'a';
  // $Pwd = 'a';
  //  $Pwc= 'a';
   //  $gen = 'a';
    //   $street= 'a';
    ///     $town= 'a';
      //   $county= 'a';
    //   $postcode = 'a';
    //    $num = '0';
//echo("$continue");
echo "<br>";


//echo "('$FirstName','$SecondName','$Pwd' , '$Pwc',  '$gen' , '$street' , '$town, '$county' , '$postcode' , '$num')";   

 $servername = "10.140.42.235";
 $username = "LF";
 $password = "password";
 $port = "3307";
 $database = "lf_db";
 $conn = mysqli_connect($servername, $username , $password , $database, $port);
    if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
    }
    else{
    echo "connected to mysql";
    $sql = "INSERT INTO a2form (first_name, last_name, password1 , password_confirm , gender , street , town , county , postcode , phonenum) VALUES
      ('$FirstName','$SecondName','$Pwd' , '$Pwc',  '$gen' , '$street' , '$town', '$county' , '$postcode' , '$num')";   

    
    echo "<br>";  
    if(mysqli_query($conn, $sql)){
    echo "Data added successfully :)";
    }
    else{
    echo "Unable to add data at this time :|". mysqli_errno($conn);
    }
    }

    mysqli_close($conn);


?>


</body>

</html>