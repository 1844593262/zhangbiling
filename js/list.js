$(function(){
	//点击高度变化
	$(".brandlogo  .more_open").click(function(){
		$('.brandlogo').css({
			"height":145,
			"backgroundColor":"#ccc"
		})
		$(this).css({
			"display":"none"
		})
		$('.lastInp').css({
			"display":"block"
		})
	}) 
	$('.lastInp:last').click(function(){
		 $('.brandlogo').css({
			"height":118,
			"background":"#fafafa"
		})
		$('.brandlogo  .more_open').css({
			"display":"block"
		}) 
		$('.lastInp').css({
			"display":"none"
		})
	})
	$('.sizes .more_open').click(function(){
		$(".sizes").css({
			"height":107,
			"backgroundColor":"#ccc"
		})
		$(this).css({
			"display":"none"
		})
		$('.lastInp1').css({
			"display":"block"
		})
		console.log($(this).parent().siblings("dl").children(".last-btn"))
		$(this).parent().siblings("dl").children(".last-btn").hide();
	})
	$('.lastInp1:last').click(function(){
		 $('.sizes').css({
			"height":63,
			"background":"#fafafa"
		})
		$('.sizes  .more_open').css({
			"display":"block"
		}) 
		$('.lastInp1').css({
			"display":"none"
		})
	})
	$('.seasons .more_open').click(function(){
		$(".seasons").css({
			"height":88,
			"backgroundColor":"#ccc"
		})
		$(this).css({
			"display":"none"
		})
		$('.lastInp10').css({
			"display":"block"
		})
	})
	$('.lastInp10:last').click(function(){
		 $('.seasons').css({
			"height":42,
			"background":"#fafafa"
		})
		$('.seasons  .more_open').css({
			"display":"block"
		}) 
		$('.lastInp10').css({
			"display":"none"
		})
	})
	$(".wrapAllbars").children().each(function(index,item){
		    var _this=this;
		   $(this).children(".more_open").each(function(index,item){
		   	 $(item).click(function(){
		   	 	$(_this).css({
					"height":88,
					"backgroundColor":"#ccc"
			    })
		   	 	$(this).css({
			       "display":"none"
		        })
		   	      var div1=$(_this).children("div:last-child");
			   	  $(div1).each(function(index,item){
			   	  	    $(this).css({"display":"block"})
			   	  })
		   	 })  
		   })
		   var div2=$(_this).children("div:last-child");
		   $(div2).each(function(index,item){
			   	$(this).children("input:last-child").click(function(){
			   		$(_this).css({
						"height":42,
						"background":"#fafafa"
		           }) 
		        	$(_this).children(".more_open").css({
						"display":"block"
					}) 
					$(div2).children("input").css({
						"display":"none"
					})
			   	})
			})  
	})
	//点击整体大的切换
	 $(".collect").click(function(){
	    $(".wrapAllbars").css({
	    	"display":"none"
	    })
	    $(".collect").css(
	      {
	      	"display":"none"
	       })
	    $(".expand").css(
	      {
	      	"display":"block"
	      })
	})
	 $(".expand").click(function(){
	    $(".wrapAllbars").css({
	    	"display":"block"
	    })
	    $(".expand").css(
	      {
	      	"display":"none"
	      })
	   $(".collect").css(
	      {
	      	"display":"block"
	    })
	})
	
	 //ajax获取数据
	 $.ajax({
		type:"GET",
		url:"data/clothes.json"
	})
	 .then(function(data){
	 	 var html="";
	 	 $(data.clothes).each(function(index,item){
	 	 	var htmlPath="";
	 	 	var htmlSmall="";
//	 	 	console.log(item);
	 	 	//循环创建大图
	 	 	$(item.imgPath).each(function(index,item1){
	 	 		htmlPath+='<a href="javascript:;"><img src="'+item1+'" alt="" /></a>';
	 	 		//console.log(htmlPath);
	 	 	});
	 	 	//循环创建小图
	 	 	$(item.smallimg).each(function(index,item2){
	 	 		htmlSmall += '<li><a href="javscript:;"><img src="'+ item2 +'" alt=""/></a></li>';
	 	 	}); 	
	 	 	html += '<dl class="cl1" data-id="'+ item.id +'"><dt>'+htmlPath+'</dt><div class="p-scroll"><span class="prev"><</span><span class="next">></span><div class="ps-wrap"><ul>'+ htmlSmall +'</ul></div></div><ul class="txt1"><li><i>'+ item.newPrice +'</i><s>'+item.oldPrice+'</s></li><li>'+item.tiltle+'</li><li>已售出<i>'+item.sale+'</i>件</li><li class="size" style="display:none">尺寸2XL</li></ul></dl>'	 	
	 	 });
	 	 $(".clothes").html(html);
	 	 $(".cl1").click(function(){
	 	 	 var id=$(this).attr("data-id");
	 	 	 location.href="detail.html?id="+id;
	 	 });
	 	 $(".cl1").hover(function(){
	 	 	$(this).find("dt").css("border","2px solid #f0f0f0").end().find(".txt1").css("background","#f0f0f0").animate({"height":"85px"}).find(".size").show();
	 	 },function(){
	 	 	$(this).find("dt").css("border","2px solid #ffffff ").end().find(".txt1").css("background","#ffffff").animate({"height":"60px"}).find(".size").hide();	 	
	 	 });
	 	 
	 	 
	 	/* $(".cl1").mouseover(function(){
	 	 	 $(this).addClass("active").siblings().removeClass("active");
	 	 })*/
	 	 $(".active .size").slideDown();
	 	  $(".active .active").slideDown();
})
	 //导入尾部
	$(".btmfen").load("data/shoes.html");
	//导入头部
	$(".header").load("data/head.html")
})





