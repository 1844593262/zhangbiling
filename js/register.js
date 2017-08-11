$(function(){
	//加载头部和尾部
	$(".header-top").load("data/common.html #head");
	$(".footer").load("data/common.html #bottom");
	//验证注册表单的内容
	//验证手机号码
	 $(".login1 input").on("mousemove",function(e){
	 	  var testCon1=$(this).val();
	 	  if(!testCon1){
	 	  	  $(".spanTitle").html("请填写此字段").stop().fadeIn(400).css({"left":e.offsetX+10,
	 	  	     "top":e.offsetY+10,
	 	  	     "width":80
	 	  	 })
	 	  	    return;
	 	 } 
     })  
	  $(".login1 input").change(function(){
	 	 var testCon1=$(this).val();
	 	 var regPhone=/^1[3,4,5,7,8]\d{9}$/;
	 	 if(!regPhone.test(testCon1)){
	 	 	 $(".fixedShow").html("请输入正确的邮箱帐号或手机！").fadeIn(400).css({"top":-10,"width":194,"left":0})
	 	 }else{
	 	 	 $(".fixedShow").html("可以使用");
	 	 }
	 })
	 //验证密码
	  $(".login2  input").on("mousemove",function(e){
	 	  var testCon2=$(this).val();
	 	  if(!testCon2){
	 	  	  $(".spanTitle").html("请填写此字段").stop().fadeIn(400).css({"left":e.offsetX+10,
	 	  	     "top":e.offsetY+50,
	 	  	     "width":80
	 	  	 })
	 	  	    return;
	 	 } 
    })   
	 $(".login2 input").change(function(){
	 	 var testCon2=$(this).val();
	 	 var regPhone=/^[\w\W]{4,20}$/;
	 	 if(!regPhone.test(testCon2)){
	 	 	 $(".fixedShow").html("您输入的密码不能大于20个字符!").fadeIn(400).css({"top":-10,"width":194,"left":0})
	 	 }else{
	 	 	 $(".fixedShow").fadeOut(400);
	 	 }
	 	 return;
	 })
	 
	 //确认密码
	   $(".login3  input").on("mousemove",function(e){
	 	  var testCon3=$(this).val();
	 	  if(!testCon3){
	 	  	  $(".spanTitle").html("请填写此字段").stop().fadeIn(400).css({"left":e.offsetX+10,
	 	  	     "top":e.offsetY+100,
	 	  	     "width":80
	 	  	 })
	 	  	    return;
	 	 } 
    })   
	  $(".login3 input").change(function(){
	  	 var testCon2=$(".login2 input").val()
	 	 var testCon3=$(this).val();
	 	 if(testCon2!=testCon3){
	 	 	 $(".fixedShow").html("您两次输入的密码不一致!").fadeIn(400).css({"top":-10,"width":194,"left":0})
	 	 }else{
	 	 	 $(".fixedShow").fadeOut(400);
	 	 }
	 })
	 $(".login1 input,.login2 input,.login3 input").on("click  mouseout",function(e){
	 	   $(".spanTitle").css({"display":"none"})
	 })
	 
	 var only=0;
	 //随机生成验证码
	 $(".login1 input,.login2 input,.login3 input,.login4 .yan").click(function(){
	 	 only++;
	 	 if(only>1){
	 	 	return false;
	 	 }
	 	  $(".login4 .ma").val(createCode());
	 });
	 $(".login4 i em").click(function(){
	 	  $(".login4 .ma").val(createCode());
	 });
	 function createCode(){
	 	var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    var result="";
	    for(var i=0;i<4;i++){
	    	charIndex=Math.floor(Math.random()*str.length);
	    	result+=str.charAt(charIndex);
	    }
	    return result;
	 }
	
	 //提交注册
	    $(".submit").click(function(){
	    	var inp1=$(".login1 input").val();
			var inp2=$(".login2 input").val();
			var inp3=$(".login3 input").val();
			var inp4=$(".login4 input").val();
			if(!inp1||!inp2||!inp3||!inp4){
				alert("注册信息不能有空!");
				return;
			}
			 if($(".yan").val().toUpperCase()!=$(".ma").val().toUpperCase()){
	 	       alert("验证码输入错误!")
	 	       return;
	         }
			//将注册的信息获取后用post的方式发送到服务器
			$.ajax({
				"method":"Post",
				url:"data/register.php",
				data:{
					 "username":inp1,
					 "password":inp2 
				}
			})
			.then(function(data){
				data = JSON.parse(data);
				if(data.isOk){
					var objStr='{"user":'+inp1+',"pass":'+inp2+'}';
					$.cookie("userName",objStr,{expires:7,path:"/"});
					alert("注测成功！")
					location.href="index.html";
				}else{
					alert(data.msg);
				}
			})
	    })
	    $(".loginRight a").click(function(){
	    	 location.href="login.html";
	    });
			
});
