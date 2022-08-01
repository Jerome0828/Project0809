<?php
include("sql.php");
header("Access-Control-Allow-Origin:*");

$sql = "SELECT * FROM place INNER JOIN pimage ON place.pid = pimage.pid ORDER BY RAND() limit 15" ;
$result = $mysqli->query($sql); 
$i =0;
$oder = [];
while($data = $result->fetch_object()){
        $data->img = base64_encode($data->img);
        $oder[$i] = $data;
        $i++;
}
$myOderJson = json_encode($oder);
echo($myOderJson);
?>