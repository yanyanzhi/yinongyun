 <?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header("Content-type:text/json;charset=utf-8");

$prot1= array(
	array(
		"proimg"=>array(
						  "http://localhost/yinongyun/images/(1).png",
		                  "http://localhost/yinongyun/images/(2).png",
		                  "http://localhost/yinongyun/images/(3).png",
		                  "http://localhost/yinongyun/images/(4).png",
		                  "http://localhost/yinongyun/images/(5).png",
		                  "http://localhost/yinongyun/images/(6).png",
		                  "http://localhost/yinongyun/images/(7).png",
		                  "http://localhost/yinongyun/images/(8).png",
		                  "http://localhost/yinongyun/images/(9).png",
		                  "http://localhost/yinongyun/images/(10).png",
		                  "http://localhost/yinongyun/images/(11).png",
		                  "http://localhost/yinongyun/images/(12).png",
		                  "http://localhost/yinongyun/images/(1).png",
		                  "http://localhost/yinongyun/images/(3).png",
		                  "http://localhost/yinongyun/images/(2).png"

								),
		"proname" =>array(
                         "大豆精选500g",
                         "非转基因大豆2000g",
                         "东北黄豆1000g",
                         "大豆1000g",
                         "黄豆500g",
                         "非转基因大豆500g",
                         "黄豆500g",
                         "东北黄豆500g",
                         "大豆精选500g",
                         "大豆500g",
                         "大豆精选500g",
                         "非转基因大豆2000g",
                         "东北黄豆1000g",
                         "大豆1000g",
                         "黄豆500g"
						),
		"proprice"=>array(
                           "99.00",
                           "86.00",
                           "65.00",
                           "78.00",
                           "59.00",
                           "49.00",
                           "38.00",
                           "67.00",
                           "54.00",
                           "70.00",
                           "99.00",
                           "86.00",
                           "65.00",
                           "78.00",
                           "59.00"
						),
	                  ),
	);
$prot2= array(
	array(
		"proimg"=>array(
						  "http://localhost/yinongyun/images/shizi.png",
		                  "http://localhost/yinongyun/images/lanmei.png",
		                  "http://localhost/yinongyun/images/tizi.png",
		                  "http://localhost/yinongyun/images/taozi.png",
		                  "http://localhost/yinongyun/images/huangxin.png",
		                  "http://localhost/yinongyun/images/lizi.png",
		                  "http://localhost/yinongyun/images/黄桃.png",
		                  "http://localhost/yinongyun/images/1.png",
		                  "http://localhost/yinongyun/images/苹果梨.png",
		                  "http://localhost/yinongyun/images/香瓜.png",
		                  "http://localhost/yinongyun/images/lanmei.png",
		                  "http://localhost/yinongyun/images/tizi.png",
		                  "http://localhost/yinongyun/images/taozi.png",
		                  "http://localhost/yinongyun/images/huangxin.png",
		                  "http://localhost/yinongyun/images/lizi.png"

								),
		"proname" =>array(
                          "铁腚柿子精选500g",
                         "蓝莓鲜果2000g",
                         "红提子1000g",
                         "大久保桃1000g",
                         "黄杏500g",
                         "李子500g",
                         "黄桃500g",
                         "东北安梨500g",
                         "苹果梨500g",
                         "香瓜500g",
                          "李子500g",
                         "黄桃500g",
                         "东北安梨500g",
                         "苹果梨500g",
                         "香瓜500g"
						),
		"proprice"=>array(
                           "34.00",
                           "45.00",
                           "65.00",
                           "78.00",
                           "56.00",
                           "49.00",
                           "38.00",
                           "67.00",
                           "54.00",
                           "70.00",
                           "99.00",
                           "86.00",
                           "65.00",
                           "78.00",
                           "59.00"
						),
	                  ),
	);
$prot3= array(
	    array(
		"proimg"=>array(
						 "http://localhost/yinongyun/images/土豆.png",
		                  "http://localhost/yinongyun/images/茄子.png",
		                  "http://localhost/yinongyun/images/辣椒.png",
		                  "http://localhost/yinongyun/images/白菜.png",
		                  "http://localhost/yinongyun/images/蘑菇.png",
		                   "http://localhost/yinongyun/images/木耳.png",
		                  "http://localhost/yinongyun/images/菠菜.png",
		                  "http://localhost/yinongyun/images/香菜.png",
		                  "http://localhost/yinongyun/images/小白菜.png",
		                  "http://localhost/yinongyun/images/黄瓜.png",
		                  "http://localhost/yinongyun/images/木耳.png",
		                  "http://localhost/yinongyun/images/菠菜.png",
		                  "http://localhost/yinongyun/images/香菜.png",
		                  "http://localhost/yinongyun/images/小白菜.png",
		                  "http://localhost/yinongyun/images/黄瓜.png"

								),
		"proname" =>array(
                          "土豆500g",
                         "茄子2000g",
                         "辣椒1000g",
                         "白菜1000g",
                         "蘑菇500g",
                          "土豆500g",
                         "茄子2000g",
                         "辣椒1000g",
                         "白菜1000g",
                         "蘑菇500g",
                         "木耳500g",
                         "菠菜500g",
                         "香菜500g",
                         "小白菜500g",
                         "黄瓜500g"
						),
		"proprice"=>array(
                           "99.00",
                           "86.00",
                           "65.00",
                           "78.00",
                           "59.00",
                           "49.00",
                           "38.00",
                           "67.00",
                           "54.00",
                           "70.00",
                           "99.00",
                           "86.00",
                           "65.00",
                           "78.00",
                           "59.00"
						),
	                  ),
                );
if ($_GET['product'] == "大豆") {
	echo json_encode($prot1);
}else if($_GET['product'] == "苹果"){
	echo json_encode($prot2);
}else if($_GET['product'] == "蕨菜"){
	echo json_encode($prot3);
}else{
	echo json_encode($prot1);
}

