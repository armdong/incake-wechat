(function() {
	$(function() {
		//登录方式切换
		$('.login-title').on('click',function(){
			//判断是否是已选中状态
			if(!$(this).hasClass('check')){
				$(this).addClass('check');
				$(this).siblings('span').removeClass('check');
				$('.get-code').toggleClass('hide');
				$('.prompt').toggleClass('hide');
				$('.attention').toggleClass('hide');
				$('.forgot-pwd').toggleClass('hide');
			}
		});
		
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