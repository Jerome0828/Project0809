<?php
    include('sql.php');

    // 登入頁
    $singInAccount  = $materialPost["singInAccount"];
    $singInEmail  = $materialPost["singInEmail"];
    $singInPassword  = $materialPost["singInPassword"];    

    if ( strlen($singInAccount) == 0 ) {
        $get = "SELECT * FROM register WHERE email = '$singInEmail' ";
    }else {
        $get = "SELECT * FROM register WHERE account = '$singInAccount' ";
    }
    $results = $sportSql->query($get);
    $row = $results->fetch_array();

    if ( $row['password'] == $singInPassword ) {
        echo true;
    }
?>