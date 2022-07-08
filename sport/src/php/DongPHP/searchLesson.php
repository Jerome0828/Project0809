<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");
    $clientRequest = new stdClass();
    foreach ($_POST as $key => $val){
        if($val !== ""){
            $clientRequest->$key = $val;
        }
    }
    // 查看前端結果
    // var_dump($clientRequest);
    $i=0;
    $myJSON=[];
/*--------------------
    關鍵字搜尋
----------------------*/
    $keyWord = "%{$_POST['search']}%";
    $sql = "SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid 
            WHERE title LIKE ? OR addr LIKE ? OR cname LIKE ?";
    // $sql = "SELECT * FROM `lesson` 
    //         INNER JOIN coach ON lesson.cid = coach.cid 
    //         WHERE title LIKE ? OR addr LIKE ? OR cname LIKE ?";
/*--------------------
    縣市行政區
----------------------*/
    if(isset($clientRequest->district)){
        $sql .= " INTERSECT SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson`".
                    " INNER JOIN coach ON lesson.cid = coach.cid".
                    " WHERE addr LIKE \"%{$clientRequest->city}{$clientRequest->district}%\" ";
    } elseif(isset($clientRequest->city)){
        $sql .= " INTERSECT SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson`".
                " INNER JOIN coach ON lesson.cid = coach.cid".
                " WHERE addr LIKE \"%{$clientRequest->city}%\" ";
    }
/*--------------------
    模式
----------------------*/
    if(isset($clientRequest->mode)){
        $sql .= " INTERSECT SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson`".
                    " INNER JOIN coach ON lesson.cid = coach.cid".
                    " WHERE mode = '{$clientRequest->mode}'";
    }

/*--------------------
    價錢

    SELECT title,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid
            WHERE price BETWEEN 0 AND 500
----------------------*/
    if(isset($clientRequest->price)){        
        if($clientRequest->price=="$3001 ~ 以上"){
            foreach (explode("~",$clientRequest->price) as $key => $val){
                $priceTemp[0] = trim(explode("~",$clientRequest->price)[0]);
                $priceTemp[0] = trim($priceTemp[0],"$");
            }
            $sql .= " INTERSECT SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid
            WHERE price >= {$priceTemp[0]}";
        }else{
            foreach (explode("~",$clientRequest->price) as $key => $val){
                $priceTemp[0] = trim(explode("~",$clientRequest->price)[0]);
                $priceTemp[1] = trim(explode("~",$clientRequest->price)[1]);
                $priceTemp[0] = trim($priceTemp[0],"$");
                $priceTemp[1] = trim($priceTemp[1],"$");
            }
            $sql .= " INTERSECT SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid
            WHERE price BETWEEN {$priceTemp[0]} AND {$priceTemp[1]}";
        }
    }

/*--------------------
    類別
----------------------*/
    if(isset($clientRequest->type)){
        foreach($clientRequest->type as $key=>$value){
            if($key==0){
                $sql .= " INTERSECT SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson` 
                        INNER JOIN coach ON lesson.cid = coach.cid
                        WHERE type = \"$value\"";
            }else{
                $sql .= " OR type = \"$value\"";
            }
            // echo $key . ' : ' . $value;
        }
    }
/*--------------------
    星期
----------------------*/
    if(isset($clientRequest->week)){
        foreach($clientRequest->week as $key=>$val){
            if($key==0){
                $sql .= " INTERSECT SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson` 
                INNER JOIN coach ON lesson.cid = coach.cid
                WHERE $val != \"\"";
            }else{
                $sql.= " AND $val != \"\"";
            }
        }
    }
/*--------------------
    時段
----------------------
    (REPLACE(SUBSTRING(REPLACE(sun,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(sun,'～',''),8,5),':','') < 2000)
    || (REPLACE(SUBSTRING(REPLACE(mon,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(mon,'～',''),8,5),':','') < 2000)
    || (REPLACE(SUBSTRING(REPLACE(tue,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(tue,'～',''),8,5),':','') < 2000)
    || (REPLACE(SUBSTRING(REPLACE(wed,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(wed,'～',''),8,5),':','') < 2000)
    || (REPLACE(SUBSTRING(REPLACE(thu,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(thu,'～',''),8,5),':','') < 2000)
    || (REPLACE(SUBSTRING(REPLACE(fri,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(fri,'～',''),8,5),':','') < 2000)
    || (REPLACE(SUBSTRING(REPLACE(sat,'～',''),1,5),':','')> 0830 AND REPLACE(SUBSTRING(REPLACE(sat,'～',''),8,5),':','') < 2000) 
----------------------*/

    if(isset($clientRequest->timeRangeBegin)&&isset($clientRequest->timeRangeEnd)){
        $begin = $clientRequest->timeRangeBegin; $end = $clientRequest->timeRangeEnd;
        $begin = trim(explode(':',$begin)[0]).trim(explode(':',$begin)[1]);
        $end = trim(explode(':',$end)[0]).trim(explode(':',$end)[1]);

        if($begin!=='0000' || $end !== '2400'){
            $sql .= " INTERSECT SELECT mon,tue,wed,thu,fri,sat,sun,title,`type`,addr,cname,price,mode,img1 FROM `lesson` 
            INNER JOIN coach ON lesson.cid = coach.cid
            WHERE (REPLACE(SUBSTRING(REPLACE(sun,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(sun,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(mon,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(mon,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(tue,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(tue,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(wed,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(wed,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(thu,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(thu,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(fri,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(fri,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(sat,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(sat,'～',''),8,5),':','') < $end)";
        }
    }

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('sss',$keyWord,$keyWord,$keyWord);
    $stmt->execute();
    $result = $stmt->get_result();
    while($row = $result->fetch_assoc()){
        $myJSON[$i] = $row;
        $myJSON[$i]['img1'] = base64_encode($myJSON[$i]['img1']);
        $i++;
    }
    // var_dump($myJSON);
    $dataToClient=json_encode($myJSON);
    // 輸出
    echo $dataToClient;
    $stmt->free_result();
    $stmt->close();
?>