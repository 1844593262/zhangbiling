$(function(){
	//加载头部和尾部
	$("#header-top").load("data/common.html #head");
	$("#footer").load("data/common.html #bottom");
	//验证
	$(".inp1 input").change(function(){
		 var testCon1=$(this).val();
	 	 var regPhone=/^1[3,4,5,7,8]\d{9}$/;
	 	 if(!regPhone.test(testCon1)){
	 	 	 alert("请输入正确的用户名！");
	 	 }else{
	 	 	 console.log("用户名输入正确!");
	 	 }  
	})
	$(".inp2 input").change(function(){
		 var testCon2=$(this).val();
		 console.log(testCon2);
	 	 var regPhone=/^[\w\W]{4,20}$/;
	 	 if(!regPhone.test(testCon2)){
	 	 	 alert("请输入正确格式的密码!")
	 	 }else{
	 	 	 console.log("密码正确！")
	 	 }
	})
	  var only=0;
	 //随机生成验证码
	 $(".inp1 input,.inp2 input,.inp3 .yan").click(function(){
	 	 only++;
	 	 if(only>1){
	 	 	return false;
	 	 }
	 	  $(".change i").html(createCode());
	 });
	 $(".change  em").click(function(){
	 	  $(".change  i").html(createCode());
	 });
	//随机生成验证码！
	function createCode(){
	 	var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    var result="";
	    for(var i=0;i<4;i++){
	    	charIndex=Math.floor(Math.random()*str.length);
	    	result+=str.charAt(charIndex);
	    }
	    return result;
	}
	$(".enter").click(function(){
		console.log(1);
		$inp1=$(".inp1 input").val();
	    $inp2=$(".inp2  input").val();
	    $inp3=$(".inp3  input").val();
	    $sec=$(".change i").html();
        $sec=$sec.toLowerCase();
	    console.log($inp1,$inp2,$inp3,$sec);
		//向数据库请求数据
		 $.ajax({
		 	  "method":"Post",
		       url:"data/login.php",
		       data:{
		       	   "username":$inp1,
		       	   "password":$inp2,
		       	   "code": $inp3,
			       "codeStr":$sec.toLowerCase()
		       }
		   })
		 .then(function(data){
		 	   console.log(data);
		 	   data = JSON.parse(data);
		 	     if(data.isOk){
            	    var str4='{"user":'+$inp1+'}';
					$.cookie("user",str4,{expires:7,path:"/"});
                     location.href = "index.html";
            } else {
                alert(data.msg);
            }
		 })
	})
	$(".toBe a").click(function(){
		location.href="register.html"
	})
	
})