<?php
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
$mysqli = new mysqli('localHost','root','','spost',3306);
$mysqli->set_charset('utf8');
    if ($mysqli){
        echo "ok";
    }else{
        echo "NO";
    }
    


?>