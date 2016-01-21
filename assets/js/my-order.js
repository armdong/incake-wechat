(function(){
	
	$(function(){
		
		fnInitTab();
		
		fnPay();
		
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
	
	function fnPay(){
		
		var $oBtnPay = $('.btn-pay');
		var $oMaskPayment = $('.mask-payment');
		var $oBtnPaymentCancel = $('.btn-payment-cancel');
		var $oPaymentList = $oMaskPayment.find('.payment-list');
		var $aPaymentItem = $oPaymentList.find('li');
		
		$oBtnPay.on('click',function(){
			$oMaskPayment.show();
			$('body').bind('touchmove',function(e){
				e.preventDefault();
			});
		});
		
		$oBtnPaymentCancel.on('click',function(){
			$oMaskPayment.hide();
			$('body').unbind('touchmove');
		});
		
		$aPaymentItem.on('click',function(){
			$(this).addClass('active').siblings('li').removeClass('active');
		});
		
	}
	
})();
