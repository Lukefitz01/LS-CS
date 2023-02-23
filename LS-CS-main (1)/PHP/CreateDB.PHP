<!DOCTYPE html><html>

<head>
<title>Hello World</title>
</head>

<body>
<?php
$sql = "CREATE DATABASE LF_db";
if (mysqli_query($conn, $sql)){
    echo "Database created successfully";
}else{
    echo "Error creating database:" , mysqli_error($conn)
}



?>

</body>

</html>