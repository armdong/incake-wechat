(function(){

	$(document).ready(function(){
		fnInit();
	});

	function fnInit(){

		var $oContainer = $('#container'),
			$aBtn = $('.btn', $oContainer),
			$oPage1 = $('.page1', $oContainer),
			$oPage2 = $('.page2', $oContainer),
			$oBtnReg = $('.btn-reg', $oPage2),
			$oSlide1 = $('.slide1', $oPage2),
			$oSlide2 = $('.slide2', $oPage2),
			$oSlide1Title = $('.title', $oSlide1).find('span'),
			$oBtnVcode = $('.btn-vcode', $oSlide1),
			$oName = $('.txt-name', $oSlide1),
			$oMobile = $('.txt-mobile', $oSlide1),
			$oVcode = $('.txt-vcode', $oSlide1),
			tl = new TimelineLite();

		// page1 领券按钮点击事件
		$aBtn.on('click', function(){
			$oPage1.fadeOut(function() {
				$oPage2.fadeIn();
			});
		});

		// 获取验证码
		$oBtnVcode.on('click', function(){

			// 处理验证码以及是否是老会员逻辑
			// TODO

			$oSlide1Title.css({
				display: 'inline-block'
			});
		});

		// 注册领取红包
		$oBtnReg.on('click', function(){

			// 处理非空验证等等
			// TODO

			tl.clear();
			tl.to($oSlide1, 0.2, {
				left: '-100%',
				ease: Power0.easeOut,
				onComplete: function(){
					tl.to($oSlide2, 0.5, {
						left: '0',
						ease: Bounce.easeOut
					});
				}
			});
		});
	}

})();