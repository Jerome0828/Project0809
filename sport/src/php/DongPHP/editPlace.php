<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");

    $pid='';
    foreach($_POST as $key => $val){
        $pid = $key;
    }

    $sql = "SELECT place.* , pimage.img 
    FROM place INNER JOIN 
    pimage ON place.pid = pimage.pid WHERE place.pid=\"$pid\"";

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