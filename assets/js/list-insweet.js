(function() {

	$(function() {
		// 图片懒加载
		new LazyLoad();
		// 加入购物车
		fnAddCart();
		fnFixInnerBoxImg();
	});

	/* 加入购物车 */
	function fnAddCart() {
		var $oCart = $('#mask-cart');
		var $oBuyHide = $('.buy-hide');
		var $oBtnContinue = $('#btnContinue');
		$('#btnAddCart').on('click', function() {
			$oCart.removeClass('hide');
			$oBuyHide.addClass('hide');
			$('.mask').addClass('hide');
		});
		$oBtnContinue.on('click', function() {
			$oCart.addClass('hide');
			$(".close").trigger('click');
		});
	}
	
	function fnFixInnerBoxImg(){
		var $oWrapper = $('.container-wrapper');
		var $aInnerBox = $oWrapper.find('.inner-box');
		var $aInnerBoxImg = $aInnerBox.find('.link').find('img');
		$.each($aInnerBoxImg, function(i,ele) {
			var iWidth = $(ele).width();
			$(ele).height(iWidth);
		});
	}

})();

/* (下午茶)头部菜单切换 */
function headClick() {
	var current = $("#menu .current");
	$("#menu li").click(function() {
		current.removeClass("current");
		$(this).addClass("current");
		current = $(this);
	});
}