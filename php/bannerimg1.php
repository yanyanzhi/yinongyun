<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');
$arr_str = array(
	"bannerimg" => array("http://localhost/yinongyun/images/banner2.jpg","http://localhost/yinongyun/images/banner1.jpg","http://localhost/yinongyun/images/banner2.jpg","http://localhost/yinongyun/images/banner1.jpg")
);
echo (json_encode($arr_str));