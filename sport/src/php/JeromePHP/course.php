<?php
    include('sql.php');

    // 場地介紹頁
    $pid = $materialPost["pid"];

    $sql = " SELECT * FROM place WHERE place.pid = '$pid';";
    $result = $sportSql->query($sql);

    $img = " SELECT img FROM place INNER JOIN pimage ON place.pid = pimage.pid WHERE place.pid = '$pid'; ";
    $imgInfo = $sportSql->query($img);

    $i = 1;
    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $myJSON[0] = $date;
        while ($date = $imgInfo->fetch_object()) {
            $date->img = base64_encode($date->img);
            $myJSON[$i] = $date;
            $i++;
        }
    }

    $MaterialToClient = json_encode($myJSON);
    echo $MaterialToClient;