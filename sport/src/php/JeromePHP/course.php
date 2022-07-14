<?php
    include('sql.php');

    // 場地介紹頁
    $pid = $materialPost["pid"];

    $sql = " SELECT * FROM place INNER JOIN pimage ON place.pid = pimage.pid WHERE place.pid = '$pid'; ";
    $result = $sportSql->query($sql);

    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $date->img = base64_encode($date->img);
        $myJSON = $date;
    }
    $MaterialToClient = json_encode($myJSON);
    echo $MaterialToClient;