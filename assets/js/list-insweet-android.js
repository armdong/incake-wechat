(function() {

	$(function() {

		initLayOut();
		$(window).on('resize', function() {
			initLayout();
		});

		function initLayOut() {

			//判断是否是微信内置X5内核浏览器
			if (client.wechat && client.qq) {
				// 拿到列表
				var $oList = $('.container-wrapper');
				adoptLayout();
				fnFixList($oList);
			}

		}

		function fnFixList($oList) {

			var $aListBox = $oList.find('.inner-box');
			$.each($aListBox, function(i, ele) {

				if (i % 2 == 0) {
					// 左边
					$(ele).css({
						'float': 'left'
					});
				} else {
					// 右边
					$(ele).css({
						'float': 'right'
					});
				}

			});
		}

		function adoptLayout() {
			// 拿到列表
			var $oList = $('.container-wrapper');
			var $aItem = $($oList).find('.inner-box');
			var iMaxH = 0;

			$aItem.css({
				'float': 'left',
				'display': 'inline-block'
			});

			// 设置高度
			$.each($aItem, function(i, item) {
				var tmpH = $(item).height();
				iMaxH = tmpH > iMaxH ? tmpH : iMaxH;
			});

		}

	});

})();