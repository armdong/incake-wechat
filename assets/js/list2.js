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
	
	$(".mask").fadeIn(500);
	$(".buy-hide").show().animate({
			bottom:0
	},500);
	
	$('body').css({
		"overflow": "hidden",
		'z-index': '-1'
	});
	// 禁止页面拖动
	$('body').bind('touchmove',function(e){
		e.preventDefault();
	});
	document.getElementById('header').style.zIndex = 99;
	//关闭
	$(".close").click(function() {

		$(".buy-hide").fadeOut(500,function(){
			$(this).css('bottom','-50%');
		});
		$(".mask").fadeOut(500);
		
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
			$(".subtract").css("color", "#4f4f4f");
			$(".add").css("color", "#4f4f4f");
		}else if(number <= 1){
			$(".subtract").css("color", "#d2d2d2");
		}
	});
	/* 数量增 */
	$(".add").click(function() {
		if (number < 100) {
			number = parseInt(number) + 1;
			$(".countR .number").val(number); //更改数量
			$("#price").html(parseInt(number) * parseInt(price)); //更改价格
			$(".subtract").css("color", "#4f4f4f");
		}else{
			$(".add").css("color", "#d2d2d2");
		}
	});
	introduce();
}

/* 规格选择事件 */
function introduce() {
	var cur2 = $(".buyMde-list2 .cur2");
	$(".buyMde-list2 .type2").click(function() {
		cur2.removeClass("cur2");
		$(this).addClass("cur2");
		$(".countR .number").val(1); //更改数量
		cur2 = $(this);
		var aText = $(this).find('a').text();
		//修改规格信息
		switch (aText) {
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
			default:
				$('.buy-txtI').html("其他");
				$('.price').html("<span>￥<span id='price'>价格待定</span>&nbsp;</span>/其他");
				break;
		}
	});
}