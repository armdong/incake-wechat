(function(){
	$(document).ready(function(){
		fnInit();
	});

	function fnInit(){
		var $oContainer = $('#container'),
			$oSection1 = $('#section1', $oContainer),
			$oBtn1 = $('.btn1', $oSection1),
			$oBtn2 = $('.btn2', $oSection1),
			$oSection2 = $('#section2', $oContainer),
			$oSection3 = $('#section3', $oContainer);

		$oBtn1.on('click', function(){
			$oSection1.fadeOut(function(){
				$oSection2.fadeIn();
			});
		});

		$oBtn2.on('click', function(){
			$oSection1.fadeOut(function(){
				$oSection3.fadeIn();
			});
		});
	}
})();