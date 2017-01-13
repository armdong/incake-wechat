(function(window, document) {

    $(function() {

        var $oForm = $('#frmApply'),
            $oSelCategory = $oForm.find('#selCategories'),
            $oSelColor = $oForm.find('#selColors'),
            $oBtnSubmit = $oForm.find('.btn-submit'),
            $oMaskCategory = $oForm.find('.mask-categoryPop'),
            $oMaskCategoryClose = $oMaskCategory.find('.mask-close'),
            $oMaskColor = $oForm.find('.mask-colorPop'),
            $oMaskColorClose = $oMaskColor.find('.mask-close'),
            $oTextarea = $oForm.find('#txtSummary'),
            $oLastWord = $oForm.find('#lastWord'),
            $oLastPhoto = $oForm.find('#lastPhoto'),
            $oMaskPhoto = $oForm.find('.mask-photoPop'),
            $oPhotoPop = $oForm.find('.photoPop'),
            iMaxLen = 800,
            iMaxCount = 3,
            $oUpload = $oForm.find('.upload'),
            $oBtnAdd = $oUpload.find('.btn-add'),
            $oMaskTip = $('#mask-tip'),
            $oBtnClose = $oMaskTip.find('.btn-close');

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
        $oUpload.on('click', '.photo', function() {
            $oMaskPhoto.fadeIn();
        });

        //取消预览
        $oPhotoPop.on('click', function(e) {
            $oMaskPhoto.fadeOut();
        });

        //删除选择图片
        $oUpload.on('click', '.btn-close', function() {
            $(this).closest('.photos').remove();
            if ($oUpload.find('.photo').length < 3) {
                $oBtnAdd.show();
            }
            // 更新可上传图片张数
            updateUploadCount();
        });

        $oBtnAdd.on('click', function() {

            // 拼接photo模块
            var photoId = _.uniqueId('photo_');
            var fileInputId = _.uniqueId('fileInput_');

            var html = '';
            html += '<div class="photos">';
            html += '<a href="javascript:;" class="photo"><img src="" id="' + photoId + '" /></a>';
            html += '<a href="javascript:;" class="btn-close"><img src="assets/imgs/gaw-diy/btn_close.png"/></a>';
            html += '<input type="file" id="' + fileInputId + '" hidden>';
            html += '</div>';

            var $html = $(html);
            $html.hide();

            // 追加到当前元素前面
            $(this).before($html);

            // 触发input[type=file] 的点击事件
            $('#' + fileInputId + '').click();

            compressImg(fileInputId, photoId, 480, function() {
                if ($oUpload.find('.photo').length >= 3) {
                    $oBtnAdd.hide();
                }
                $html.show();

                // 更新可上传图片张数
                updateUploadCount();
            });

        });

        // 更新还可上传图片张数
        function updateUploadCount() {
            var count = $oUpload.find('.photo').length;
            $oLastPhoto.text(iMaxCount - count);
        }
        
        $oBtnSubmit.on('click',function(){
        	$oMaskTip.fadeIn();
        });
        
        $oBtnClose.on('click',function(){
        	$oMaskTip.fadeOut();
        });

    });

})(window, document);
