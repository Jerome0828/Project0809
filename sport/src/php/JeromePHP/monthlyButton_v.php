<?php
    include('sql.php');

    // 日期按鈕
    $lid = $materialPost["lid"];

    $sql = "SELECT mon, tue, wed, thu, fri, sat, sun FROM lesson WHERE lid = $lid";
    $result = $sportSql->query($sql);

    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $myJSON = $date;
    }
    $DateToClient = json_encode($myJSON);
    echo $DateToClient;

    

?>