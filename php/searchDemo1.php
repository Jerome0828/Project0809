<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");
    $i=0;
    $myJSON=[];
    $keyWord = "%{$_POST['search']}%";
    $sql = "SELECT title,addr,cname FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid 
            WHERE title LIKE ? OR addr LIKE ? OR cname LIKE ?";    
    $stmp = $mysqli->prepare($sql);
    $stmp->bind_param('sss',$keyWord,$keyWord,$keyWord);
    $stmp->execute();
    $result = $stmp->get_result();
    while($row = $result->fetch_assoc()){
        // var_dump($row);
        $myJSON[$i] = $row;
        $i++;
        // echo($row[0]);
        // foreach($row as $k=>$v){
            // echo $k.' : '.$v.'<br />';
        // }
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;
    // var_dump($data);
    $stmp->free_result();
    $stmp->close();
    // header("Location: http://localhost:3000/coach");
    // exit();
?>