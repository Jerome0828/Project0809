<?php
    foreach ($_POST as $key => $val){
        if($val!==''){
            echo "{$key} = {$val}<br/ >";
        }
    }
    // echo($_POST['timeBegin'] . '.' . $_POST['timeEnd']);
    // var_dump($_POST);
    
// var_dump($_POST);
/*
title = 213
info = 321
city = Tainan City
district = West->value...
addr = 益民路二段
wedBegin = 08:49 
~
wedEnd = 20:49
plimit = 123
yoga = on
workout = on
price = 123
pricePerTime = min
*/

/*  
array(14) { 
    ["search"]=> string(9) "關鍵字" 
    ["city"]=> string(11) "Taipei City" 
    ["district"]=> string(10) "Zhongzheng" 
    ["weekBegin"]=> string(10) "2022-07-02" 
    ["weekEnd"]=> string(10) "2022-07-02" 
    ["mon"]=> string(2) "on" 
    ["tues"]=> string(2) "on" 
    ["timeRangeBegin"]=> string(6) "1 : 00"
    ["timeRangeEnd"]=> string(6) "4 : 00" 
    ["price"]=> string(12) "$501 ~ $1000" 
    ["yoga"]=> string(2) "on" 
    ["workout"]=> string(2) "on" 
    ["workout5"]=> string(2) "on" 
    ["people"]=> string(9) "一對一" }

    array(13) { 
        ["city"]=> string(11) "Taipei City" 
        ["district"]=> string(10) "Zhongzheng" 
        ["weekBegin"]=> string(10) "2022-07-02" 
        ["weekEnd"]=> string(10) "2022-07-09" 
        ["mon"]=> string(2) "on" 
        ["tues"]=> string(2) "on" 
        ["timeRangeBegin"]=> string(6) "6 : 00" 
        ["timeRangeEnd"]=> string(7) "16 : 00" 
        ["price"]=> string(9) "$0 ~ $500" 
        ["yoga"]=> string(2) "on" 
        ["workout"]=> string(2) "on" 
        ["workout5"]=> string(2) "on" 
        ["people"]=> string(6) "單人" }
*/
?>

