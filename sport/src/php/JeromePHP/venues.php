<?php
    include('sql.php');

    // 課程介紹頁
    $lid = $materialPost["lid"];

    $sql = " SELECT * FROM lesson WHERE lesson.lid = '$lid';";
    $result = $sportSql->query($sql);

    $img  = " SELECT img FROM lesson INNER JOIN limage ON lesson.lid = limage.lid WHERE lesson.lid = '$lid' ";
    $imgInfo = $sportSql->query($img );

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