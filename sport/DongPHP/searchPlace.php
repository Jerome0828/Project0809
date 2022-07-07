<?php
    include 'sql.php';
    header("Access-Control-Allow-Origin:*");
    $clientRequest = new stdClass();
    foreach ($_POST as $key => $val){
        if($val !== ""){
            $clientRequest->$key = $val;
        }
    }

    // 查看前端表單request
    // var_dump($clientRequest);

    /* 
    object(stdClass)#2 (9) {
      ["search"]=>
      string(9) "關鍵字"
      ["city"]=>
      string(9) "臺北市"
      ["district"]=>
      string(9) "中正區"
      ["week"]=>
      array(7) {
        [0]=>
        string(3) "mon"
        [1]=>
        string(4) "tues"
        [2]=>
        string(3) "wed"
        [3]=>
        string(4) "thur"
        [4]=>
        string(3) "fri"
        [5]=>
        string(3) "sat"
        [6]=>
        string(3) "sun"
      }
      ["timeRangeBegin"]=>
      string(6) "1 : 00"
      ["timeRangeEnd"]=>
      string(7) "18 : 00"
      ["price"]=>
      string(13) "$1001 ~ $2000"
      ["type"]=>
      array(4) {
        [0]=>
        string(6) "其他"
        [1]=>
        string(12) "拳擊格鬥"
        [2]=>
        string(12) "有氧訓練"
        [3]=>
        string(12) "極限運動"
      }
      ["people"]=>
      string(6) "單人"
    */

    $i=0;
    $myJSON=[];
/*--------------------
    關鍵字搜尋
----------------------*/
    $keyWord = "%{$_POST['search']}%";
    $sql = "SELECT pid,title,addr,sun,mon,tue,wed,thu,fri,sat,price,pricepertime,`type`,img1 FROM `place`
            WHERE title LIKE ? OR addr LIKE ?";

/*--------------------
        地區
----------------------*/
    if(isset($clientRequest->city)){
        $sql .= " INTERSECT SELECT pid,title,addr,sun,mon,tue,wed,thu,fri,sat,price,pricepertime,`type`,img1 FROM `place`
                WHERE addr LIKE \"%$clientRequest->city%\"";
        if(isset($clientRequest->district)){
            $sql .= " AND addr LIKE \"%$clientRequest->district%\"";
        }
    }
/*--------------------
        星期
----------------------*/
    if(isset($clientRequest->week)){
        foreach($clientRequest->week as $key=>$val){
            if($key==0){
                $sql .= " INTERSECT SELECT pid,title,addr,sun,mon,tue,wed,thu,fri,sat,price,pricepertime,`type`,img1 FROM `place`
                WHERE $val != \"\"";
            }else{
                $sql.= " AND $val != \"\"";
            }
        }
    }
/*--------------------
        時段
----------------------*/
    if(isset($clientRequest->timeRangeBegin)&&isset($clientRequest->timeRangeEnd)){
        $begin = $clientRequest->timeRangeBegin; $end = $clientRequest->timeRangeEnd;
        $begin = trim(explode(':',$begin)[0]).trim(explode(':',$begin)[1]);
        $end = trim(explode(':',$end)[0]).trim(explode(':',$end)[1]);

        if($begin!=='0000' || $end !== '2400'){
            $sql .= " INTERSECT SELECT pid,title,addr,sun,mon,tue,wed,thu,fri,sat,price,pricepertime,`type`,img1 FROM `place` 
            WHERE (REPLACE(SUBSTRING(REPLACE(sun,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(sun,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(mon,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(mon,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(tue,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(tue,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(wed,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(wed,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(thu,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(thu,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(fri,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(fri,'～',''),8,5),':','') < $end)
            || (REPLACE(SUBSTRING(REPLACE(sat,'～',''),1,5),':','')> $begin AND REPLACE(SUBSTRING(REPLACE(sat,'～',''),8,5),':','') < $end)";
        }
    }
/*--------------------
        價錢
----------------------*/
    if(isset($clientRequest->price)){        
        if($clientRequest->price=="$3001 ~ 以上"){
            foreach (explode("~",$clientRequest->price) as $key => $val){
                $priceTemp[0] = trim(explode("~",$clientRequest->price)[0]);
                $priceTemp[0] = trim($priceTemp[0],"$");
            }
            $sql .= " INTERSECT SELECT pid,title,addr,sun,mon,tue,wed,thu,fri,sat,price,pricepertime,`type`,img1 FROM `place` 
            WHERE price >= {$priceTemp[0]}";
        }else{
            foreach (explode("~",$clientRequest->price) as $key => $val){
                $priceTemp[0] = trim(explode("~",$clientRequest->price)[0]);
                $priceTemp[1] = trim(explode("~",$clientRequest->price)[1]);
                $priceTemp[0] = trim($priceTemp[0],"$");
                $priceTemp[1] = trim($priceTemp[1],"$");
            }
            $sql .= " INTERSECT SELECT pid,title,addr,sun,mon,tue,wed,thu,fri,sat,price,pricepertime,`type`,img1 FROM `place` 
            WHERE price BETWEEN {$priceTemp[0]} AND {$priceTemp[1]}";
        }
    }
/*--------------------
    類別
----------------------
    SELECT * FROM place 
    WHERE REPLACE(type,';','') LIKE "%懸吊運動%" 
    AND REPLACE(type,';','') LIKE "%有氧訓練%";
----------------------*/

    if(isset($clientRequest->type)){
        $type = $clientRequest->type;
        foreach($type as $key => $val){
            if($key==0){
                $sql .= " INTERSECT SELECT pid,title,addr,sun,mon,tue,wed,thu,fri,sat,price,pricepertime,`type`,img1 FROM `place` 
                WHERE REPLACE(type,';','') LIKE \"%$val%\"";
            }else{
                $sql .= " AND REPLACE(type,';','') LIKE \"%$val%\" ";
            }
        }
    }

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('ss',$keyWord,$keyWord);
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