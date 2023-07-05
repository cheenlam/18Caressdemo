<?php
$conf['qqjump']=1;
if(strpos($_SERVER['HTTP_USER_AGENT'], 'QQ/')||strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger')!==false && $conf['qqjump']==1){
$siteurl='http://'.$_SERVER['SERVER_NAME'].':'.$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
echo '<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>请使用浏览器打开</title>
<meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=1.0; user-scalable=no;" />
    <script src="https://open.mobile.qq.com/sdk/qqapi.js?_bid=152"></script>
<script type="text/javascript"> mqq.ui.openUrl({ target: 2,url: "' . $siteurl . '"}); </script>
<style type="text/css">
<!--
.fk {
    background-color: #FFF;
    height: 100%;
    width: 350px;
    clip: rect(auto,auto,auto,auto);
    position: static;
    margin: auto;
    padding: 0px;
    border-top-width: 100px;
    border-top-style: none;
    border-top-color: #CCC;
    border-right-color: #CCC;
    border-bottom-color: #CCC;
    border-left-color: #CCC;
}
body {
    background-color: #FFF;
    background-image: url();
}
.fk table tr td {
    font-size: 14px;
    color: #FF4444;
}
-->
</style>
</head>
<body>
    <div class="fk">
      <img src="https://gitee.com/muzihuaner/huangeimages/raw/master/2020/12/17/HTB1L0ZRSAvoK1RjSZFD760Y3pXat.jpg" width="340" height="600" align="absmiddle">
      <table width="100%" border="0">
        <tr>
          <td width="6%">&nbsp;</td>
          <td width="16%" rowspan="2"><img src="https://waliwali.icu/wp-content/uploads/2021/01/uugai.com-1611331070567.png" width="50" height="50"></td>
          <td width="4%">&nbsp;</td>
          <td width="74%">欢迎您！</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td style="font-size: 16px; color: #000;">请按照上图操作，进行浏览！</td>
        </tr>
      </table>
</div>
</body>
</html>';
exit; 
} 
?>