(function() {

	$(function() {

		// 格式化日期输入框的值
		initDateInput();
		// 配置信息处理事件
		fnInitSetting();
		// 支付方式改变事件
		fnPayTypeChange();
		// 优惠信息切换事件
		fnDiscountTab();
		// 代金卡券切换事件
		fnCouponTab();
		// 生日牌select事件
		fnBirthChange();
		// 贺卡select事件
		fnCardChange();
		// 发票select事件
		fnInvoiceChange();
		// 地址管理
		fnReceiverAddress();

	});

	function initDateInput() {
		var $oDate = $('#date-input');
		$oDate.on('blur', function() {
			var time = $(this).val();
			var formatTime = new Date(time);
			formatTime = formatTime.pattern('yyyy-MM-dd');
			$(this).val(formatTime);
		});
	}

	function fnInitSetting() {
		var $oSetting = $('.setting-list');
		var $aSettingItem = $oSetting.find('.setting-item');
		var $aHeader = $oSetting.find('.item-header');
		var $aContent = $oSetting.find('.item-content');
		var $aIcon = $oSetting.find('span.icon');
		$.each($aHeader, function(i, ele) {
			$(ele).on('click', function() {
				if ($aIcon.eq(i).hasClass('icon-close')) {
					$aIcon.removeClass('icon-open').addClass('icon-close');
					$aContent.hide();
					$aIcon.eq(i).removeClass('icon-close').addClass('icon-open');
					$aContent.eq(i).show();
				} else {
					$aIcon.eq(i).removeClass('icon-open').addClass('icon-close');
					$aContent.eq(i).hide();
				}
			});
		});
	}

	function fnPayTypeChange() {
		var $oPayment = $('.payment-list');
		var $aPaymentList = $oPayment.find('li');
		$aPaymentList.on('click', function() {
			var $oResult = $(this).parent().prev('.item-header').find('.item-result');
			$(this).addClass('active').siblings().removeClass('active');
			$oResult.html($(this).html());
		});
	}

	function fnDiscountTab() {
		var $oDiscount = $('.discount-list');
		var $oDiscountTitle = $oDiscount.find('.discount-title');
		var $oDiscountContent = $oDiscount.find('.discount-content');
		var $aDiscountTitleLi = $oDiscountTitle.find('>li');
		var $aDiscountContentLi = $oDiscountContent.find('>li');
		$.each($aDiscountTitleLi, function(i, ele) {
			$(ele).on('click', function() {
				$(this).addClass('active').siblings().removeClass('active');
				$aDiscountContentLi.eq(i).addClass('active').siblings().removeClass('active');
			});
		});
		
		var $oTicket = $oDiscountContent.find('.discount-ticket-list');
		var $oResult = $oDiscount.prev().find('.item-result');
		// add ticket
		$('#btnAddTicket').on('click',function(){
			// 文本框输入值未做验证
			var txtTicket = $('#txtTicket').val();
			var htmlstr = '<li>优惠券 ' + txtTicket + ' <i class="icon-close"></i></li>';
			// 因为优惠券只能用一张，所以直接html()
			$oTicket.html(htmlstr);
			// 设置标题
			$oResult.html('优惠券 ' + txtTicket);
			$('#txtTicket').val('');
		});
		// delete ticket
		$oTicket.delegate('.icon-close','click',function(){
			$(this).parent().parent().empty();
			$oResult.html('暂无');
		});
		// 我的优惠券下拉change事件
		$('.my-discount-list').on('change',function(){
			var $oSelected = $(this).children('option:selected');
			if($oSelected.val() == 0){
				$oResult.html('暂无');
				// 同时清空输入的优惠券
				$oTicket.empty();
			}else{
				$oResult.html($oSelected.text());
			}
		});
	}

	function fnCouponTab() {
		var $oCoupon = $('.coupon-list');
		var $oCouponTitle = $oCoupon.find('.coupon-title');
		var $oCouponContent = $oCoupon.find('.coupon-content');
		var $aCouponTitleLi = $oCouponTitle.find('li');
		var $aCouponContentLi = $oCouponContent.find('li');
		$.each($aCouponTitleLi, function(i, ele) {
			$(ele).on('click', function() {
				$(this).addClass('active').siblings().removeClass('active');
				$aCouponContentLi.eq(i).addClass('active').siblings().removeClass('active');
			});
		});
		
		var $oCouponTicket = $oCoupon.find('.ticket-coupon-list');
		var $oCouponCash = $oCoupon.find('.cash-coupon-list');
		var $oResult = $oCoupon.prev().find('.item-result');
		
		// add ticket
		$('#btnCouponTicket').on('click',function(){
			var txtTicketCard = $('#txtTicketCard');
			var num = getLastNCharacter(txtTicketCard.val(),5);
			var htmlstr = '<li>蛋糕卡 卡号后5位 '+ num +' <i class="icon-close"></i></li>';
			if($oCouponTicket.find('li').length>0){
				$oCouponTicket.prepend(htmlstr);
				clearTicketInput();
			}else{
				$oCouponTicket.html(htmlstr);
				clearTicketInput();
			}
			var ticketNum = $oCouponTicket.find('li').length;
			$oResult.html('已添加'+ticketNum+'张蛋糕卡');
			// 清空现金券
			$oCouponCash.empty();
		});
		
		// delete ticket
		$oCouponTicket.delegate('.icon-close','click',function(){
			$(this).parent().remove();
			var ticketNum = $oCouponTicket.find('li').length;
			if(ticketNum>0){
				$oResult.html('已添加'+ticketNum+'张蛋糕卡');
			}else{
				$oResult.html('暂无');
			}			
		});
		
		// add cash
		$('#btnCouponCash').on('click',function(){
			var txtCashCard = $('#txtCashCard');
			var num = getLastNCharacter(txtCashCard.val(),5);
			var htmlstr = '<li>现金券 卡号后5位 '+ num +' <i class="icon-close"></i></li>';
			if($oCouponCash.find('li').length>0){
				$oCouponCash.prepend(htmlstr);
				clearCashInput();
			}else{
				$oCouponCash.html(htmlstr);
				clearCashInput();
			}
			var cashNum = $oCouponCash.find('li').length;
			$oResult.html('已添加'+cashNum+'张现金券');
			// 清空蛋糕卡
			$oCouponTicket.empty();
		});
		
		// delete cash
		$oCouponCash.delegate('.icon-close','click',function(){
			$(this).parent().remove();
			var cashNum = $oCouponCash.find('li').length;
			if(cashNum>0){
				$oResult.html('已添加'+cashNum+'张现金券');
			}else{
				$oResult.html('暂无');
			}			
		});
		
		function clearTicketInput(){
			$('#txtTicketCard').val('');
			$('#txtTicketCardPwd').val('');
		}
		
		function clearCashInput(){
			$('#txtCashCard').val('');
			$('#txtCashCardPwd').val('');
		}
	}

	function fnBirthChange() {
		var $oBirth = $('.birth-list');
		var $oBirthSel = $oBirth.find('.birth-sel');
		var $oInput = $oBirth.find('input');
		var $oResult = $oBirth.prev().find('.item-result');
		
		$oBirthSel.on('change', function() {
			var $oSelected = $(this).children('option:selected').val();
			if ($oSelected == 3) {
				$oInput.show();
			} else {
				$oInput.hide();
			}
			
			var $birthSelType = parseInt($oSelected);
			switch($birthSelType){
				case 0:
					$oResult.html('暂无');
				break;
				case 1:
					$oResult.html('生日快乐');
				break;
				case 2:
					$oResult.html('Happy Birthday');
				break;
				case 3:
					$oResult.html('自定义');
				break;
			}
		});
	}

	function fnCardChange() {
		var $oCard = $('.card-list');
		var $oCardSel = $oCard.find('.card-sel');
		var $oInput = $oCard.find('textarea');
		var $oP = $oCard.find('p');
		var $oResult = $oCard.prev().find('.item-result');
		
		$oCardSel.on('change', function() {
			var $oSelected = $(this).children('option:selected').val();
			if ($oSelected != 0) {
				$oInput.show();
				$oP.show();
			} else {
				$oInput.hide();
				$oP.hide();
			}
			
			var $cardSelType = parseInt($oSelected);
			switch($cardSelType){
				case 0:
					$oResult.html('暂无');
				break;
				case 1:
					$oResult.html('生日');
				break;
				case 2:
					$oResult.html('商务');
				break;
			}
		});
	}

	function fnInvoiceChange() {
		var $oInvoice = $('.invoice-list');
		var $oInvoiceSel1 = $oInvoice.find('.invoice-sel-1');
		var $oInvoiceSel2 = $oInvoice.find('.invoice-sel-2');
		var $oInvoiceSel3 = $oInvoice.find('.invoice-sel-3');
		var $oInput = $oInvoice.find('input');
		var $oResult = $oInvoice.prev().find('.item-result');
		
		$oInvoiceSel1.on('change', function() {
			var $oSelected = $(this).children('option:selected').val();
			if ($oSelected == 0) {
				$oInvoiceSel2.hide();
				$oInvoiceSel3.hide();
				$oInput.hide();
			} else if ($oSelected == 1) {
				$oInvoiceSel2.show();
				$oInvoiceSel3.show();
				$oInput.hide();
			} else {
				$oInvoiceSel2.show();
				$oInvoiceSel3.show();
				$oInput.show();
			}
			
			var $invoiceSelType = parseInt($oSelected);
			switch($invoiceSelType){
				case 0:
					$oResult.html('暂无');
				break;
				case 1:
					$oResult.html('个人');
				break;
				case 2:
					$oResult.html('公司');
				break;
			}
		});
	}
	
	function getLastNCharacter(str,n){
		return str.substring(str.length-(n-1),str.length);
	}
	
function fnReceiverAddress(){
		
		var $oReceiverInfo = $('.receive-info');
		var $oBtnReceiverInfo = $oReceiverInfo.find('>a');		
		var $oAddressWrapper = $('.receiver-address-wrapper');
		var $oContent = $oAddressWrapper.find('.addr-list');
		var $aBtn = $oAddressWrapper.find('.address-btns');		
		var $oBtnCancel = $aBtn.find('.btn-addr-list-cancel');
		
		var $oSetDefault = $oContent.find('.set-default').find('>span');
		
		// 从上往下滑出
		$oBtnReceiverInfo.on('click',function(){
			$oAddressWrapper.slideDown();
		});
		
		$oBtnCancel.on('click',function(){
			$oAddressWrapper.slideUp();
		});
				
		// 设置默认地址
		$oSetDefault.on('click',function(){
			var $oCheckBox = $(this).find('.check-box');
			if($oCheckBox.hasClass('checked')){
				$oCheckBox.removeClass('checked').addClass('unchecked');
			}else{
				$oCheckBox.removeClass('unchecked').addClass('checked');
			}
		});
		
	}

})();