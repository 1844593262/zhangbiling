$(function(){
	//鼠标移入移出显示相应的图片
	$(".myShoes").hover(function(){
		$(this).children(".myShoes-xl").show();
	},function(){
		$(this).children(".myShoes-xl").hide();
	});
	$(".iphoneShoes").hover(function(){
		$(".collectShoes").show();
	},function(){
		$(".collectShoes").hide();
	});
	$(".weixinPng").hover(function(){
		 $(".weiXinShow").show();
	},function(){
		 $(".weiXinShow").hide();
	})
	$(".nav-contleft  .firstNav").hover(function(){
		$(".listShow").show();
	})
	$(".menu  li").hover(function(){
		$(this).css({"background":"red"}).siblings().css({"background":"none"});
	})
	
	$(".selected").mouseenter(function(){
		$(this).find(".selected-cont").show().end().siblings().find(".selected-cont").hide();
	})
	$(".listShow").mouseleave(function(){
		$(this).hide()
	});
	//显示购物记录
//	$(".cart").mouseleave(function(){
//		$(".cartCon").show();
//	})
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
               		 },1000)
            })
     }else{
     	   console.log(1);
     	   $(".wel").html("欢迎登录名鞋库");
     	   $(".free").html("免费注册");
     	    $(".free").on("click",function (){
     	    	
     	   		 location.href="login.html";
     	   })
     	   $(".wel").on("click",function (){
     	   		 location.href="register.html";
     	   })
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
               		 },1000)
            })
     }else{
     	   $(".wel").html("欢迎登录名鞋库");
     	   $(".free").html("免费注册");
     }
	//轮播图
	var timer=0;
	var index=0;
	var zlen=$(".carousel li").length;
	timer=setInterval(function(){
		if(index==zlen){
			index=0;
		}
		$(".carousel li").eq(index).stop().animate({"opacity":100},500).siblings().stop().animate({"opacity":0},500);
		$(".dot li").eq(index).addClass("dotAdd").siblings().removeClass("dotAdd");
		index++;
	},3000);
	$(".dot li").mouseover(function(){
		clearInterval(timer);
		$(this).addClass("dotAdd").siblings().removeClass("dotAdd");
		$(".carousel li").eq($(this).index()).stop().animate({"opacity":100},500).siblings().stop().animate({"opacity":0},500);	
	})
	
	//切换
	$(".tab li:first-child").hover(function(){
		$(".manClassify .choice").css({"display":"block"});
		$(".manClassify .choice1").css({"display":"none"});
		 
	},function(){
		$(".manClassify .choice1").css({"display":"block"});
		$(".manClassify .choice").css({"display":"none"});
	})
	$(".tab1 li:last-child").hover(function(){
		$(".womanClassify .choice").css({"display":"block"});
		$(".womanClassify .choice1").css({"display":"none"});
	},function(){
	    $(".womanClassify .choice1").css({"display":"block"});
	     $(".womanClassify .choice").css({"display":"none"});
	})
	//ajax请求数据
	$.ajax({
		type:"GET",
		url:"data/list.json"
	})
	.then(function(data){
		   var html1="";var html2="";var html3="";var html4="";var html5="";
		   var html11="";var html12="";var html13="";var html14="";var html15="";
		   var html21="";var html22="";var html23="";var html24="";var html25="";
		   var html31="";var html32="";var html33="";var html34="";var html35="";
		   var html41="";var html42="";var html43="";var html44="";var html45="";
		   var html51="";var html52="";var html53="";var html54="";var html55="";
		   var html61="";var html62="";var html63="";var html64="";var html65="";
		   var html71="";var html72="";var html73="";var html74="";var html75="";
		   var html81="";var html82="";var html83="";var html84="";var html85="";
		   //第一楼 
//		   var data ={};
//		   for(var key in data) {
//		   		str += `<a href="javascript:;"><img src= "${data.key[1]}"><span></span></a>`;
//		   }
//		   
		   $(data.Louti1).each(function(index,item){
		   	     var data1=item;
		   	      //第一张图
		   	   $(data1.Lou1).each(function(index,item){
		   	   	   html1="<div class='LouName'><a href='javascript:;'><img src='"+ item.path+"'></a></div>";
		   	     	
		   	   });
		   	      //小的品牌logo
		   	      $(data1.brandlists).each(function(index,item){
		   	      	    html2+="<li class='nike"+(index+1)+"'><a href='javascript:;'><span>"+item.con+"</span></a></li>";
		   	   });
		   	      //文字信息
		   	      $(data1.leftuls).each(function(index,item){
		   	      	    html3+="<a href='javascript:;'>"+item+"</a>";
		   	    })
		   	      //大的海报
		   	    $(data1.shoesShowPath).each(function(index,item){
		   	       	$(item).each(function(index,item){
		   	         	html4="<a href='javscript:;'><img src='"+item.path+"' alt=''/></a>";
		   	    	})
		   	  })
		   	    //鞋的样品展示
		   	    $(data1.showsimgId).each(function(index,item){
		   	    	 $(item).each(function(index,item){
		   	    		html5+="<a href='javascript:;'><img src='"+item.path+"' alt=''></a>";
		   	    	})
		   	   	})
	     })
		   //楼梯创建
		    $Loutileft=$("<div class='leftLouti clearfix'></div>");
		    $Loutileft.appendTo($(".Louti1"));
		   //添加第一张图
		   $firNav=$("<div class='LouName'></div>");
		   $firNav.html(html1);
		   $firNav.appendTo($Loutileft);
		   //添加logo图片
		    $ul=$('<ul class="LouBrand clearfix"><ul>');
		    $ul.html(html2);
		    $ul.appendTo($Loutileft);
		   	//添加文字
		   	$ul1=$('<ul class="botName clearfix"></ul>');
		   	$ul1.appendTo($Loutileft);
		   	$li1=$('<li></li>');
		   	$li1.html(html3);
		    $ul1.append($li1);	
		   	//添加海报
		   	$poster=$('<div class="posterShoes"></div>');
		   	$poster.html(html4);
		    $poster.appendTo($(".Louti1"));
		    //添加鞋子的展示
		    $shoes=$('<div class="Shoesshow clearfix"></div>');
		    $shoes.html(html5);
		    $shoes.appendTo($(".Louti1")); 
		    //第二楼
		   $(data.Louti1).each(function(index,item){
		   	     var data1=item;
		   	      //第一张图
		   	   $(data1.Lou1).each(function(index,item){
		   	   	   html11="<div class='LouName'><a href='javascript:;'><img src='"+ item.path+"'></a></div>";
		   	     	
		   	   });
		   	      //小的品牌logo
		   	      $(data1.brandlists).each(function(index,item){
		   	      	    html12+="<li class='nike"+(index+1)+"'><a href='javascript:;'><span>"+item.con+"</span></a></li>";
		   	   });
		   	      //文字信息
		   	      $(data1.leftuls).each(function(index,item){
		   	      	    html13+="<a href='javascript:;'>"+item+"</a>";
		   	    })
		   	      //大的海报
		   	    $(data1.shoesShowPath).each(function(index,item){
		   	       	$(item).each(function(index,item){
		   	         	html14="<a href='javscript:;'><img src='"+item.path+"' alt=''/></a>";
		   	    	})
		   	  })
		   	    //鞋的样品展示
		   	    $(data1.showsimgId).each(function(index,item){
		   	    	 $(item).each(function(index,item){
		   	    		html15+="<a href='javascript:;'><img src='"+item.path+"' alt=''></a>";
		   	    	})
		   	   	})
	     })
		   //楼梯创建
		    $Loutileft=$("<div class='leftLouti clearfix'></div>");
		    $Loutileft.appendTo($(".Louti2"));
		   //添加第一张图
		   $firNav=$("<div class='LouName'></div>");
		   $firNav.html(html11);
		   $firNav.appendTo($Loutileft);
		   //添加logo图片
		    $ul=$('<ul class="LouBrand clearfix"><ul>');
		    $ul.html(html2);
		    $ul.appendTo($Loutileft);
		   	//添加文字
		   	$ul1=$('<ul class="botName clearfix"></ul>');
		   	$ul1.appendTo($Loutileft);
		   	$li1=$('<li></li>');
		   	$li1.html(html13);
		    $ul1.append($li1);
		   	//添加海报
		   	$poster=$('<div class="posterShoes"></div>');
		   	$poster.html(html14);
		    $poster.appendTo($(".Louti2"));
		    //添加鞋子的展示
		    $shoes=$('<div class="Shoesshow clearfix"></div>');
		    $shoes.html(html15);
		    $shoes.appendTo($(".Louti2")); 
		    
		    
		    //第三楼
		   $(data.Louti3).each(function(index,item){
		   	     var data1=item;
		   	      //第一张图
		   	   $(data1.Lou3).each(function(index,item){
		   	   	   html121="<div class='LouName'><a href='javascript:;'><img src='"+ item.path+"'></a></div>";
		   	     	
		   	   });
		   	      //小的品牌logo
		   	      $(data1.brandlists).each(function(index,item){
		   	      	    html22+="<li class='nike"+(index+1)+"'><a href='javascript:;'><span>"+item.con+"</span></a></li>";
		   	   });
		   	      //文字信息
		   	      $(data1.leftuls).each(function(index,item){
		   	      	    html23+="<a href='javascript:;'>"+item+"</a>";
		   	    })
		   	      //大的海报
		   	    $(data1.shoesShowPath).each(function(index,item){
		   	       	$(item).each(function(index,item){
		   	         	html24="<a href='javscript:;'><img src='"+item.path+"' alt=''/></a>";
		   	    	})
		   	  })
		   	    //鞋的样品展示
		   	    $(data1.showsimgId).each(function(index,item){
		   	    	 $(item).each(function(index,item){
		   	    		html25+="<a href='javascript:;'><img src='"+item.path+"' alt=''></a>";
		   	    	})
		   	   	})
	     })
		   //楼梯创建
		    $Loutileft=$("<div class='leftLouti clearfix'></div>");
		    $Loutileft.appendTo($(".Louti3"));
		   //添加第一张图
		   $firNav=$("<div class='LouName'></div>");
		   $firNav.html(html21);
		   $firNav.appendTo($Loutileft);
		   //添加logo图片
		    $ul=$('<ul class="LouBrand clearfix"><ul>');
		    $ul.html(html22);
		    $ul.appendTo($Loutileft);
		   	//添加文字
		   	$ul1=$('<ul class="botName clearfix"></ul>');
		   	$ul1.appendTo($Loutileft);
		   	$li1=$('<li></li>');
		   	$li1.html(html23);
		    $ul1.append($li1);
		   	//添加海报
		   	$poster=$('<div class="posterShoes"></div>');
		   	$poster.html(html24);
		    $poster.appendTo($(".Louti3"));
		    //添加鞋子的展示
		    $shoes=$('<div class="Shoesshow clearfix"></div>');
		    $shoes.html(html25);
		    $shoes.appendTo($(".Louti3")); 
		    
		      //第四楼
		   $(data.Louti4).each(function(index,item){
		   	     var data1=item;
		   	      //第一张图
		   	   $(data1.Lou4).each(function(index,item){
		   	   	   html31="<div class='LouName'><a href='javascript:;'><img src='"+ item.path+"'></a></div>";
		   	     	
		   	   });
		   	      //小的品牌logo
		   	      $(data1.brandlists).each(function(index,item){
		   	      	    html32+="<li class='nike"+(index+1)+"'><a href='javascript:;'><span>"+item.con+"</span></a></li>";
		   	   });
		   	      //文字信息
		   	      $(data1.leftuls).each(function(index,item){
		   	      	    html33+="<a href='javascript:;'>"+item+"</a>";
		   	    })
		   	      //大的海报
		   	    $(data1.shoesShowPath).each(function(index,item){
		   	       	$(item).each(function(index,item){
		   	         	html34="<a href='javscript:;'><img src='"+item.path+"' alt=''/></a>";
		   	    	})
		   	  })
		   	    //鞋的样品展示
		   	    $(data1.showsimgId).each(function(index,item){
		   	    	 $(item).each(function(index,item){
		   	    		html35+="<a href='javascript:;'><img src='"+item.path+"' alt=''></a>";
		   	    	})
		   	   	})
	     })
		   //楼梯创建
		    $Loutileft=$("<div class='leftLouti clearfix'></div>");
		    $Loutileft.appendTo($(".Louti4"));
		   //添加第一张图
		   $firNav=$("<div class='LouName'></div>");
		   $firNav.html(html31);
		   $firNav.appendTo($Loutileft);
		   //添加logo图片
		    $ul=$('<ul class="LouBrand clearfix"><ul>');
		    $ul.html(html32);
		    $ul.appendTo($Loutileft);
		   	//添加文字
		   	$ul1=$('<ul class="botName clearfix"></ul>');
		   	$ul1.appendTo($Loutileft);
		   	$li1=$('<li></li>');
		   	$li1.html(html33);
		    $ul1.append($li1);
		   	//添加海报
		   	$poster=$('<div class="posterShoes"></div>');
		   	$poster.html(html34);
		    $poster.appendTo($(".Louti4"));
		    //添加鞋子的展示
		    $shoes=$('<div class="Shoesshow clearfix"></div>');
		    $shoes.html(html35);
		    $shoes.appendTo($(".Louti4")); 
		       //第五楼
		   $(data.Louti5).each(function(index,item){
		   	     var data1=item;
		   	      //第一张图
		   	   $(data1.Lou5).each(function(index,item){
		   	   	   html41="<div class='LouName'><a href='javascript:;'><img src='"+ item.path+"'></a></div>";
		   	     	
		   	   });
		   	      //小的品牌logo
		   	      $(data1.brandlists).each(function(index,item){
		   	      	    html42+="<li class='nike"+(index+1)+"'><a href='javascript:;'><span>"+item.con+"</span></a></li>";
		   	   });
		   	      //文字信息
		   	      $(data1.leftuls).each(function(index,item){
		   	      	//console.log(item);
		   	      	    html43+="<a href='javascript:;'>"+item+"</a>";
		   	    })
		   	      //大的海报
		   	    $(data1.shoesShowPath).each(function(index,item){
		   	       	$(item).each(function(index,item){
		   	         	html44="<a href='javscript:;'><img src='"+item.path+"' alt=''/></a>";
		   	    	})
		   	  })
		   	    //鞋的样品展示
		   	    $(data1.showsimgId).each(function(index,item){
		   	    	 $(item).each(function(index,item){
		   	    		html45+="<a href='javascript:;'><img src='"+item.path+"' alt=''></a>";
		   	    	})
		   	   	})
	     })
		   //楼梯创建
		    $Loutileft=$("<div class='leftLouti clearfix'></div>");
		    $Loutileft.appendTo($(".Louti5"));
		   //添加第一张图
		   $firNav=$("<div class='LouName'></div>");
		   $firNav.html(html41);
		   $firNav.appendTo($Loutileft);
		   //添加logo图片
		    $ul=$('<ul class="LouBrand clearfix"><ul>');
		    $ul.html(html42);
		    $ul.appendTo($Loutileft);
		   	//添加文字
		   	$ul1=$('<ul class="botName clearfix"></ul>');
		   	$ul1.appendTo($Loutileft);
		   	$li1=$('<li></li>');
		    $li1.html(html43);
		    $ul1.append($li1);
		   	//添加海报
		   	$poster=$('<div class="posterShoes"></div>');
		   	$poster.html(html44);
		    $poster.appendTo($(".Louti5"));
		    //添加鞋子的展示
		    $shoes=$('<div class="Shoesshow clearfix"></div>');
		    $shoes.html(html45);
		    $shoes.appendTo($(".Louti5")); 
		     $('.Shoesshow a').click(
		     function(){
		     	location.href="list.html";
		     }
	)
		    
});
    //导入尾部
	$(".btmfen").load("data/shoes.html");
	 //获取购物车里面的数据
	 var cartShops=$.cookie("cart");
	 cartShops=cartShops?cartShops:"{}";
	 cartShops=JSON.parse(cartShops);
	 var html="";
     //请求ajax数据
     $.ajax({
 	  	type:"get",
 	  	url:"data/clothes.json",
 	  	success:function(res){
 	  		var html = "";
 	  		var proArr = [];
			for (var id in cartShops){
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
	 	  		 html+='<p class="bar clearfix" style="width:304px;border: 3px solid #f4a318; padding: 10px;background:white"><span style="width:50px;height:80px;float:left;display: inline-block;"><img src="'+proArr[index].imgPath[0]+'" alt="" style="width:100%;"/></span><span style="width:120px;height:80px;float:left;display:inline-block;font-size: 12px;">'+proArr[index].tiltle+'</span><span style="width:37px;height:80px;float:left;display: inline-block;">'+1+'</span><span style="width:58px;height:80px;float:left;display: inline-block;font-size: 12px;">'+proArr[index].newPrice +'</br><a href="javascript:;" style="font-size:12px" class="del data-id">[删除]</a></span></p>';  	
	 	  	}
	 	  	$(".cartCon").html(html);
	 	  		//删除商品
	 	  	$(".del").click(function(){
	 	  		  var boo=confirm("确认删除选中的商品吗");

	 	  		 if(boo){
	 	  		  	   $(this).parent().parent().remove();
	 	  		  }
	 	  	     //删除cookie里面的值
	 	  		 delete cartShops[$(this).attr("data-id")]
	 	  	})
	 	}
	
     })
     $(".cart").click(function(){
     	location.href="cart.html";
       })
     //初始化一下购物车
	 init(".cart b");//初始化购物车
	    //商品数量初始化
		    function init(ele){
		    //获取购物车商品的数量
		        var num = 0;
		        var cartStr = $.cookie("cart");
		        var cartObj = cartStr ? JSON.parse(cartStr) : {};
		            //console.log('carObj',cartObj);
		        for(var i in cartObj){
		             num+=cartObj[i] 
		         }
		             $(ele).html(num);
		   }	
  })
