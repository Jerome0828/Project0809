<?php
    include('sql.php');

    $id = $materialPost['id'];

    $sql = " SELECT * FROM reaction WHERE id = '$id' ";
    $result = $sportSql->query($sql);

    $i = 0;
    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $myJSON[$i] = $date;
        $i++;
    }

    $DateToClient = json_encode($myJSON);
    echo $DateToClient;
?>