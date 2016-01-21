(function() {

	$(function() {
		// 蛋糕分类和配送方式切换
		fnCakeMenuToggle();
		// 选择蛋糕分类
		fnChangeCategory();
		// 选择配送方式
		fnChangeTransport();
		// 加入购物车
		fnAddCart();
	});

	// 蛋糕分类和配送方式切换
	function fnCakeMenuToggle() {
		var $aLink = $('#cake-menu').find('li');
		// 分类按钮
		$aLink.eq(0).find('a').on('click', function() {
			var $oArrow = $(this).find('.arrow');
			$oArrow.hasClass('arrow-up') ? $oArrow.removeClass('arrow-up') : $oArrow.addClass('arrow-up');
			cakeHide($oArrow);
			var siblingsArrow = $aLink.eq(1).find('a').find('.arrow');
			if (siblingsArrow.hasClass('arrow-up')) {
				siblingsArrow.removeClass('arrow-up');
			}
		});
		// 配送方式
		$aLink.eq(1).find('a').on('click', function() {
			var $oArrow = $(this).find('.arrow');
			$oArrow.hasClass('arrow-up') ? $oArrow.removeClass('arrow-up') : $oArrow.addClass('arrow-up');
			sendHide($oArrow);
			var siblingsArrow = $aLink.eq(0).find('a').find('.arrow');
			if (siblingsArrow.hasClass('arrow-up')) {
				siblingsArrow.removeClass('arrow-up');
			}
		});

		// 分类确定按钮
		$('#btnCategorySure').on('click', function() {
			$aLink.eq(0).find('a').trigger('click');
			// TODO ajax获取分类数据
		});

		// 配送方式确定按钮
		$('#btnTransportSure').on('click', function() {
			$aLink.eq(1).find('a').trigger('click');
		});
	}

	// 切换分类
	function fnChangeCategory() {
		var $oCategory = $('.cake-hide');
		var $aCategory = $oCategory.find('.type');
		$aCategory.on('click', function() {
			$(this).siblings().removeClass('cur');
			$(this).addClass('cur');
			$('#type').html($(this).text());
		});
	}

	// 切换运输方式
	function fnChangeTransport() {
		var $oTransport = $('.send-hide');
		var $aTransport = $oTransport.find('.type');
		$aTransport.on('click', function() {
			$(this).siblings().removeClass('cur');
			$(this).addClass('cur');
		});
	}

	/* 分类菜单点击事件 */
	function cakeHide($oArrow) {

		if (!$(".send-hide").hasClass('hide')) {
			$(".send-hide").addClass("hide");
			$(".mask").toggleClass("hide");
		}
		$(".cake-hide").toggleClass("hide");
		$(".mask").toggleClass("hide");
		//禁用遮罩层后页面
		if (!$(".mask").hasClass('hide')) {
			$('body').css("overflow", "hidden");
			// 禁用页面拖动
			$('body').bind('touchmove', function(e) {
				e.preventDefault();
			});
		} else {
			$('body').css("overflow", "auto");
			$('body').unbind('touchmove');
		}
	}

	/* 配送方式菜单点击事件 */
	function sendHide($oArrow) {
		if (!$(".cake-hide").hasClass('hide')) {
			$(".cake-hide").addClass("hide");
			$(".mask").toggleClass("hide");
		}
		$(".send-hide").toggleClass("hide");
		$(".mask").toggleClass("hide");
		//禁用遮罩层后页面
		if (!$(".mask").hasClass('hide')) {
			$('body').css("overflow", "hidden");
			// 禁用页面拖动
			$('body').bind('touchmove', function(e) {
				e.preventDefault();
			});
		} else {
			$('body').css("overflow", "auto");
			$('body').unbind('touchmove');
		}
	}
	
	/* 加入购物车 */
	function fnAddCart(){
		var $oCart = $('#mask-cart');
		var $oBuyHide = $('.buy-hide');
		var $oBtnContinue = $('#btnContinue');
		$('#btnAddCart').on('click',function(){
			$oCart.removeClass('hide');
			$oBuyHide.addClass('hide');
			$('.mask').addClass('hide');
		});
		$oBtnContinue.on('click',function(){
			$oCart.addClass('hide');
			$(".close").trigger('click');
		});
	}
	
})();