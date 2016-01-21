(function(){
	
	$(function(){		
		fnInitAddress();		
	});
	
	function fnInitAddress(){
		var $oUl = $('.address-list');
		var $aUlLi = $oUl.find('.address-item');
		var $aBtnDel = $aUlLi.find('.item-del');		
		// delete model
		$.each($aBtnDel, function(i,ele) {			
			$(ele).on('click',function(){				
				$aUlLi.eq(i).remove();				
			});			
		});			
	}
	
})();
