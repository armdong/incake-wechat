(function(){
	
	$(function(){
		
		fnInitTab();
		
		fnPay();

		// 取消订单
		fnCancelOrder();
		
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

	function fnCancelOrder(){
		var $oBtnCancel = $('.btn-cancel');
		var $oMaskOrder = $('.mask-order');
		var $oBtnOrderCancel = $oMaskOrder.find('.btn-order-cancel');
		var $oList = $oMaskOrder.find('.list');
		var $aLi = $oList.find('li');

		$oBtnCancel.on('click',function(){
			$oMaskOrder.show();
			$('body').bind('touchmove',function(e){
				e.preventDefault();
			});
		});
		
		$oBtnOrderCancel.on('click',function(){
			$oMaskOrder.hide();
			$('body').unbind('touchmove');
		});
		
		$aLi.on('click',function(){
			$(this).addClass('active').siblings('li').removeClass('active');
		});
	}
	
})();
