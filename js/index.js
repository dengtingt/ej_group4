$(function(){
	// 为导航添加事件
	$("ul.left_nav").on("click","li",function(){
		var url = $(this).attr("url");
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
		$("#wrapper").load(url);
	})

	// 模拟点击第一个li
	$("ul.left_nav > li:first-child").trigger("click");
<<<<<<< HEAD


	// 鼠标放上去当前按钮添加背景色
	$("ul.left_nav").on("mouseover","li",function(){
		$(this).addClass('mouseover')
	})
	// 鼠标移开当前按钮失去背景色
	$("ul.left_nav").on("mouseout",'li',function(){
		$(this).removeClass('mouseover')
	})
=======
>>>>>>> bebb9503f28f7d56cccfb688fd55d82b13fd0ea8
	
});


$(function(){
	// 为面包屑导航添加事件
	$("ul.left_nav").on("click","li",function(){
		var nav = $(this).find("a").text();
		$(this).parent().parent().parent().find(".right .mb_nav").text("主页 / "+nav)
	})
})