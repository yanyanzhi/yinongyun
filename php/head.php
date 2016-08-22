 <?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header("Content-type:text/json;charset=utf-8");

$head = array(
		"headimg"=>array(
        "http://localhost/yinongyun/images/39.png",
		"http://localhost/yinongyun/images/tudou.png",
		"http://localhost/yinongyun/images/40.png",
		"http://localhost/yinongyun/images/41.png",
		"http://localhost/yinongyun/images/42.png"
			),
	);

	echo json_encode($head);

