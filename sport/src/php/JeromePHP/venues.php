<?php
    include('sql.php');

    // 場地介紹頁
    $lid = $materialPost["lid"];

    $sql = " SELECT * FROM lesson INNER JOIN limage ON lesson.lid = limage.lid WHERE lesson.lid = '$lid' ";
    $result = $sportSql->query($sql);

    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $date->img = base64_encode($date->img);
        $myJSON = $date;
    }
    $MaterialToClient = json_encode($myJSON);
    echo $MaterialToClient;