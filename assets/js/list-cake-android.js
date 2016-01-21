(function() {

	$(function() {

		var orientation = window.orientation;
		switch (orientation) {
			case 90:
			case -90:
				orientation = 'landscape';
				break;
			default:
				orientation = 'portrait';
				break;
		}

		initLayout();

		$(window).on('resize', function() {
			initLayout();
		});

		function initLayout() {
			//判断是否是微信内置X5内核浏览器
			if (client.wechat && client.qq) {
				// 拿到所有应用flex布局的元素
				var $aFlex = $('.flex-container');
				$.each($aFlex, function(i, ele) {
					adoptLayout(ele);
				});
				initCakeMenu();
				fixCakeList();
			}
		}

		function initCakeMenu() {

			var $oCakeMenu = $('#cake-menu');
			$oCakeMenu.css({
				'border-bottom': '1px solid #dcdcdc',
				'background': '#fff'
			});
			var $aCakeMenuLi = $oCakeMenu.find('li');
			$aCakeMenuLi.css({
				'border-bottom': 'none',
				'border-left': 'none',
				'margin-left': '0'
			});
			$aCakeMenuLi.eq(1).css({
				'margin-left': '-1px',
				'border-left': '1px solid #dcdcdc'
			});

			var $oBtnCakeHide = $oCakeMenu.siblings('.cake-hide').find('.cake-type');
			var $oBtnSendHide = $oCakeMenu.siblings('.send-hide').find('.send-type');
			var marginLeft = $(window).width() * 0.25;
			$oBtnCakeHide.css({
				'margin-left': marginLeft + 'px'
			});
			$oBtnSendHide.css({
				'margin-left': marginLeft + 'px'
			});
			
			var $oCakeHide = $oCakeMenu.nextAll('.cake-hide');
			var $oSendHide = $oCakeMenu.nextAll('.send-hide');
			$oCakeHide.css({'border-top':'1px solid #dcdcdc'});
			$oSendHide.css({'border-top':'1px solid #dcdcdc'});

		}

		function fixCakeList() {
			// 产品列表
			var $oCakeList = $('.cake-list');
			$oCakeList.css({
				'width': '98%',
				'margin': '0 auto'
			});
			var $aCakeLi = $oCakeList.find('.flex-item');
			for (var i = 0; i < $aCakeLi.length; i++) {
				if (i % 2 == 1) {
					$($aCakeLi[i]).css({
						'float': 'right',
						'width':'49%'
					});
				} else {
					$($aCakeLi[i]).css({
						'float': 'left',
						'width':'49%'
					});
				}
			}
		}

		// 适配不支持flex
		function adoptLayout(oContainer) {

			var iRow = 0;
			var iCol = 0;
			var iWidth = $(window).width();
			var iMaxH = 0;

			// 调整布局方式 float:left
			var $aItem = $(oContainer).children('.flex-item');
			$aItem.css({
				'float': 'left',
				'display': 'inline-block'
			});

			if ($(oContainer).hasClass('column-2')) {
				iCol = 2;
			} else if ($(oContainer).hasClass('column-3')) {
				iCol = 3;
			} else if ($(oContainer).hasClass('column-4')) {
				iCol = 4;
			} else if ($(oContainer).hasClass('column-5')) {
				iCol = 5;
			}

			iRow = $aItem.length / iCol;
			// 设置宽度
			$aItem.css({
				'width': (iWidth - iCol * 10) / iCol + 'px'
			});

			// 设置padding
			var iPadding = (iWidth - $aItem.width() * iCol) / (iCol * 2.5);
			if ($(oContainer).hasClass('cake-list')) {
				// 商品列表
				$aItem.css({
					'width': '49%'
				});
			} else if ($(oContainer).hasClass('category-link')) {
				$aItem.css({
					'width': '20%',
					'margin-left': '2%'
				});
			} else if ($(oContainer).hasClass('transport-link')) {
				$aItem.css({
					'width': '28%',
					'margin-left': '2%'
				});
			}

			// 设置高度
			$.each($aItem, function(i, item) {
				var tmpH = $(item).height();
				iMaxH = tmpH > iMaxH ? tmpH : iMaxH;
			});

		}

	});

})();