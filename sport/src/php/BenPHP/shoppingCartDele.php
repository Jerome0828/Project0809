<?php
header("Access-Control-Allow-Origin:*");
    include('sql.php');
    $id = $_REQUEST['carID'];
    echo $id;

    $sql = "DELETE FROM shoppingcar WHERE carid=?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('i',$id);
    $stmt->execute();