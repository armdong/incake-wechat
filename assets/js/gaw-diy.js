(function(window, document){

	$(function(){

		var $oForm = $('#frmApply'),
			$oSelCategory = $oForm.find('#selCategories'),
			$oSelColor = $oForm.find('#selColors'),
			$oMaskCategory = $oForm.find('.mask-categoryPop'),
			$oMaskCategoryClose = $oMaskCategory.find('.mask-close'),
			$oMaskColor = $oForm.find('.mask-colorPop'),
			$oMaskColorClose = $oMaskColor.find('.mask-close'),
			$oTextarea = $oForm.find('#txtSummary'),
			$oLastWord = $oForm.find('#lastWord'),
			iMaxLen = 800;

		// 种类下拉框改变事件
		$oSelCategory.on('change', function(e){
			var val = $(this).val();
			if (val === '3') {	// 多层
				$oMaskCategory.fadeIn();
			}
		});

		// 关闭种类下拉框
		$oMaskCategoryClose.on('click', function(e){
			$oSelCategory.val('0');	// 设置第一项为选中
			$oMaskCategory.fadeOut();
		});

		// 颜色下拉框改变事件
		$oSelColor.on('change', function(e){
			var val = $(this).val();
			if (val === '7') {	// 其它
				$oMaskColor.fadeIn();
			}
		});

		// 关闭颜色下拉框
		$oMaskColorClose.on('click', function(e){
			$oSelColor.val('0');	// 设置第一项为选中
			$oMaskColor.fadeOut();
		});

		$oTextarea.bind('input propertychange', function(e){
			var text = $(this).val(),
        		iLen = text.length;

        	if (iLen > iMaxLen) {
        		$oTextarea.val(text.substring(0, iMaxLen));
        		iLen = iMaxLen;
        	}
        	$oLastWord.html(iMaxLen - iLen);
		});

	});

})(window, document);