 <?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header("Content-type:text/json;charset=utf-8");

$arr_1 = array(
        array(	
        	"fruitname" => array("苹果","草莓","西瓜","迷糊桃","柑桔柚","香蕉","葡萄","香蕉","梨子")
        	),
);

$arr_2 = array(
	array(
	"fruitname" => array("蕨菜","土豆","西红柿","大豆","黄瓜","白菜","萝卜","青菜")
	),
	);

$arr_3 = array(
	array(
	"fruitname" => array("小麦","黑米","红豆","大豆","黑豆","大麦","小米","玉米","黑豆","花生","黑豆","大麦")
	),
);

$arr_4 = array(
	array(
	"fruitname" => array("鸡蛋","鸡肉","牛肉","鱼肉","鸭肉","猪肉","羊肉","五花肉")
	),
);

$arr_5 = array(
	array(
	"fruitname" => array("金针菇","土豆","西红柿","大豆","黄瓜","豌豆","黄瓜","大豆","黄瓜")
	),
);


if ($_GET['fenlei'] == "果品") {
	echo json_encode($arr_1);
}else if($_GET['fenlei'] == "蔬菜"){
	echo json_encode($arr_2);
}else if($_GET['fenlei']=="谷物"){
    echo json_encode($arr_3);
}else if($_GET['fenlei']=="禽蛋"){
    echo json_encode($arr_4);
}else{
	echo json_encode($arr_5);
}

