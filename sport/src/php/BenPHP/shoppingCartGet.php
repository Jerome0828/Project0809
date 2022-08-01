<?php
include("sql.php");
header("Access-Control-Allow-Origin:*");

$carID = "";
$res = $_REQUEST;
foreach($res as $k =>$v){
        $carID = $k;
}

// 取得lesson(課程表格)內容
$sql = "SELECT * from `shoppingcar` WHERE id = $carID";
$result = $mysqli->query($sql); 
$i =0;
$oder = [];
while($data = $result->fetch_object()){
        $oder[$i] = $data;
        $i++;
}

$myOderJson = json_encode($oder);
echo($myOderJson);
?>