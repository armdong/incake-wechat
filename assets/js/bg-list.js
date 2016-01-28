(function(){
	
	$(function(){	
		//check voice
		fnInitVoice();
		//submit
		fnBtnSubmit();
		
	});
	
	//check voice
	function fnInitVoice(){
		var $oUl = $('.bg-list');
		var $aUlLi = $oUl.find('.bg-item');
		var $aItemText = $aUlLi.find('.item-text');
		
		//check model
		$.each($aItemText, function(i,ele) {			
			$(ele).on('click',function(){				
				$aUlLi.removeClass("active");
				$aUlLi.eq(i).addClass("active");
			});
		});		

	}
	
	//submit
	function fnBtnSubmit(){
		var $popupTip = $('.popup-tip');
		var $btnSure = $('.btn-sure');
		var $btnReturn = $('.btn-return');
		
		$btnSure.on('click',function(){
			$popupTip.removeClass("hide");
		});
		
		$btnReturn.on('click',function(){
			$popupTip.addClass("hide");
		});
		
	}
	
})();
