<?php

header("Access-Control-Allow-Origin:*");
include('ECPay.Payment.Integration.php');
include("sql.php");

// $price = $_REQUEST['TotalAmount'];



    try {
        // 收到綠界科技的付款結果訊息，並判斷檢查碼是否相符
        
        $AL = new ECPay_AllInOne();
        // $AL->MerchantID = '3002607';
        // $AL->HashKey = 'pwFHCqoQZGmho4w6';
        // $AL->HashIV = 'EkRm7iFT261dpevs';
        $AL->MerchantID = '2000132';
        $AL->HashKey = '5294y06JbISpM5x9';
        $AL->HashIV = 'v77hoKGq4kWxNNIS';
        // $AL->EncryptType = ECPay_EncryptType::ENC_MD5;  // MD5
        $AL->EncryptType = ECPay_EncryptType::ENC_SHA256;
        $feedback = $AL->CheckOutFeedback();
        var_dump($feedback);

 
        // // 以付款結果訊息進行相對應的處理
        // /** 
        // 回傳的綠界科技的付款結果訊息如下:
        // Array
        // (
        //     [MerchantID] =>        
        //     [MerchantTradeNo] =>   
        //     [StoreID] =>
        //     [RtnCode] =>
        //     [RtnMsg] =>
        //     [TradeNo] =>
        //     [TradeAmt] =>
        //     [PaymentDate] => 
        //     [PaymentType] =>    // 支付類型 
        //     [PaymentTypeChargeFee] =>
        //     [TradeDate] =>      // 交易時間
        //     [SimulatePaid] =>
        //     [CustomField1] =>
        //     [CustomField2] =>
        //     [CustomField3] =>
        //     [CustomField4] =>
        //     [CheckMacValue] =>
        // 
        
        // $price1 = 888;
       
        $data1 = $feedback['RtnCode'];
        var_dump($data1);
        
        // var_dump($id);
        // 再個別寫入資料庫更新即可
        // */
        // $sql = "INSERT INT id,LPid,price,period,time,OrderNumber,State FROM orderlist WHERE values(?,?,?,?,?,?,?) "; 
        // $sql ="INSERT INTO orderlist(id,LPid,price,period,time,OrderNumber,State) values(1,'l04','200','2022-07-21','10:00 ~ 11:00
        // ','123car','1')";
        //  $sql ="INSERT INTO orderlist(price) values(?)";
         $sql ="UPDATE orderlist set price(?) where orderid='18'";

        // $result = $mysql->query($sql);
        // prepare回傳該物件的實體
        $stmt = $mysqli->prepare($sql);
        // bind_param綁定參數 ('isss')i代表數字,s代表字串,(要帶入的參數變數)
        // $stmt->bind_param('isisdsi',$id,$LPid,$price,$period,$time,$OrderNumber,$State);
        $stmt->bind_param('i',$data1);
        // 執行
        $stmt->execute();

        // 在網頁端回應 1|OK
        echo '1|OK';
    } catch(Exception $e) {
        echo '0|' . $e->getMessage();
    }

    // id = 對應會員id =前台丟id
    // LPid =資料庫對應p或者i資料表去拿title= 前台丟oid
    // price = 前台丟price
    // period = 前台丟date
    // time = 前台丟time 

?>