<?php
include 'sql.php';
header("Access-Control-Allow-Origin:*");
$clientRequest = new stdClass();
foreach ($_POST as $key => $val){
    if($val !== ""){
        $clientRequest->$key = $val;
    }
}

// 查看前端表單request
// var_dump($clientRequest);

$i=0;
$myJSON=[];
/*--------------------
關鍵字搜尋
----------------------*/
$keyWord = "%{$_POST['search']}%";
$sql = "SELECT pid,title,addr,img1,type,price,pricepertime FROM `place`
        WHERE title LIKE ? OR addr LIKE ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param('ss',$keyWord,$keyWord);
$stmt->execute();
$result = $stmt->get_result();
while($row = $result->fetch_assoc()){
    $myJSON[$i] = $row;
    $myJSON[$i]['img1'] = base64_encode($myJSON[$i]['img1']);
    $i++;
}
// var_dump($myJSON);
$dataToClient=json_encode($myJSON);
// 輸出
echo $dataToClient;
$stmt->free_result();
$stmt->close();
?>