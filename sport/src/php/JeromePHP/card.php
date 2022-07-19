<?php
    include('sql.php');

    // card
    $sql =  "SELECT addr, title, price, pricepertime, img FROM place INNER JOIN pimage ON place.pid = pimage.pid 
        ORDER BY RAND() limit 3;";
    $result = $sportSql->query($sql);

    $i = 0;
    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $date->img = base64_encode($date->img);
        $myJSON[$i] = $date;
        $i++;
    }
    $MaterialToClient = json_encode($myJSON);
    echo $MaterialToClient;