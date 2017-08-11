$(function(){
	//链接到首页
	$(".logo").click(function(){
		location.href="index.html";
	});
	//导入尾部
	$(".btmfen").load("data/shoes.html #footBar");
	//注册页面获取cookie里面的数据
	var Str=$.cookie("userName");
	Str = Str ? Str : "{}";
    var resObj = JSON.parse(Str);
    if(resObj.user){
       	$(".wel").html("欢迎您，"+resObj.user);
       	$(".free").html("[退出]");
       	$(".free").on("click",function (){
          	$.cookie("userName",null,{"expires": -1,"path":"/"});
	        	setTimeout(function (){
	             	location.href = "login.html"
	        },1000);
          });
    }else{
       	$(".wel").html("欢迎登录名鞋库");
       	$(".free").html("免费注册");
     	$(".free").on("click",function (){
     	       location.href="login.html";
     	});
     	$(".wel").on("click",function (){
     	       location.href="register.html";
     	});
    }
    //登录页面获取cookie的数据
    var Str1=$.cookie("user");
    Str1 = Str1 ? Str1 : "{}";
    var resObj1 = JSON.parse(Str1);
    if(resObj1.user){
       	$(".wel").html("欢迎您，"+resObj1.user);
       	$(".free").html("[退出]");
     	$(".free").on("click",function (){
          	$.cookie("userName",null,{"expires": -1,"path":"/"});
            setTimeout(function (){
                location.href = "login.html"
            },1000) })
 	    }else{
     	    $(".wel").html("欢迎登录名鞋库");
     	    $(".free").html("免费注册");
 	    }
 	   
	 //获取购物车里面的数据
	   var cartShops=$.cookie("cart");
	   cartShops=cartShops?cartShops:"{}";
	   cartShops=JSON.parse(cartShops);
      // console.log(cartShops);
// 	   var html="";
	   var hasProduct = false;//初始状态没有商品
	   //ajax请求start---------------------------------------------------------
 	   $.ajax({
 	  	 type:"get",
 	  	 url:"data/clothes.json",
 	  	 success:function(res){
 	  		var html = "";
 	  		var proArr = [];     //创建一个新数组，存放cookie中所有商品的具体的信息
			for (var id in cartShops){	//循环遍历cookie，将商品信息具体添加到数组中 
	 	  		for(var i in res){
	 	  	 	 	var zRes=res[i];
	 	  	 	 	for(var k in zRes){
	 	  	 	 	 	if(zRes[k].id==id){
	 	  	 				proArr.push(zRes[k]); 
	 	  	 	 	 	}
	 	  	 	 	}
 	  			}
 	  	    }
	 	  	for (var index in proArr) {
	 	  		var price1=parseInt(proArr[index].newPrice.split("￥")[1]);
	 	  		console.log(proArr[index].id,cartShops);
	 	  		var inital=cartShops[proArr[index].id]*price1;
	 	  		hasProduct=true;
	 	  		html+='<tr><td><span class="lmf1"><img src="'+proArr[index].imgPath[0]+'" alt="" /></span></td><td class="td1"><span class="des-im"><a href="javascript:;">'+proArr[index].tiltle+'</br><i>( 尺码:S,颜色:新基础黑 )</i></a></span></td><td>5分</td><td>'+proArr[index].newPrice+'</td><td><span class="jian" data-id="' + proArr[index].id +'"  data-id1="'+proArr[index].newPrice + '">-</span><input style="text-align:center"   type="text" value="'+ cartShops[proArr[index].id] +'" class="inp"><span class="jia"  data-id="'+proArr[index].id+'"  data-id1="'+proArr[index].newPrice +'">+</span></td><td>--</td><td class="xiaoji">'+inital+'</td><td><span>收藏</span><span class="del" data-id="'+proArr[index].id+'">删除</span></td></tr>';  	
	 	  	}
	 	  	$(".product_items tbody").html(html);
	 	//如果购物车没有内容就显示空购物车
	 	  	if(!hasProduct){
	 	  		$(".listsShop").html('您还没有挑选商品<a href="index.html">返回首页</a>').css({
			 	  		"width":"980px",
			 	  		"height":"147px",
			 	  		"line-height":"147px",
			 	  		"text-align":"center"
	 	     })
	 	  	}
	 	  	//点击加减变化
	 	  	$(".jian").click(function (){
		        var value = $(this).next().val();
		        if( value <= 1){
		            value = 1;
		        }else{
		            value --;
		            $(this).next().val(value);
		        }
		        console.log(value);
		        //重新存储cookie
//		        console.log(cartShops[$(this).attr("data-id")]);
		         var aNum= cartShops[$(this).attr("data-id")]=value;
		         var cart = JSON.stringify(cartShops);
	 	  		 $.cookie("cart",cart,{expires:7,path:"/"});
                 init(".numshops i");               	 	  		 
	 	  		 var price=$(this).attr("data-id1");
	 	  		 var _this =$(this).parent().siblings(".xiaoji");
	 	  		// console.log(price);
 	  		  	 shopCal(_this,price,aNum);	//小计初始化		
 	  		  	  sumCal();//商品初始化
 	  		  	 return;
    		})
	 	  	//-----------------------------------------------------
	 	  	$(".jia").click(function (){
		           var value = $(this).prev().val();
		            value++;
		            $(this).prev().val(value);
		            //重新存储cookie
		         cartShops[$(this).attr("data-id")]=value;
		         var aNum= cartShops[$(this).attr("data-id")]=value;
		         console.log(aNum);
		         var cart = JSON.stringify(cartShops);
	 	  		 $.cookie("cart",cart,{expires:7,path:"/"});
	 	  		 init(".numshops i");
	 	  		 var price=$(this).attr("data-id1");
	 	  		 var _this =$(this).parent().siblings(".xiaoji");
//	 	  		 console.log(_this);
	 	  		 shopCal(_this,price,aNum);
	 	  		  sumCal();//商品初始化
	 	  		  return;
    		})
	 	  	//删除商品
	 	  	$(".del").click(function(){
	 	  		  var boo=confirm("确认删除选中的商品吗？");
	 	  		 if(boo){
	 	  		  	   $(this).parent().parent().remove();
	 	  		  }
	 	  	     //删除cookie里面的值
	 	  		  delete cartShops[$(this).attr("data-id")]
	 	  		  //重新存储cookie
	 	  		  var cart = JSON.stringify(cartShops);
	 	  		  $.cookie("cart",cart,{expires:7,path:"/"});
	 	  		  
	 	  	})
	 	  	
	 	 }  //sucess end
//ajax请求END--------------------------------------------------------------	   	 	 	
 	  }) 	
		 	init(".numshops i");//初始化购物车
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
	        //商品小计初始化
	        function shopCal(ele1,price,num){
	            price=price.split("￥")[1];
	            var sumPrice;
	        	sumPrice=num*price;
	        	 $(ele1).html(sumPrice);
	        	 console.log(ele1);
	        }
	        //总价的计算
	        function sumCal(){
	        	var sumcal=0;
	        	$(".xiaoji").each(function(index,item){
	        		var zj=parseFloat($(this).html().split("￥")[0])
	        		console.log(zj);
	        		 sumcal+=zj;
	        		 console.log(sumcal);
	        		 $(".sumPrice i").html(sumcal);
	        		 
	        	})
	        }
 
  }) 