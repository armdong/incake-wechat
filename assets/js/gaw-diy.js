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
			$aPhoto = $oForm.find('.photo'),
			$aBtnClose = $oForm.find('.btn-close'),
			$oLastPhoto = $oForm.find('#lastPhoto'),
			$oMaskPhoto = $oForm.find('.mask-photoPop'),
			$oPhotoPop = $oForm.find('.photoPop'),
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
		
		//预览选择图片
		$aPhoto.on('click',function(e){
			//var src = $(this).children().attr("src"); //此处获得选中图片的预览图地址
			//$oPhotoPop.children().attr('src',src);
			$oMaskPhoto.fadeIn();
		});
		
		//取消预览
		$oPhotoPop.on('click',function(e){
			$oMaskPhoto.fadeOut();
		});
		
		//删除选择图片
		$aBtnClose.on('click',function(e){
			$(this).closest('.photos').remove();
			var number = parseInt($oLastPhoto.text())+1;//更改可上传图片数量
			$oLastPhoto.text(number);
		});

	});

})(window, document);