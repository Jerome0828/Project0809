<?php
header("Access-Control-Allow-Origin:*");
    // 基本方法:
    // $mysqli = new mysqli('localhost','root','','ispan',3306);
    // $mysqli->set_charset('utf8');

    // 改使用匯入方式取代上方
    // sql.php檔案也只有上方兩段程式碼
    include('sql.php');
    
    // ==========移除資料用
    // 給予刪除的目標id值
    
    $id = $_REQUEST['carID'];
    echo $id;

    // MySQL刪除語法:
    $sql = "DELETE FROM shoppingcar WHERE carid=?";
    // prepare回傳該物件的實體
    $stmt = $mysqli->prepare($sql);
    // bind_param綁定參數 ('i')i代表是數值型態,(參數變數)
    $stmt->bind_param('i',$id);
    // 執行
    $stmt->execute();
    // 執行成功後查看資料庫內是否有新增