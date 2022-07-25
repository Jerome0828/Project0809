<?php

include('ECPay.Payment.Integration.php');
header("Access-Control-Allow-Origin:*","Content-Type:application/x-www-form-urlencoded");

try {
         
    $obj = new ECPay_AllInOne();
   
       //服務參數
       $obj->ServiceURL  = "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5";  //服務位置，記得測試完要還成正式網址
       $obj->HashKey     = 'pwFHCqoQZGmho4w6' ;                                          //測試用Hashkey，請自行帶入ECPay提供的HashKey
       $obj->HashIV      = 'EkRm7iFT261dpevs' ;                                          //測試用HashIV，請自行帶入ECPay提供的HashIV
       $obj->MerchantID  = '3002607';                                                    //測試用MerchantID，請自行帶入ECPay提供的MerchantID
       $obj->EncryptType = '1';                                                          //CheckMacValue加密類型，請固定填入1，使用SHA256加密


       //基本參數(請依系統規劃自行調整)
       $MerchantTradeNo = "Test".time() ;
       $obj->Send['ReturnURL']         = "PlayOK.php" ;                              //付款完成通知回傳的網址
       $obj->Send['MerchantTradeNo']   = $MerchantTradeNo;                           //訂單編號
       $obj->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');                        //交易時間
       $obj->Send['TotalAmount']       = 2000;                                       //交易金額
       $obj->Send['TradeDesc']         = "商店訂購商品，訂單編號：".$order_id;        //交易描述
       $obj->Send['NeedExtraPaidInfo'] = 'Y';                                        //額外的付款資訊(消費者信用卡末四碼)
       $obj->Send['ChoosePayment']     = ECPay_PaymentMethod::ALL;                   //付款方式:全功能
        /*  當 付款方式 [ChoosePayment] 為 ALL 時，可隱藏不需要的付款方式，多筆請以井號分隔(#)。
            可用的參數值：
            Credit:信用卡
            WebATM:網路 ATM
            ATM:自動櫃員機
            CVS:超商代碼
            BARCODE:超商條碼 */

       //訂單的商品資料
       array_push($obj->Send['Items'], array('Name' => "歐付寶黑芝麻豆漿", 'Price' => (int)"2000",
                  'Currency' => "元", 'Quantity' => (int) "1", 'URL' => "dedwed"));


    
       //產生訂單(auto submit至ECPay)
       $obj->CheckOut();
      

    
   } catch (Exception $e) {
    echo $e->getMessage();
   } 
?>