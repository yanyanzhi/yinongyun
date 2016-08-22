 <?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header("Content-type:text/json;charset=utf-8");

$arr_shop = array(
	array(
		"name" => "1.橘子",
		"start"=>array(
	               "first"=>"images/active.png",
	              
	               "second"=>"images/xin_half.png",
	              
	                "third"=>"images/inactive.png"
				),
	),
	array(
		"name" => "2.西红柿",
		"start"=>array(
	              "first"=>"images/active.png",
	              
	              "second"=>"images/xin_half.png",
	              
	               "third"=>"images/inactive.png"
				),
	),
	array(
		"name" => "3.大豆",
		"start"=>array(
	              "first"=>"images/active.png",
	              
	              "second"=>"images/xin_half.png",
	              
	               "third"=>"images/inactive.png"
				),
	),
	array(
		"name" => "4.小麦",
		"start"=>array(
	              "first"=>"images/active.png",
	              
                  "second"=>"images/xin_half.png",
	              
	              "third"=>"images/inactive.png"
				),
	),
	array(
		"name" => "5.苹果",
		"start"=>array(
	            "first"=>"images/active.png",
	              
                "second"=>"images/xin_half.png",
	              
                "third"=>"images/inactive.png"
				),
	),
);

echo (json_encode($arr_shop));