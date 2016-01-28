(function(){
	
	$(function(){	
		
		//play or paush
		fnPlayPause();
		//check voice
		fnInitVoice();
		//submit
		fnBtnSubmit();
		
	});
	
	//play or paush
	function fnPlayPause(){
		var $aItemPlay = $('.item-play');
		var $aItemPause = $('.item-pause')
		
		//play
		$.each($aItemPlay, function(i,ele) {			
			$(ele).on('click',function(){		
				
				$aItemPlay.css('display','block');
				$aItemPause.css('display','none');
				
				$(this).css('display','none');
				$aItemPause.eq(i).css('display','block');
			});
		});	
		
		//paush
		$.each($aItemPause, function(i,ele) {			
			$(ele).on('click',function(){				
				$(this).css('display','none');
				$aItemPlay.eq(i).css('display','block');;
			});
		});	
		
	}
	
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
