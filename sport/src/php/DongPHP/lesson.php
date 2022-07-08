<?php
    include('sql.php');
    header("Access-Control-Allow-Origin:*");
    $sql = "SELECT lid,img1,type,title,addr,price,cname,mode FROM `lesson` INNER JOIN coach ON lesson.cid = coach.cid ORDER BY RAND()";
    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){
        // var_dump($datas);
        $datas->img1 = base64_encode($datas->img1);
        $myJSON[$i] = $datas;
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;    
?>