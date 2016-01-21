/* 底部菜单切换 */
function btmClick() {
	var current2 = $("#btm-menu .current2");
	$("#btm-menu li").click(function() {
		current2.removeClass("current2");
		$(this).addClass("current2");
		current2 = $(this);
	});
}

/* 页面蛋糕点击事件 */
function pageAdd() {
	$(".buy-hide").removeClass("hide");
	$(".mask").removeClass("hide");
	$('body').css({
		"overflow": "hidden",
		'z-index': '-1'
	});
	// 静止页面拖动
	$('body').bind('touchmove',function(e){
		e.preventDefault();
	});
	document.getElementById('header').style.zIndex = 99;
	//关闭
	$(".close").click(function() {
		$(".buy-hide").addClass("hide");
		$(".mask").addClass("hide");
		$('body').css("overflow", "auto");
		$('body').unbind('touchmove');
		document.getElementById('header').style.zIndex = 599;
	});
	//选购数量&价格
	var number = $(".countR .number").val();
	var price = $("#price").html();
	/* 数量减 */
	$(".subtract").click(function() {
		if (number > 1) {
			number -= 1;
			$(".countR .number").val(number);
			$("#price").html(parseInt(number) * parseInt(price)); //更改价格
			$(".add").css("background-color", "#0055a2");
			
			if(number <= 1){
				$(".subtract").css("background-color", "#d7d7d7");
			}			
		} 
	});
	/* 数量增 */
	$(".add").click(function() {
		if (number < 100) {
			number = parseInt(number) + 1;
			$(".countR .number").val(number); //更改数量
			$("#price").html(parseInt(number) * parseInt(price)); //更改价格
			$(".subtract").css("background-color", "#0055a2");
		} else {
			$(".add").css("background-color", "#d7d7d7");
		}
	});
	introduce();
}

/* 规格选择事件 */
function introduce() {
	var cur = $(".buyMde-list .cur");
	$(".buyMde-list .type").click(function() {
		cur.removeClass("cur");
		$(this).addClass("cur");
		cur = $(this);
		//修改规格信息
		switch (this.text) {
			case "1.5磅":
				$('.buy-txtI').html("适合美味独享、1-2人食用");
				$('.price').html("<span>￥<span id='price'>169</span>&nbsp;</span>/1.5磅");
				break;
			case "2.5磅":
				$('.buy-txtI').html("适合亲密分享、2-3人食用");
				$('.price').html("<span>￥<span id='price'>229</span>&nbsp;</span>/2.5磅");
				break;
			case "3.5磅":
				$('.buy-txtI').html("适合家人共享、3-5人食用");
				$('.price').html("<span>￥<span id='price'>369</span>&nbsp;</span>/3.5磅");
				break;
			case "5.5磅":
				$('.buy-txtI').html("适合生日派对、5-7人食用");
				$('.price').html("<span>￥<span id='price'>499</span>&nbsp;</span>/5.5磅");
				break;
		}
	});
}