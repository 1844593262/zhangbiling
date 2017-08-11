<?php
	//获取页面传过来的数据
    $userName=$_REQUEST['username'];
    $passWord=$_REQUEST['password'];
    //模拟数据库存储的数据
    $arr=array("17714392331","13057503899","18957728466","1234567");
    $result=array("isOk"=>true);
    $result['msg']='';
    //遍历模拟的数据的数组
    foreach($arr as $v){
    	if($userName==$v){
    		$result["isOk"]=false;
    		$result['msg']=$userName."用户名已经存在";
    		break;
    	}
    }
    print json_encode($result)
?>