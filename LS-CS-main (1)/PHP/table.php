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

//Set the database to use
//We didnt set this when connecting so that is why
//We are running these lines
mysqli_select_db($conn , "LF_db");
$result = mysqli_query($conn, "SELECT DATABASE()");
$row = mysqli_fetch_row($result);
printf("Connected to database is %s,<br>", $row[0]);

//sql to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if(mysqli_query($conn , $sql)){
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table:" , mysqli_error($conn);
}

?>

</body>

</html>
