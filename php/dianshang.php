 <?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header("Content-type:text/json;charset=utf-8");

$shop = array(
	array(
		"pro_title" => "果品",
		"more"=> "更多>>",
		"imgs"=>array(
						  "http://localhost/yinongyun/images/shizi.png",
		                  "http://localhost/yinongyun/images/lanmei.png",
		                  "http://localhost/yinongyun/images/tizi.png",
		                  "http://localhost/yinongyun/images/taozi.png",
		                  "http://localhost/yinongyun/images/huangxin.png",
		                  "http://localhost/yinongyun/images/lizi.png",
		                  "http://localhost/yinongyun/images/黄桃.png",
		                  "http://localhost/yinongyun/images/1.png",
		                  "http://localhost/yinongyun/images/苹果梨.png",
		                  "http://localhost/yinongyun/images/香瓜.png"

								),
		"name" =>array(
                         "铁腚柿子精选500g",
                         "蓝莓鲜果2000g",
                         "红提子1000g",
                         "大久保桃1000g",
                         "黄杏500g",
                         "李子500g",
                         "黄桃500g",
                         "东北安梨500g",
                         "苹果梨500g",
                         "香瓜500g"
						),
					"price"=>array(
                           "99.00",
                           "86.00",
                           "65.00",
                           "78.00",
                           "59.00",
                           "49.00",
                           "38.00",
                           "67.00",
                           "54.00",
                           "70.00"
						),
	                  ),
	    // ),
	array(
		"pro_title" => "谷物",
		"more"=> "更多>>",
		// "shoplist"=>array(
					"imgs"=>array(
						  "http://localhost/yinongyun/images/土豆.png",
		                  "http://localhost/yinongyun/images/茄子.png",
		                  "http://localhost/yinongyun/images/辣椒.png",
		                  "http://localhost/yinongyun/images/白菜.png",
		                  "http://localhost/yinongyun/images/蘑菇.png",
		                   "http://localhost/yinongyun/images/木耳.png",
		                  "http://localhost/yinongyun/images/菠菜.png",
		                  "http://localhost/yinongyun/images/香菜.png",
		                  "http://localhost/yinongyun/images/小白菜.png",
		                  "http://localhost/yinongyun/images/黄瓜.png"
								),
					"name" =>array(
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
					"price"=>array(
                           "32.00",
                           "57.00",
                           "65.00",
                           "78.00",
                           "57.00",
                           "49.00",
                           "44.00",
                           "68.00",
                           "90.00",
                           "43.00"
						),
					),
	    // ),
	array(
		"pro_title" => "谷物",
		"more"=> "更多>>",
		// "shoplist"=>array(
					"imgs"=>array(
						  "http://localhost/yinongyun/images/dadou.png",
		                  "http://localhost/yinongyun/images/2.png",
		                  "http://localhost/yinongyun/images/小麦.png",
		                  "http://localhost/yinongyun/images/3.png",
		                  "http://localhost/yinongyun/images/小米.png",
		                   "http://localhost/yinongyun/images/高粱.png",
		                  "http://localhost/yinongyun/images/黄豆.png",
		                  "http://localhost/yinongyun/images/大米.png",
		                  "http://localhost/yinongyun/images/玉米.png",
		                  "http://localhost/yinongyun/images/山药.png"
								),
					"name" =>array(
                         "大豆500g",
                         "蓝莓鲜果2000g",
                         "小麦1000g",
                         "玉米1000g",
                         "高粱500g",
                         "黄豆500g",
                         "大米500g",
                         "玉米500g",
                         "玉米500g",
                         "山药500g"
						),
					"price"=>array(
                           "32.00",
                           "57.00",
                           "65.00",
                           "78.00",
                           "57.00",
                           "49.00",
                           "44.00",
                           "68.00",
                           "90.00",
                           "43.00"
						),
					// ),
	    ),
	array(
		"pro_title" => "禽蛋",
		"more"=> "更多>>",
		// "shoplist"=>array(
					"imgs"=>array(
						  "http://localhost/yinongyun/images/鸡蛋.png",
		                  "http://localhost/yinongyun/images/鸭蛋.png",
		                  "http://localhost/yinongyun/images/鸡肉.png",
		                  "http://localhost/yinongyun/images/鸭肉.png",
		                  "http://localhost/yinongyun/images/猪肉.png",
		                   "http://localhost/yinongyun/images/羊肉.png",
		                  "http://localhost/yinongyun/images/牛肉.png",
		                  "http://localhost/yinongyun/images/鸡翅.png",
		                  "http://localhost/yinongyun/images/鸭腿.png",
		                  "http://localhost/yinongyun/images/鸡腿.png"
								),
					"name" =>array(
                         "鸡蛋500g",
                         "鸭蛋2000g",
                         "鸡肉1000g",
                         "鸭肉1000g",
                         "猪肉500g",
                         "羊肉500g",
                         "牛肉500g",
                         "鸡翅500g",
                         "鸭腿500g",
                         "鸡腿500g"
						),
					"price"=>array(
                           "32.00",
                           "57.00",
                           "65.00",
                           "78.00",
                           "57.00",
                           "49.00",
                           "44.00",
                           "68.00",
                           "90.00",
                           "43.00"
						),
					// ),
	    ),
	array(
		"pro_title" => "其他",
		"more"=> "更多>>",
		// "shoplist"=>array(
					"imgs"=>array(
						  "http://localhost/yinongyun/images/大枣.png",
		                  "http://localhost/yinongyun/images/黑枣.png",
		                  "http://localhost/yinongyun/images/柿子饼.png",
		                  "http://localhost/yinongyun/images/松子.png",
		                  "http://localhost/yinongyun/images/红姑娘.png"
								),
					"name" =>array(
                         "大枣500g",
                         "黑枣500g",
                         "柿子饼500g",
                         "松子500g",
                         "红姑娘500g"
						),
					"price"=>array(
                           "49.00",
                           "44.00",
                           "68.00",
                           "90.00",
                           "43.00"
						),
	                  // ),
	    ),
	);

	echo json_encode($shop);

