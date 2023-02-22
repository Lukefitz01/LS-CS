<!DOCTYPE html>

<html>
<body>
<?php
$salaries = array();
$salaries2= [];
/* First method to associate create array.
The text to the left of the arrow is the 'index' into the array
The value to the right of the arrow is the vale at that 'index' position */ 
$salaries = array("John" => 2000, "Paul" => 1000, "George" => 550);

echo "Salary of John is ". $salaries['John'] . "<br />"; 
echo "Salary of Paul is ". $salaries['Paul']. "<br />";
echo "Salary of George is ". $salaries['George']. "<br />";
/* Second method to create array. The index is the word in [] and the value is assigned on the right hand side of the = */
$salaries2[ 'John'] = "high";
$salaries2['Paul'] = "medium";
$salaries2['George'] = "low";

echo "Salary of John is ". $salaries2['John']. "<br />";
echo "Salary of Paul is ". $salaries2[ 'Paul']. "<br />";
 echo "Salary of George is ". $salaries2[ 'George']. "<br />";


// unset($salaries['Paul']); #Deletes item Paul from the array
// unset($salaries2); Delete the entire array
?>

</body> </html>
"<br />";
