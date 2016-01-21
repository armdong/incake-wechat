(function() {

	$(function() {
		fnFooterNav();		
		$(window).on('resize',function(){
			fnFooterNav();
		});
	});

	function fnFooterNav() {
		var $oNav = $('#nav');
		var $oNavList = $oNav.find('.nav-list');
		var $aNavLi = $oNavList.find('>li');
		var iLen = $aNavLi.length;
		var iNavWidth = $oNav.width();
		var iNavLiWidth = $aNavLi.width();
		var iMargin = (iNavWidth - iNavLiWidth * iLen) / (iLen * 2);
		$.each($aNavLi, function(i, ele) {
			$(ele).css({
				'margin': '0 ' + iMargin + 'px'
			});
		});
		$oNav.css({
			'opacity':'1'
		});
	}

})();