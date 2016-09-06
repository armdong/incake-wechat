(function($) {

    $(function() {
        fnQuestionnaire();
    });

    function fnQuestionnaire() {
        var $oForm = $('#formQuestion'),
            $aQuestion = $oForm.find('.question'),
            iMaxLen = 200;

        // 答案切换事件
        $aQuestion.find('ul').on('click', 'li', function() {
            $(this).addClass('active').siblings('li').removeClass('active');

            var isQ2 = $(this).closest('.question').hasClass('q2');
            if (isQ2) {
                if ($(this).hasClass('other')) {
                    $('#otherTast').show();
                } else {
                    $('#otherTast').hide();
                }
            }
        });

        // textarea 限制字数
        $('#otherTast').find('textarea').bind('input propertychange', function(e) {
            var text = $(this).val(),
                iLen = text.length;

            if (iLen > iMaxLen) {
                $(this).val(text.substring(0, iMaxLen));
                iLen = iMaxLen;
            }
            $('#otherTast').find('.count').html(iMaxLen - iLen);
        });

        // 表单提交
        $oForm.find('.btn-submit').on('click', function(){

        	// TODO 这里做非空验证，单选题必须选一个

        	// 是否是登录状态
        	var isLogined = false;

        	if(isLogined){
        		$oForm.find('.logined').fadeIn();
        	} else {
        		$oForm.find('.unlogined').fadeIn();
        	}
        });

        // 关闭弹层
        $oForm.find('.mask-tip').on('click', '.tip-close', function(){
        	$(this).closest('.mask-tip').fadeOut();
        });
    }

})(jQuery);
