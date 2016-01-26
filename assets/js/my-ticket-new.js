(function(){
	
	$(function(){
		
		fnInitTab();

		// 添加优惠券
		fnAddTicket();
		
	});
	
	function fnInitTab(){		
		var $oTitle = $('.tab-title');
		var $aTitleLi = $oTitle.find('.title-item');
		var $oContent = $('.tab-content');
		var $aContentLi = $oContent.find('.content-item');		
		$.each($aTitleLi, function(i,ele) {			
			$(ele).on('click',function(){				
				$(this).addClass('active').siblings().removeClass('active');		
				$aContentLi.eq(i).addClass('active').siblings().removeClass('active');
			});			
		});		
	}

	function fnAddTicket(){

		var $oBtnAdd = $('.btn-new-ticket');
		var $oMask = $('#mask-ticket');
		var $oBtnCancel = $oMask.find('.btn-ticket-cancel');

		$oBtnAdd.on('click',function(){
			$oMask.show();
			$('body').bind('touchmove',function(e){
				e.preventDefault();
			});
		});

		$oBtnCancel.on('click',function(){
			$oMask.hide();
			$('body').unbind('touchmove');
		});
	}
	
})();