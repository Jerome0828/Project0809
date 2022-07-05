<?php
/*--------------------
    關鍵字搜尋
----------------------*/

    include 'sql.php';
    header("Access-Control-Allow-Origin:*");
    $i=0;
    $myJSON=[];
    $keyWord = "%{$_POST['search']}%";
    $sql = "SELECT title,addr,cname,price,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid 
            WHERE title LIKE ? OR addr LIKE ? OR cname LIKE ?";    
    $stmp = $mysqli->prepare($sql);
    $stmp->bind_param('sss',$keyWord,$keyWord,$keyWord);
    $stmp->execute();
    $result = $stmp->get_result();
    while($row = $result->fetch_assoc()){
        $myJSON[$i] = $row;
        $myJSON[$i]['img1'] = base64_encode($myJSON[$i]['img1']);
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;
    $stmp->free_result();
    $stmp->close();
?>