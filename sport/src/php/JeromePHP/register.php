<?php
    include('sql.php');

    // 註冊頁
    $account  = $materialPost["account"];
    $password = hash('sha256', $materialPost["password"]);
    $email    = $materialPost["email"];
    $phone    = $materialPost["phone"];
    $realname = $materialPost["realname"];
    $nickname = $materialPost["nickname"];
    $gender   = $materialPost["gender"];

    $insert = "INSERT INTO register (account, `password`, email, phone, realname, nickname, gender) VALUES (?,?,?,?,?,?,?)";
    $sportIn = $sportSql->prepare($insert);
    $sportIn->bind_param('sssssss', $account, $password, $email, $phone, $realname, $nickname, $gender);
    if ($sportIn->execute()) {
        echo true;
    }
    

?>