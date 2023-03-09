<!DOCTYPE html>
<html lang="en">
<head>

    <title>Display Table</title>

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
    $selectQuery = "SELECT id, first_name, last_name, password1 , gender , street , town , county , postcode , phonenum , reg_date FROM `a2form` ORDER BY `id` ASC" ;
    $result =  mysqli_query($conn,$selectQuery);
    if(mysqli_num_rows($result) > 0){
        echo "<br>";
        echo("num rows success");
        
    }else{
        $msg = "No Record found";
        echo($msg);
    }
} 




    ?>

<table border="2">
    <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Password</th>
        <th>Gender</th>
        <th>Street</th>
        <th>Town</th>
        <th>County</th>
        <th>Postcode</th>
        <th>Phonenum</th>
        <th>Reg Date</th>
    </tr>


<?php
                while($row = mysqli_fetch_assoc($result)){?>
    <tr>
        <td><?php echo $row['id']; ?></td>
        <td><?php echo $row['first_name']; ?></td>
        <td><?php echo $row['last_name']; ?></td>
        <td><?php echo $row['password1'];?></td>
        <td><?php echo $row['gender'];?></td>
        <td><?php echo $row['street']; ?></td>
        <td><?php echo $row['town']; ?></td>
        <td><?php echo $row['county']; ?></td>
        <td><?php echo $row['postcode']; ?></td>
        <td><?php  echo $row['phonenum'];?></td>
        <td><?php  echo $row['reg_date'];?></td>
    </tr>
    <?php } ?>

        </table>



</body>
</html>
