<?php
include('./mysqli.php');
$sql = "SELECT lid,title FROM lesson";
$result = $mysqli->query($sql);

echo $result;
var_dump($result);

?>