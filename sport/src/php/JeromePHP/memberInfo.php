<?php
    include('sql.php');

    $id = "{$materialPost['id']}";

    // 會員資料
    $sql = " SELECT * FROM member WHERE id = '$id' ";
    $result = $sportSql->query($sql);

    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $myJSON = $date;
    }
    $DateToClient = json_encode($myJSON);
    echo $DateToClient;