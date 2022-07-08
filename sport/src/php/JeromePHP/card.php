<?php
    include('sql.php');

    // card
    $sql = " SELECT addr, img1, title, price, pricepertime FROM place ORDER BY RAND() limit 3";
    $result = $sportSql->query($sql);

    $i = 0;
    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $date->img1 = base64_encode($date->img1);
        $myJSON[$i] = $date;
        $i++;
    }
    $MaterialToClient = json_encode($myJSON);
    echo $MaterialToClient;