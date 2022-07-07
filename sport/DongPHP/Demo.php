<?php
    include('sql.php');
    header("Access-Control-Allow-Origin:*");
    $sql = "SELECT sun,mon,tue,wed,thu,fri,sat FROM `lesson` INNER JOIN coach ON lesson.cid = coach.cid where lid = 8";
    $result = $mysqli->query($sql);
    $i=0;
    $myJSON=[];
    while($datas = $result->fetch_object()){
        // var_dump($datas);
        $myJSON[$i] = $datas;
        $i++;
    }
    var_dump($myJSON);
    /*
SELECT *
FROM `lesson` WHERE 
(REPLACE(SUBSTRING(REPLACE(sun,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(sun,'～',''),8,5),':','') < 2000)
|| (REPLACE(SUBSTRING(REPLACE(mon,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(mon,'～',''),8,5),':','') < 2000)
|| (REPLACE(SUBSTRING(REPLACE(tue,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(tue,'～',''),8,5),':','') < 2000)
|| (REPLACE(SUBSTRING(REPLACE(wed,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(wed,'～',''),8,5),':','') < 2000)
|| (REPLACE(SUBSTRING(REPLACE(thu,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(thu,'～',''),8,5),':','') < 2000)
|| (REPLACE(SUBSTRING(REPLACE(fri,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(fri,'～',''),8,5),':','') < 2000)
|| (REPLACE(SUBSTRING(REPLACE(sat,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(sat,'～',''),8,5),':','') < 2000) 

    */
?>