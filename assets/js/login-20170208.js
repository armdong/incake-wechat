(function() {
	$(function() {
		
		/* 获取验证码 */
		var $oCart = $('#mask-cart');
		var $oBtnContinue = $('#btnContinue');
		$('.get-code').on('click',function(){
			$oCart.show();
			$(".mask").addClass("hide");
			$('body').bind('touchmove',function(e){
				e.preventDefault();
			});
		});
		$oBtnContinue.on('click',function(){
			$oCart.hide();
			$('body').unbind('touchmove');
		});
		
		
	});
})();