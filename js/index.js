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
	
});


$(function(){
	// 为面包屑导航添加事件
	$("ul.left_nav").on("click","li",function(){
		var nav = $(this).find("a").text();
		$(this).parent().parent().parent().find(".right .mb_nav").text("主页 / "+nav)
	})
})