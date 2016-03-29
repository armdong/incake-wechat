(function(){

	$(function(){

		fnInit();

	});

	function fnInit(){

		var $oBtn = $('#btn'),
			$oMask = $('#mask');

		$oBtn.on('click',function(){

			// TODO 处理领取逻辑

			$oMask.fadeIn();
		});

	}

})();