(function() {
	$(function() {
		/* 获取验证码 */
		var $oCart = $('#mask-cart');
		var $oBtnContinue = $('#btnContinue');
		$('.get-code').on('click',function(){
			$oCart.removeClass('hide');
			$(".buy-hide").addClass("hide");
			$(".mask").addClass("hide");
			$('body').bind('touchmove',function(e){
				e.preventDefault();
			});
		});
		$oBtnContinue.on('click',function(){
			$oCart.addClass('hide');
			$('body').unbind('touchmove');
		});
		
	});
})();