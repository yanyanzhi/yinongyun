<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header("Content-type:text/json;charset=utf-8");

$xiangqin=array(
	"big_img"=>array(
				"http://localhost/yinongyun/images/dadou_big.png",
				"http://localhost/yinongyun/images/douya_big.png",
				"http://localhost/yinongyun/images/douzi_big.png",
				"http://localhost/yinongyun/images/huangdou_big.png"
		),
	"small_img"=>array(
         		"http://localhost/yinongyun/images/dadou_small.png",
         		"http://localhost/yinongyun/images/douya_small.png",
         		"http://localhost/yinongyun/images/douzi_small.png",
         		"http://localhost/yinongyun/images/huangdou_small.png"
		),

	"p1"=>"春粮赋土黄豆非转基因1000g东北大豆",
	"p2"=>"肥壮基因 营养价值高 吃得放心",
	"p3"=>"￥56.00",
	"p4"=>"1.0kg",
	"p5"=>"1000kg",
	"p6"=>"10",
	"p7"=>"绥化市绥棱县绥棱农场",
	"nc_img"=>"http://localhost/yinongyun/images/nongchangxinxi.png",
	"p8"=>"农场基本信息",
	"p9"=>"绥棱农场",
	"p10"=>"果蔬|谷物",
	"p11"=>"13000001234",
	"p12"=>"1955",
	"p13"=>"绥化市绥棱县绥化<br/>市绥棱县",
	"p14"=>"100",
	"product_detail"=>"http://localhost/yinongyun/images/product-detail.png"

);
// 	"caterogy_list"=>array(
// 		"fruit1"=>array("苹果","苹果","苹果","苹果","苹果","苹果"),
// 		"fruit2"=>array("梨子","梨子","梨子","梨子","梨子","梨子"),
// 		"fruit3"=>array("香蕉","香蕉","香蕉","香蕉","香蕉","香蕉"),
// 		"fruit4"=>array("桔子","桔子","桔子","桔子","桔子","桔子"),
// 		"fruit5"=>array("菠萝","菠萝","菠萝","菠萝","菠萝","菠萝")
// 		)
// 	);
// if($_GET['category']=="果品"){
// 	echo json_encode(fruit1);
// }else if($_GET['category']=="蔬菜"){
// 	echo json_encode(fruit2);
// }else if($_GET['category']=="谷物"){
// 	echo json_encode(fruit3);
// }else if($_GET['category']=="禽蛋"){
// 	echo json_encode(fruit4);
// }else{
// 	echo json_encode(fruit5);
// }
echo json_encode ($xiangqin);