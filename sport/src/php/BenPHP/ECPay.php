<?php
include('ECPay.Payment.Integration.php');
header("Access-Control-Allow-Origin:*","Content-Type:application/x-www-form-urlencoded");

$ItemName = $_POST['ItemName']; //取全部商品名稱


try {
         
    $obj = new ECPay_AllInOne();
   
       //服務參數
        $obj->ServiceURL  = "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5";  //服務位置，記得測試完要還成正式網址
        $obj->HashKey     = '5294y06JbISpM5x9' ;                                          //測試用Hashkey，請自行帶入ECPay提供的HashKey
        $obj->HashIV      = 'v77hoKGq4kWxNNIS' ;                                          //測試用HashIV，請自行帶入ECPay提供的HashIV
        $obj->MerchantID  = '2000132';                                                    //測試用MerchantID，請自行帶入ECPay提供的MerchantID
       $obj->EncryptType  = 1;

       //基本參數(請依系統規劃自行調
       $obj->Send['MerchantTradeNo']   = $_REQUEST['MerchantTradeNo']+rand(1,999)."carTest";   //訂單編號
       $obj->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');           //交易時間
       $obj->Send['TotalAmount']       = (int)$_REQUEST['TotalAmount']; //交易金額
       $obj->Send['TradeDesc']         = $_REQUEST['TradeDesc'];        //交易描述
       $obj->Send['NeedExtraPaidInfo'] = 'Y';                           //額外的付款資訊(消費者信用卡末四碼)
       $obj->Send['ChoosePayment']     = $_REQUEST['ChoosePayment'];    //付款方式:依照前端選擇值
       $obj->Send['OrderResultURL']    ="http://localhost:80/spost/Benphp/PlayOK.php";
        $obj->Send['CustomField1'] = $_REQUEST['MemberID'];

    $obj->SendExtend['MerchantTradeDate'] = '2012/03/21 15:40:18';
        $ItemName = $_POST['ItemName']; 
        foreach($ItemName as $k =>$v){
            $v1 = json_decode($v);
            $Name = $v1[$k]->title;
            $Time = $v1[$k]->date . " " . $v1[$k]->time;
            $Price = $v1[$k]->price;
            $Type = $v1[$k]->oid[0] == "l" ? "[課程]" : "[場地]";

                array_push($obj->Send['Items'],
                array('Name' => $Name . $Type. $Time ." NT$"  ,
                'Price' => (int)$Price,
                'Currency' => "元",
                'Quantity' => (int)"1",
                'URL' => "dedwed",
                ));
            }

   //產生訂單(auto submit至ECPay)
       $obj->CheckOut(); 

   } catch (Exception $e) {
    echo $e->getMessage();
   } 
?>