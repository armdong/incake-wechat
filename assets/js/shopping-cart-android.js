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
				$.each($aFlex, function(i, ele) {
					adoptLayout(ele);
				});
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
			} else if ($(oContainer).hasClass('nav-list')) {
				$aItem.css({
					'padding-left': iPadding + 'px'
				});
			}

			// 设置高度
			$.each($aItem, function(i, item) {
				var tmpH = $(item).height();
				iMaxH = tmpH > iMaxH ? tmpH : iMaxH;
			});


			// 底部导航兼容代码
			if ($(oContainer).hasClass('nav-list')) {

				$(oContainer).css({
					'margin-left': '3%'
				});

				var $aNavLi = $(oContainer).find('.flex-item');

				$.each($aNavLi, function(i, ele) {

					var status = $(ele).hasClass('active') ? 'active' : 'normal';
					var $aLink = $(ele).find('a');
					var $imgDiv = $aLink.find('.img');
					$imgDiv.css({
						'background': 'none'
					});

					var iconUrl = '';
					if ($imgDiv.hasClass('icon-home')) {
						iconUrl = status == 'active' ? 'icon-home-hover' : 'icon-home';
					} else if ($imgDiv.hasClass('icon-cake')) {
						iconUrl = status == 'active' ? 'icon-cake-hover' : 'icon-cake';
					} else if ($imgDiv.hasClass('icon-tea')) {
						iconUrl = status == 'active' ? 'icon-tea-hover' : 'icon-tea';
					} else if ($imgDiv.hasClass('icon-cart')) {
						iconUrl = status == 'active' ? 'icon-cart-hover' : 'icon-cart';
					} else if ($imgDiv.hasClass('icon-me')) {
						iconUrl = status == 'active' ? 'icon-me-hover' : 'icon-me';
					}
					var htmlstr = '<img src="assets/imgs/icons/' + iconUrl + '.png" width="20" height="20" alt="">';
					$imgDiv.html($(htmlstr));

				});

			}

		}

	});

})();