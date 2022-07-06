<?php
include('mysqli.php');
// $sql = "SELECT lid,title FROM lesson";
// $result = $mysqli->query($sql);
// echo $result;
 
// ==========新增資料用
// $lid = 121 ;$title = '測試中';   $addr = '台中市';    $info ="歐北來";
// $sql = "INSERT INTO lesson(lid,title,addr,info) VALUE(?,?,?,?)";
// // prepare回傳該物件的實體
// $stmt = $mysqli->prepare($sql);
// // bind_param綁定參數 ('isss')i代表數字,s代表字串,(要帶入的參數變數)
// $stmt->bind_param('isss',$lid,$title,$addr,$info);
// // 執行
// $stmt->execute();

// =========查詢資料用
$sql = "SELECT lid,title,addr,info FROM lesson";
$result = $mysqli->query($sql);

    // var_dump($result);  // dump是個object物件
    // var_dump($result->fetch_object()); //取出是個object物件

    // 測試取object物件資料值成功
    // $row = $result->fetch_object();
    // echo $row->lid;

// 使用while迴圈撈取所有資料
while($row= $result->fetch_object()){
    // 變數指向對應資料表標籤名稱_須留意SQL查詢指令
    echo"{$row->lid}:{$row->title}:{$row->addr} <br/>";
}
// foreach($row as $k =>$v)






// 查看目前幾筆資料
// echo $result->num_rows . "<br />";

// 取物件資料
// $row = $result->fetch_object();
// echo $row;

//尋訪資料用
// foreach($result as $k => $v){
//     echo "<p>{$k}:{$v->title}</p>";
// }



?>