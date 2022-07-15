<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");

    $id='';
    foreach($_POST as $key => $val){
        $id = $key;
    }

    $sql = "SELECT place.id,place.pid,title,addr,price,pricepertime,member.nickname,pimage.img 
    FROM place INNER JOIN member ON place.id = member.id 
    LEFT JOIN pimage ON place.pid = pimage.pid WHERE place.id = $id
    group by place.pid";

    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){
        $datas->img = base64_encode($datas->img);
        $myJSON[$i] = $datas;
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;


?>