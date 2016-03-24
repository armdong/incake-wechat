(function(){

	$(function(){

		var $oContainer = $('#reg-container'),
			$oPage1 = $('#page1'),
			$oPage2 = $('#page2'),
			$oPage3 = $('#page3');

		var tl = new TimelineLite();

		var $oPage1Btn = $oPage1.find('.btn'),
			$oPage2Reg = $oPage2.find('.btn-reg'),
			$oPage3Btn = $oPage3.find('.btn'),
			$oNotice = $oPage3.find('.notice');

		// 点击page1领取按钮
		$oPage1Btn.on('click',function(){
			tl.clear();
			tl.to($oPage1, 1, {
				opacity: 0,
				onComplete: function(){
					$oPage1.hide();
					tl.clear();
					tl.to($oPage2, 1, {
						opacity: 1,
						onStart: function(){
							$oPage2.show();
						}
					});
				}
			});
		});

		// 点击page2注册按钮
		$oPage2Reg.on('click',function(){

			// TODO 处理注册逻辑

			tl.clear();
			tl.to($oPage2, 1, {
				opacity: 0,
				onComplete: function(){
					$oPage2.hide();
					tl.clear();
					tl.to($oPage3, 1, {
						opacity: 1,
						onStart: function(){
							$oPage3.show();
						}
					});
				}
			});
		});

		// 点击page3分享按钮
		$oPage3Btn.on('click',function(){

			tl.clear();
			tl.to($oNotice, 0.6, {
				top: '0',
				ease: Bounce.easeOut
			});
		});

		// 点击page3遮罩层事件
		$oNotice.on('click',function(){

			tl.clear();
			tl.to($oNotice, 0.6, {
				top: '-100%',
				ease: Power2.easeOut
			});
		});

	});

})();