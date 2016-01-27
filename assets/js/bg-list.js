(function(){
	
	$(function(){	
		fnInitVoice();
	});
	
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
	
})();
