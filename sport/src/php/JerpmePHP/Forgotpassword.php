<?php
    include('sql.php');

    $fgCheckAccount  = $materialPost["fgCheckAccount"];
    $fgCheckEmail  = $materialPost["fgCheckEmail"]; 
    $fgCheckVerificationCode = $materialPost["verificationCode"];
    $fgCheckNewPassWorld = $materialPost["newPassWorld"];

    if ( strlen($fgCheckAccount) == 0 ) {
        $get = "SELECT * FROM register WHERE email = '$fgCheckEmail' ";
    }else {
        $get = "SELECT * FROM register WHERE account = '$fgCheckAccount' ";
    }
    $results =  $sportSql->query($get);
    $row = $results->fetch_array();

    if ( strlen($fgCheckVerificationCode) == 0 && strlen($fgCheckNewPassWorld) == 0 ) {
        // $row['email']
        // 發送驗證信
    }else if ( strlen($fgCheckNewPassWorld) == 0 ) {

        // 驗證碼核對
    }else {
        // 變更密碼
        if ( strlen($fgCheckAccount) == 0 ) {
            $get = "UPDATE register SET `password` = '$fgCheckNewPassWorld' WHERE email = '$fgCheckEmail' ";
            // $stmt = $sportSql->prepare($get);
            // $stmt->bind_param('ss', $fgCheckNewPassWorld, $fgCheckEmail );
            $results = $sportSql->query($get);
        }else {
            $get = "UPDATE register SET `password` = '$fgCheckNewPassWorld' WHERE account = '$fgCheckAccount' ";
            // $stmt = $sportSql->prepare($get);
            // $stmt->bind_param('ss', $fgCheckNewPassWorld, $fgCheckAccount );
            $results = $sportSql->query($get);
        }
        // $stmt->execute();
    }
?>