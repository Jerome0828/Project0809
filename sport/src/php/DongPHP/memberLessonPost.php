<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");

    $id='';
    foreach($_POST as $key => $val){
        $id = $key;
        // echo $id;
    }

    $sql = "SELECT lesson.id ,nickname ,lesson.lid , title, addr, info, mode, price, limage.img , type 
    FROM lesson INNER JOIN 
    member ON lesson.id = member.id 
    LEFT JOIN limage ON lesson.lid = limage.lid 
    WHERE lesson.id = $id group BY lesson.lid";

    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){
        // var_dump($datas);
        $datas->img = base64_encode($datas->img);
        $myJSON[$i] = $datas;
        $i++;
    }
    $dataToClient=json_encode($myJSON);
    echo $dataToClient;

?>