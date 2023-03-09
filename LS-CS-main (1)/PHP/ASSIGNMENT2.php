<!DOCTYPE html>
<html>

<head>
<link rel="stylesheet" href="style.css">
<script src="Formscript.js"></script>

<title>Hello World</title>
</head>

<body>

<form action="sendtoDB.php" method="post" onsubmit="return validateform()">
<fieldset>
<label for="fname">First name:</label><br>
<input type= "text" id="fname" name="fname"><br><br>

<label for="lname">Last name:</label><br>
<input type= "text" id="lname" name="lname"><br><br>

<label for="pw">Password:</label><br>
<input type= "password" id="pw" name="pw"><br><br>

<label for="pwc">Password Confirm:</label><br>
<input type= "password" id="pwc" name="pwc"><br><br>

<label for="gen">Gender</label><br>
<input type= "radio" id="gen" name="gen"  value="m">
<label for="gen">Male</label><br>
<input type= "radio" id="gen" name="gen" value="f">
<label for="gen">Female</label><br><br>

<label for="street">Street:</label><br>
<input type= "text" id="street" name="street"><br><br>

<label for="town">Town:</label><br>
<input type= "text" id="town" name="town"><br><br>

<label for="county">County:</label><br>
<input type= "text" id="county" name="county"><br><br>

<label for="postcode">Postcode:</label><br>
<input type= "text" id="postcode" name="postcode"><br><br>

<label for="num">Phone Number:</label><br>
<input type= "text" id="num" name="num"><br><br>

<input type="submit" name="submit" >
</fieldset>
</form>



</body>

</html>