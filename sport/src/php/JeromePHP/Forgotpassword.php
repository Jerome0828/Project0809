<?php
    include('sql.php');

    $fgCheckAccount  = $materialPost["fgCheckAccount"];
    $fgCheckEmail  = $materialPost["fgCheckEmail"]; 
    $fgCheckNewPassWorld = $materialPost["newPassWorld"];
    
    if ( strlen($fgCheckAccount) == 0 ) {
        $get = "SELECT * FROM register WHERE email = '$fgCheckEmail' ";
    }else {
        $get = "SELECT * FROM register WHERE account = '$fgCheckAccount' ";
    }
    $results =  $sportSql->query($get);
    $row = $results->fetch_array();
    $email = $row['email'];

    if ( strlen($fgCheckNewPassWorld) == 0 ) {
        // 發送驗證信
        $chkCode = "";
        for ( $i = 0 ; $i <= 3 ; $i++ ) {
            $chkCode .= rand(0, 9);
        }
        if ( mail( $row['email'] , "SPOST + 忘記密碼驗證信", $chkCode ) ) {
            echo $chkCode;
        }else {
            echo true;
        }
    }else {
        // 變更密碼
        $newCheckNewPassWorld = hash('sha256', $materialPost["newPassWorld"]);
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