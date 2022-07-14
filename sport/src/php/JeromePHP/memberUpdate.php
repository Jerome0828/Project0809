<?php
    include('sql.php');

    $account  = "{$materialPost['account']}";
    $password = hash('sha256', $materialPost["password"]);
    $email    = "{$materialPost['email']}";
    $phone    = $materialPost["phone"];
    $realname = "{$materialPost['realname']}";
    $nickname = "{$materialPost['nickname']}";
    $gender   = "{$materialPost['gender']}";

    // 會員資料
    $upDate = "UPDATE member 
        SET `password` = ?, phone = ?, realname = ?, nickname = ?, gender = ?
        WHERE account = '$account'";
    $result = $sportSql->query($upDate);
    $sportUp->bind_param('sssss', $password, $phone, $realname, $nickname, $gender);
    if ( $sportUp->execute() ) {

    }else {
        
    }
