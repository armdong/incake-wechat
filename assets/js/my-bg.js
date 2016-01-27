(function(){
	
	$(function(){	
		fnInitVoice();
	});
	
	function fnInitVoice(){
		var $oUl = $('.voice-list');
		var $aUlLi = $oUl.find('.voice-item');
		var $aItemText = $aUlLi.find('.item-text');
		var $aBtnDel = $aUlLi.find('.item-del');
		
		//check model
		$.each($aItemText, function(i,ele) {			
			$(ele).on('click',function(){				
				$aUlLi.removeClass("active");
				$aUlLi.eq(i).addClass("active");
			});
		});		

		// delete model
		$.each($aBtnDel, function(i,ele) {			
			$(ele).on('click',function(){				
				$aUlLi.eq(i).remove();				
			});			
		});			
	}
	
})();
