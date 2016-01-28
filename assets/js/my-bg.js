(function(){
	
	$(function(){	
		fnInitVoice();
	});
	
	function fnInitVoice(){
		var $oUl = $('.voice-list');
		var $aUlLi = $oUl.find('.voice-item');
		var $aItemText = $aUlLi.find('.item-text');
		var $aBtnDel = $aUlLi.find('.item-del');
		var $aItemPlay = $('.item-play');
		var $aItemPause = $('.item-pause')
		
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
	
})();
