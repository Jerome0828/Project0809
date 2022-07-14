<?php
    include('sql.php');

    $account = "{$materialPost['account']}";

    // 會員資料
    $sql = " SELECT * FROM member WHERE account = '$account' ";
    $result = $sportSql->query($sql);

    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $myJSON = $date;
    }
    $DateToClient = json_encode($myJSON);
    echo $DateToClient;