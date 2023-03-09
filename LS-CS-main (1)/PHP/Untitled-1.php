-- ('$FirstName','$SecondName','$Pwd' , '$Pwc',  '$gen' , '$street' , '$town, '$county' , '$postcode' , '$num')";   
<?php
$host = "127.0.0.1"; //IP of your database
$userName = "root"; //Username for database login
$userPass = ""; //Password associated with the username
$database = "example-database"; //Your database name

$connectQuery = mysqli_connect($host,$userName,$userPass,$database);

if(mysqli_connect_errno()){
    echo mysqli_connect_error();
    exit();
}else{
    $selectQuery = "SELECT * FROM `tbl_users` ORDER BY `user_id` ASC";
    $result = mysqli_query($connectQuery,$selectQuery);
    if(mysqli_num_rows($result) > 0){
    }else{
        $msg = "No Record found";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML and PHP code</title>
</head>
<body>
    <h1>Display user list using HTML and PHP</h1>
    <?=$msg;?>
    <table border="1px" style="width:600px; line-height:40px;">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Registrating Date</th>
            </tr>
        </thead>
        <tbody>
            <?php
                while($row = mysqli_fetch_assoc($result))?>{
                <tr>
                    <td><?php echo $row['user_firstName'].$row['user_lastName']; ?></td>
                    <td><?php echo $row['user_email']; ?></td>
                    <td><?php if($row['user_status'] == 1){
                        echo "Active";
                    }else{
                        echo "Deactive";
                    } ?></td>
                    <td><?php echo $row['user_registrationDate']; ?></td>
                <tr>
            }
        </tbody>
    </table>
</body>
</html>