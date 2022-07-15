<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");

    $lid='';
    foreach($_POST as $key => $val){
        $lid = $key;
        // echo $id;
    }

    /*
    
    SELECT `lesson.*`,limage.img 
    FROM lesson INNER JOIN 
    limage ON lesson.lid = limage.lid WHERE lesson.lid="l09";
    
    */


    $sql = "SELECT lesson.* , limage.img 
    FROM lesson INNER JOIN 
    limage ON lesson.lid = limage.lid WHERE lesson.lid=\"$lid\"";

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