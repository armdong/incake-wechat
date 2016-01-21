/*
 * 	@date:	2015/09/08
 * 	@auth:	wangmd
 *	@desc:	incake 微信端首页js
 */
(function() {

	$(function() {

		var $aImg = $('#index-swiper').find('img');
		var swiper = null;
		var containerWidth = 0;
		// 图片懒加载
		new LazyLoad();

		fnInitSwiper();
		fnInitCity();
		fnAdoptNav();
		fnAdoptFavours();

		$(window).on('resize', function() {
			fnInitSwiper();
			fnInitCity();
			fnAdoptNav();
			fnAdoptFavours();
		});

		function fnInitSwiper() {
			containerWidth = $('#index-swiper').width();
			$aImg.css({
				width: containerWidth,
				height: containerWidth / 2
			});
			if (swiper != null) {
				swiper.destroy();
			}
			swiper = null;
			swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				width: containerWidth,
				height: containerWidth / 2,
				loop: true,
				centeredSlides: true,
				autoplay: 5000,
				speed: 1000,
				autoplayDisableOnInteraction: false,
				preloadImages: false,
				lazyLoading: true
			});
		}

		function fnInitCity() {

			// 城市选择
			$('.location').on('click', function() {
				var $oMask = $('#mask');
				if ($oMask.hasClass('hide')) {
					$oMask.removeClass('hide');
					// 禁用页面touchmove
					$('body').bind('touchmove', function(e) {
						e.preventDefault();
					});
					fnFitCity();
				}
			});

			// 城市选择确认
			$('#btnCitySure').on('click', function() {
				var $oMask = $('#mask');
				if (!$oMask.hasClass('hide')) {
					$oMask.addClass('hide');
					// 禁用页面touchmove
					$('body').unbind('touchmove');
				}
			});

			// 城市切换
			var $oCity = $('#city-group');
			var $aCitySpan = $oCity.find('span');
			
			$.each($aCitySpan, function(i, ele) {
				$(ele).on('click', function() {
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
				});
			});
			
			function fnFitCity(){
				var $oCity = $('#city-group');
				var $aCitySpan = $oCity.find('span');
				var iCityW = $oCity.width();
				var iCitySpanW = $aCitySpan.width();			
				var iMargin = Math.floor((iCityW - iCitySpanW * 4 - 8)/8);
				
				$.each($aCitySpan, function(i, ele) {
					$(ele).css({
						'margin-left':iMargin+'px'
					});
				});
			}
		}

		// 菜单自适应
		function fnAdoptNav() {
			var $oCategory = $('#nav-category');
			var $aCategoryLi = $oCategory.find('>li');
			var iLen = $aCategoryLi.length;
			var iCategoryWidth = $oCategory.width();
			var iWidth = $aCategoryLi.width();

			// 根据菜单项的个数来布局
			$.each($aCategoryLi, function(i, ele) {
				$(ele).css({
					'left': i * (iCategoryWidth / iLen) + 'px',
					'margin-left': ((iCategoryWidth / iLen) - iWidth) / 2 + 'px'
				});
			});
			$oCategory.css({'opacity':'1'});
		}

		// 猜你喜欢
		function fnAdoptFavours() {
			var $oFavours = $('.favours-list');
			var $aFavoursLi = $oFavours.find('>li');
			$.each($aFavoursLi, function(i, ele) {
				$(ele).css({
					'float': i % 2 == 0 ? 'left' : 'right'
				});
			});
		}
	});

})();