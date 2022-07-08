<?php
    include('sql.php');

    $fgCheckAccount  = $materialPost["fgCheckAccount"];
    $fgCheckEmail  = $materialPost["fgCheckEmail"]; 
    $fgCheckNewPassWorld = $materialPost["newPassWorld"];
    
    if ( strlen($fgCheckAccount) == 0  ) {
        $get = "SELECT * FROM register WHERE email = '$fgCheckEmail' ";
    }else {
        $get = "SELECT * FROM register WHERE account = '$fgCheckAccount' ";
    }
    $results =  $sportSql->query($get);
    $row = $results->fetch_array();

    if ( strlen($fgCheckNewPassWorld) == 0 ) {
        if ( $row['email'] == '') {
            echo "";
        }else {
            echo $row['email'];
        }
    }else {
        // 變更密碼
        $newCheckNewPassWorld = hash('sha256', $fgCheckNewPassWorld);
        if ( strlen($fgCheckAccount) == 0 ) {
            $get = "UPDATE register SET `password` = '$newCheckNewPassWorld' WHERE email = '$fgCheckEmail' ";
        }else {
            $get = "UPDATE register SET `password` = '$newCheckNewPassWorld' WHERE account = '$fgCheckAccount' ";
        }
        if ( $sportSql->query($get) ) {
            echo true;
        }
    }
?>