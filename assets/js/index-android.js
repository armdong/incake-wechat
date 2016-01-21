// 微信首页android兼容
(function() {

	$(function() {

		initLayout();
		$(window).on('resize', function() {
			initLayout();
		});

		function initLayout() {
			//判断是否是微信内置X5内核浏览器
			if (client.wechat && client.qq) {
				// 拿到所有应用flex布局的元素
				var $aFlex = $('.flex-container');
				$.each($aFlex, function(i, $ele) {
					adoptLayout($ele);
				});
			}
		}

		// 适配不支持flex
		function adoptLayout($oContainer) {

			var iCol = 0;
			var iMaxH = 0;
			var iWidth = $($oContainer).width();

			// 调整布局方式 float:left
			var $aItem = $($oContainer).children('.flex-item');
			$aItem.css({
				'float': 'left',
				'display': 'block'
			});

			if ($($oContainer).hasClass('column-2')) {
				iCol = 2;
			} else if ($($oContainer).hasClass('column-3')) {
				iCol = 3;
			} else if ($($oContainer).hasClass('column-4')) {
				iCol = 4;
			} else if ($($oContainer).hasClass('column-5')) {
				iCol = 5;
			}

			// 设置padding
			var iPadding = (iWidth - $aItem.width() * iCol) / (iCol * 2.3);
			$aItem.css({
				'padding-left': iPadding + 'px',
				'padding-right': iPadding + 'px'
			});
			
			// 设置高度
			$.each($aItem, function(i, item) {
				var tmpH = $(item).height();
				iMaxH = tmpH > iMaxH ? tmpH : iMaxH;
			});

			var $aP = $aItem.find('.en');
			$aP.css({
				'white-space': 'nowrap',
				'overflow': 'hidden',
				'text-overflow': 'ellipsis'
			});


			// 城市切换兼容代码
			$('#city-group').find('span').eq(0).css({
				'margin-left': '3%'
			});

		}

	});

})();