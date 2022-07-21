<?php
    // foreach($_FILES as $k=>$v){
    //     var_dump($v);
    // }
    // foreach($_POST as $k=>$v){
    //     echo "$k + $v <br />";
    // }
    header("Access-Control-Allow-Origin:*");
    var_dump($_POST['imgFlag1']);
    // echo"<br />";
    var_dump($_FILES['img1']);
    // echo"<br />";
    var_dump($_POST['imgFlag2']);
    // echo"<br />";
    var_dump($_FILES['img2']);
    // echo"<br />";
    var_dump($_POST['imgFlag3']);
    // echo"<br />";
    var_dump($_FILES['img3']);
?>


