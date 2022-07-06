<?php
    include('sql.php');
    header("Access-Control-Allow-Origin:*");
    $sql = "SELECT pid,title,addr,img1,`type`,price,pricepertime FROM `place`";
    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){
        // var_dump($datas);
        $datas->img1 = base64_encode($datas->img1);
        $myJSON[$i] = $datas;
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;    
?>