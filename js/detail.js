$(function(){
	 //导入尾部
	$(".btmfen").load("data/shoes.html");
	//导入头部
	$(".header").load("data/head.html",function(){
		init(".cart b");//初始化购物车
	    //商品数量初始化
		    function init(ele){
		    //获取购物车商品的数量
		        var num = 0;
		        var cartStr = $.cookie("cart");
		        var cartObj =cartStr?JSON.parse(cartStr):{};
		            //console.log('carObj',cartObj);
		        for(var i in cartObj){
		             num+=cartObj[i] 
		         }
		             $(ele).html(num);
		   }	
		$(".cart").click(function(){
		    location.href="cart.html"; 
	    });
	    $(".left-logo").click(function(){
	    	location.href="index.html"; 
	    })
	});
	//获取地址栏的id
	//链接到具体的页面
		 var id = location.href.split("=")[1];
		 //记录浏览记录
		 var history=$.cookie("history");
		 history=history?history:'[]';
		 var objhistory=JSON.parse(history);
	     for(var i in objhistory){
	     	//[id1,id2,id3,id4]
	     	if(!objhistory[i]==id){
	     		objhistory.push(id);
	     	}
	     }
	     //存浏览记录的cookie
	    objhistory=JSON.stringify(objhistory);
	    $.cookie("history",objhistory,{"expires":7,"path":"/"});
		$.ajax({
		type:"GET",
		url:"data/clothes.json",
		success:function(res){
			//遍历数据得到相应的id
		  for(var key in res){
		     for(var item in res[key]){
				 var obj=res[key];
				   if(obj[item].id==id){
				   	   //console.log(obj[item]);
				 	    $(".aidas h1").html(obj[item].tiltle);
				 	    $(".goods-price li del").html(obj[item].oldPrice);
				 	    $(".goods-price li .new").html(obj[item].newPrice);	
				 	    $(".lmg_1").attr("src",obj[item].imgPath);
				 	    var  str1="";
				 	    $(obj[item].smallimg).each(function(index,item){
				 	    	str1+='<div class="smallImg"><span><i></i><img src="'+item+'" alt="" /></span>';
				 	   $(".smallImg").html(str1); 	
				 	    	
				 	    })
				 	}
		        }
			}
		}
	})
	 //点击添加购物车和立即购买，如果没有登录就要登录
	$(".sub").click(function(){
		console.log(!$.cookie().user);
		   if(!$.cookie().user){
		   	   location.href="login.html";
		   }
	})
	$(".btn").click(function(){
		if(!$.cookie().user){
		   	   location.href="login.html";
		   }
	})
	//初始化一下购物车
	init();
	function init(){
		var num=0;
		var str=$.cookie("cart");
		str=str?str:"{}";
		str1=JSON.parse(str);	 
	}
 	
	//点击btn的时候，存储cookie
	//var num=0;
	$(".btn").click(function(){
		//num++;
		var str = $.cookie("cart");
		var cartObj = str ? JSON.parse(str) : {};
		cartObj[id] = cartObj[id] ? ++cartObj[id] : 1;
		var cart = JSON.stringify(cartObj);
		console.log(cart)
		$.cookie("cart",cart,{expires:7,path:"/"});
	})
	
	//图片切换
	$(".goods-detail-tab div").click(function(){
		$(this).addClass("active").siblings().removeClass("active").parent().siblings(".section").eq($(this).index()).removeClass("hideDiv").siblings(".section").addClass("hideDiv");	
	});

	
})
