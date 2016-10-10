(function() {

    $(function() {
        fnQuestionnaire();
    });

    function fnQuestionnaire() {
        var $oForm = $('#formQuestion'),
            $aQuestion = $oForm.find('.question'),
            iMaxLen = 200,
            $oBtnSubmit = $oForm.find('.btn-submit'),
            $oResultReg = $('#result-reg'),
            $oMaskResult = $('#mask-result'),
	        $oMaskClose = $oMaskResult.find('.btn-result-close'),
	        $oResultLogin = $oMaskResult.find('.result-login'),
	        $oResultFalse = $oMaskResult.find('.result-false'),
	        $oResultTrue = $oMaskResult.find('.result-true'),
	        $oBtnRegister = $('#btn-register');

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
        $oBtnSubmit.on('click', function(){

        	// TODO 非空验证，单选题必须选一个
			var reg = $aQuestion.find('.active').length == 4 ? true : false;
			
			if(reg){
				// 是否是登录状态
	        	var isLogin = false;
	
				if (isLogin) {
					checkStatus(status);
	            }else{
	                $oResultLogin.fadeIn(function(){
	                    $oMaskResult.fadeIn();
	                });
	            }
			}else{
				$oResultReg.fadeIn(function(){
                    $(this).fadeOut(2500);
                });
			}
			
        });
        
        $oBtnRegister.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
           
            checkStatus(status);
            
        });
		
        $oMaskClose.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $oMaskResult.find('.result-info').hide(function(){
                $oMaskResult.hide();
            });
        });

    }
    
    // TODO 检测是否已领取
    function checkStatus(){
    	var $oMaskResult = $('#mask-result'),
	        $oResultLogin = $oMaskResult.find('.result-login'),
	        $oResultFalse = $oMaskResult.find('.result-false'),
	        $oResultTrue = $oMaskResult.find('.result-true'),
	        status = true;	   // 用户是否领取 已领：true，未领：false
    	
    	$oResultLogin.hide();
        //判断用户是否领取 已领：true，未领：false
        if (status) {
            $oResultFalse.fadeIn(function(){
                $oMaskResult.fadeIn();
            });
        }else{
        	$oResultTrue.fadeIn(function(){
                $oMaskResult.fadeIn();
            });
        	
        }
    }

})();
