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

$conn = mysqli_connect($servername, $username , $password);

//Check connection
if(mysqli_connect_errno()) {
    echo "Failed to connect to MYSQL: ", mysqli_connect_errno();
    exit();

}
else{
    echo "connection successful";

}





?>

</body>

</html>
