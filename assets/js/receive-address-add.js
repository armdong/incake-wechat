(function(){
	
	$(function(){
		
		// 默认地址点击事件
		fnDefaultAddrCheck();
		
	});
	
	function fnDefaultAddrCheck(){
		
		var $oAddrSetting = $('.addr-setting');
		var $aAddrSettingLi = $oAddrSetting.find('li');
		
		$aAddrSettingLi.eq(1).on('click',function(){
			
			var $oCheckBox = $(this).find('.check-box');
			if($oCheckBox.hasClass('checked')){
				$oCheckBox.removeClass('checked').addClass('unchecked');
			}else{
				$oCheckBox.removeClass('unchecked').addClass('checked');
			}
			
		});
		
	}
	
})();