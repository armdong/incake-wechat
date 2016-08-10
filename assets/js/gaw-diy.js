(function(window, document) {

    $(function() {

        var $oForm = $('#frmApply'),
            $oSelCategory = $oForm.find('#selCategories'),
            $oSelColor = $oForm.find('#selColors'),
            $oMaskCategory = $oForm.find('.mask-categoryPop'),
            $oMaskCategoryClose = $oMaskCategory.find('.mask-close'),
            $oMaskColor = $oForm.find('.mask-colorPop'),
            $oMaskColorClose = $oMaskColor.find('.mask-close'),
            $oTextarea = $oForm.find('#txtSummary'),
            $oLastWord = $oForm.find('#lastWord'),
            $oLastPhoto = $oForm.find('#lastPhoto'),
            $oMaskPhoto = $oForm.find('.mask-photoPop'),
            $oPhotoPop = $oForm.find('.photoPop'),
            iMaxLen = 800;

        var $oUpload = $oForm.find('.upload'),
            $oBtnAdd = $oUpload.find('.btn-add');

        // 种类下拉框改变事件
        $oSelCategory.on('change', function(e) {
            var val = $(this).val();
            if (val === '3') { // 多层
                $oMaskCategory.fadeIn();
            }
        });

        // 关闭种类下拉框
        $oMaskCategoryClose.on('click', function(e) {
            $oSelCategory.val('0'); // 设置第一项为选中
            $oMaskCategory.fadeOut();
        });

        // 颜色下拉框改变事件
        $oSelColor.on('change', function(e) {
            var val = $(this).val();
            if (val === '7') { // 其它
                $oMaskColor.fadeIn();
            }
        });

        // 关闭颜色下拉框
        $oMaskColorClose.on('click', function(e) {
            $oSelColor.val('0'); // 设置第一项为选中
            $oMaskColor.fadeOut();
        });

        $oTextarea.bind('input propertychange', function(e) {
            var text = $(this).val(),
                iLen = text.length;

            if (iLen > iMaxLen) {
                $oTextarea.val(text.substring(0, iMaxLen));
                iLen = iMaxLen;
            }
            $oLastWord.html(iMaxLen - iLen);
        });

        //预览选择图片
        $oUpload.on('click', '.photo', function(){
        	$oMaskPhoto.fadeIn();
        });

        //取消预览
        $oPhotoPop.on('click', function(e) {
            $oMaskPhoto.fadeOut();
        });

        //删除选择图片
        $oUpload.on('click', '.btn-close', function(){
        	$(this).closest('.photos').remove();
            var number = parseInt($oLastPhoto.text()) + 1; //更改可上传图片数量
            $oLastPhoto.text(number);
            if($oUpload.find('.photo').length < 3){
        		$oBtnAdd.show();
        	}
        });

        $oBtnAdd.on('click', function() {

            // 拼接photo模块
            var id = _.uniqueId('photo_');

            var html = '';
            html += '<div class="photos">';
            html += '<a href="javascript:;" class="photo"><img src="" id="' + id + '" /></a>';
            html += '<a href="javascript:;" class="btn-close"><img src="assets/imgs/gaw-diy/btn_close.png"/></a>';
            html += '</div>';

            var $html = $(html);
            $html.hide();

            // 追加到当前元素前面
            $(this).before($html);

            $('#uploadimg').click();
            compressImg('uploadimg', id, 480, function(){
            	if($oUpload.find('.photo').length >= 3){
            		$oBtnAdd.hide();
            	}
            	$html.show();
            });

        });

    });

})(window, document);
