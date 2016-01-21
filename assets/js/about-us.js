(function() {

	$(function() {
		fnInitTab();
		fnAboutUs();
	});

	function fnInitTab() {
		var $oTitle = $('.tab-title');
		var $aTitleLi = $oTitle.find('.title-item');
		var $oContent = $('.tab-content');
		var $aContentLi = $oContent.find('.content-item');
		$.each($aTitleLi, function(i, ele) {
			$(ele).on('click', function() {
				$(this).addClass('active').siblings().removeClass('active');
				$aContentLi.eq(i).addClass('active').siblings().removeClass('active');
				
				// 配送范围做特殊处理
				if($aContentLi.eq(i).find('.content-wrap').hasClass('wrap-area')){
					fnArea();
				}
			});			
		});
	}

	function fnAboutUs() {
		var $oList = $('.list');
		var $aListLi = $oList.find('.item');
		var $aListTitle = $oList.find('.item-title');
		$.each($aListTitle, function(i, ele) {
			$(ele).on('click', function() {
				if ($aListLi.eq(i).hasClass('open')) {
					$aListLi.eq(i).removeClass('open').addClass('close');
				} else {
					$aListLi.eq(i).removeClass('close').addClass('open');
				}
			});
		});
	}
	
	function fnArea() {
			var $tabTitle = $('.tab-title');
			var $tabContent = $('.tab-content');
			var $oPinch = $tabContent.find('.pinch-zoom');
			var viewHeight = $(window).height();
			var iTitleH = $tabTitle.height();
			var iDisH = viewHeight - iTitleH;
			$oPinch.height(iDisH);
			$('div.pinch-zoom').each(function() {
				new RTP.PinchZoom($(this), {});
			});
			$('.pinch-zoom-container').height(iDisH);
		}

})();
