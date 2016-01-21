(function(){
	
	$(function(){		
		// 评分效果
		var $aUl = $('.item-content');
		$.each($aUl, function(i,ele) {
			fnScoreComment(ele);
		});	
		// 匿名评论切换
		fnAnonyComment();		
	});
	
	function fnScoreComment(oUl){		
		var $aLi = $(oUl).find('>li');		
		$.each($aLi, function(idx,ele) {			
			$(ele).on('click',function(){
				// 清除所有的active状态
				$aLi.removeClass('active');
				
				var index = idx;				
				for( var i =0; i <= $aLi.length; i++ ){					
					if( i <= index ){
						$aLi.eq(i).addClass('active');
					}					
				}				
			});			
		});		
	}
	
	function fnAnonyComment(){
		
		var $oP = $('.chk-comment');
		var $oSpan = $oP.find('.circle');
		
		$oP.on('click',function(){
			if($oSpan.hasClass('unchecked')){
				$oSpan.removeClass('unchecked').addClass('checked');
			}else{
				$oSpan.removeClass('checked').addClass('unchecked');
			}
		});
		
	}
	
})();