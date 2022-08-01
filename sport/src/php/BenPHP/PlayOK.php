<?php
//include "db_func.php"; 
require_once 'ECPay.Payment.Integration.php';
include("sql.php");

$String = print_r( $_POST, true );
define( 'ECPay_MerchantID', '2000132' );
define( 'ECPay_HashKey', '5294y06JbISpM5x9');
define( 'ECPay_HashIV', 'v77hoKGq4kWxNNIS');
 
// 重新整理回傳參數。
$arParameters = $_POST;
foreach ($arParameters as $keys => $value) {
    if ($keys != 'CheckMacValue') {
        if ($keys == 'PaymentType') {
            $value = str_replace('_CVS', '', $value);
            $value = str_replace('_BARCODE', '', $value);
            $value = str_replace('_CreditCard', '', $value);
        }
        if ($keys == 'PeriodType') {
            $value = str_replace('Y', 'Year', $value);
            $value = str_replace('M', 'Month', $value);
            $value = str_replace('D', 'Day', $value);
        }
        $arFeedback[$keys] = $value;
    }
}
 

$CheckMacValue = ECPay_CheckMacValue::generate( $arParameters,ECPay_HashKey, ECPay_HashIV,1);
if ( $_POST['RtnCode'] =='1' && $CheckMacValue == $_POST['CheckMacValue'] ){
        $State = $_POST['RtnCode'];               // 交易狀態碼 1=成功
        $OrderNumber = $_POST['TradeNo'];               // 綠界提供的訂單號
        $PaymentDate = $_POST['PaymentDate'];       // 付款時間
        $PaymentType = $_POST['PaymentType'];       // 付款類型
        $id = $_POST['CustomField1'];         // 取會員ID

    $sql ="UPDATE shoppingcar SET State=?,OrderNumber=?,PaymentDate=?,PaymentType=? WHERE id=?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('iissi',$State,$OrderNumber,$PaymentDate,$PaymentType,$id);
    $stmt->execute();
    
}
echo "付款成功，3秒後返回網站";
header("refresh: 3;url=http://localhost:3000/member/$id");