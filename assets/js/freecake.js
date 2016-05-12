(function(){

	$(document).ready(function(){

		// 定位
		fnLocation();

		// 关闭提示层
		fnPage1Tip();

		// 切换到页面2
		fnGoPage2();

		// 页面2领取事件
		fnFetch();

		// 分享
		fnShare();

	});

	// 城市定位
	function fnLocation(){
		var $oPage1 = $('#page1'),
			$oLocation = $oPage1.find('.location'),
			$oP = $oLocation.find('>p'),
			$oUl = $oLocation.find('>ul'),
			$aLi = $oUl.find('>li');

		$oLocation.on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$oUl.slideToggle();
		});

		$aLi.each(function(index, el) {
			$(el).on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				$oP.html($(this).html());
				$(this).addClass('active').siblings().removeClass('active');
			});
		});
	}

	// 提示层
	function fnPage1Tip(){

		// 禁止页面滑动
		$('body').bind('touchmove', function(e) {
			e.preventDefault();
		});

		var $oPage1 = $('#page1'),
			$oMaskTip = $oPage1.find('.mask-tip'),
			$oMask = $('#mask');

		$oMaskTip.on('click', '.mask-tip-close', function(event) {
			event.preventDefault();
			/* Act on the event */
			$oMaskTip.hide(function() {
				$oMask.fadeOut();
				$('body').unbind('touchmove');
			});
		});
	}

	// 切换到页面2
	function fnGoPage2(){
		var $oPage1 = $('#page1'),
			$oPage2 = $('#page2');

		$oPage1.on('click', '.btn', function(event) {
			event.preventDefault();
			/* Act on the event */
			$oPage1.fadeOut(function(){
				$oPage2.fadeIn();
			});
		});
	}

	function fnFetch(){
		var $oPage2 = $('#page2'),
			$oFrm = $oPage2.find('.frm-register'),
			$oNotice = $oFrm.find('.exists-notice'),
			$oResult = $oPage2.find('.result');

		// TODO 处理字段验证及新老用户验证

		var isExists = false;	// 手机号是否存在
		var isSoldOut = false;	// 商品是否已售罄

		// 获取验证码
		$oFrm.on('click', '.btn-vcode', function(event) {
			event.preventDefault();
			/* Act on the event */

			// TODO 处理老用户检测，如果存在 isExists 设为 true
			isExists = true;	// 这里需要后台赋值

			if (isExists) {
				$oNotice.css('display', 'inline-block');
			}
		});

		// 领取事件
		$oFrm.on('click', '.btn-fetch', function(event) {
			event.preventDefault();
			/* Act on the event */

			// TODO 去数据库查询库存，如果售罄 isSoldOut 设为 true
			isSoldOut = false; 	// 手动设置为售罄

			if (isSoldOut) {
				$oResult.find('.result-ok').hide().siblings('.result-fail').show();
			}else{
				$oResult.find('.result-ok').show().siblings('.result-fail').hide();
			}

			$oFrm.fadeOut(function() {
				$oResult.fadeIn();
			});
		});
	}

	// 分享
	function fnShare(){
		var $oPage2 = $('#page2'),
			$oBtnShare = $oPage2.find('.btn-share'),
			$oMask = $('#mask'),
			$oMaskShare = $oPage2.find('.mask-share');

		$oBtnShare.on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$oMask.fadeIn(function(){

				// 禁止页面滑动
				$('body').bind('touchmove', function(e) {
					e.preventDefault();
				});

				$oMaskShare.fadeIn();
			});
		});
	}

})();