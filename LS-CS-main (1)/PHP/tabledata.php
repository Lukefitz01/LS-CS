<!DOCTYPE html><html>

<head>
<title>Hello World</title>
</head>

<body>
<?php

$servername = "10.140.42.235";
$username = "LF";
$password = "password";
$port = "3307";
$database = "lf_db";

$conn = mysqli_connect($servername, $username , $password , $database, $port);

//Check connection
if(mysqli_connect_errno()) {
    echo "Failed to connect to MYSQL: ", mysqli_connect_errno();
    exit();

}
else{
    echo "connection successful";

}

$sql = "INSERT INTO MyGuests ( firstname , lastname, email) VALUES
        ('John' , 'Michael' , 'J.m@email.com'),
        ('Juliet' , 'Emma' , 'J.e@email.com')";

if (mysqli_query($conn , $sql) ){
    echo "Data entered successfully";
    echo mysqli_affected_rows($conn),"rows added successfully";
} else {
    echo "Error entering data: ". mysqli_error($conn);
    error_log("<br> You messed up!", 3, "my-errors.log");
    die('Could net enter data. ');
}
// Close the database connection
mysqli_close($conn);
?>

</body>

</html>