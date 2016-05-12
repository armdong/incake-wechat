(function(){

	$(document).ready(function(){

		// 查询
		fnQuery();
	});

	function fnQuery(){
		var $oPage4 = $('#page4'),
			$oFrm = $oPage4.find('.frm-register'),
			$oResult = $oPage4.find('.result'),			
			$oCurrCount = $oResult.find('#currCount');

		var isSoldOut = false;	// 商品是否已售罄
		var currCount = 0;

		// 查询
		$oFrm.on('click', '.btn-result', function(event) {
			event.preventDefault();
			/* Act on the event */

			// TODO 去数据库查询库存，如果售罄 isSoldOut 设为 true
			isSoldOut = true; 	// 手动设置为售罄
			currCount = 4;

			if (isSoldOut) {
				$oResult.find('.result-ok').hide().siblings('.result-fail').show();
			}else{
				$oResult.find('.result-ok').show().siblings('.result-fail').hide();
				$oCurrCount.html(currCount);
				if (currCount ==4 ) {
					$oResult.find('.result-ok').find('.btn-buy').css('display', 'none').siblings('.btn-exchange').css('display', 'block');
				}
			}

			$oFrm.fadeOut(function() {
				$oResult.fadeIn();
			});
		});
	}

})();