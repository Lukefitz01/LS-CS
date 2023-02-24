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
$database = "";

$conn = mysqli_connect($servername, $username , $password , $database, $port);

//Check connection
if(mysqli_connect_errno()) {
    echo "Failed to connect to MYSQL: ", mysqli_connect_errno();
    exit();

}
else{
    echo "connection successful";

}


$sql = "CREATE DATABASE LF_db";
if (mysqli_query($conn, $sql)){
    echo "\n Database created successfully";
}else{
    echo "Error creating database:" , mysqli_error($conn);
}



?>

</body>

</html>