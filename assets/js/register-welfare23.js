(function() {

    $(function() {

        var $oBtnBottom = $('.btn-bottom'),
            clientH = $(window).height(),
			
            $oBtnFooter = $('#float-footer'),
            iBtnFooterH = $oBtnFooter.height(),

            $oFrmRegister = $('#frm-register'),
            iFrmRegisterT = $oFrmRegister.offset().top,
            $oBtnVcode = $oFrmRegister.find('#btn-vcode'),
            count = 0, // 验证重复获取验证码
            time = 58;

        fnNav();

        // 注册按钮点击事件
        fnRegister();

        $(window).on('scroll', function() {

            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT + clientH > iFrmRegisterT) {
                $oBtnFooter.hide();
            } else {
                $oBtnFooter.show();
            }

        });
        $(window).on('resize', function() {
            clientH = $(window).height();
            iBtnFooterH = $oBtnFooter.height();
        });
		

        function fnNav() {
            $oBtnBottom.on('click', function() {
                fnScrollTop($oFrmRegister);
            });
            $oBtnFooter.on('click', function() {
                fnScrollTop($oFrmRegister);
            });
            $oBtnVcode.on('click', function() {
                // 验证重复获取验证码
	    		if(count == 0){
		    		count = 1;
			    	$oBtnVcode.css({'background-color':'#99807f','border-color':'#99807f'}).text('59" 后重新发送');
			    	var interval = setInterval(function(){
			    		$oBtnVcode.text(time-- +'" 后重新发送');
			    		if(time==-1){
			    			count = 0;
			    			clearInterval(interval);
			    			time = 58;
			    			$oBtnVcode.css({'background-color':'#c34637','border-color':'#de6d5f'}).text('获取验证码');
			    		}
			    	},1000);
		    	}
            });
        }

        // 滑倒指定位置
        function fnScrollTop($obj) {
            $('html,body').animate({ scrollTop: $obj.offset().top }, 800);
        }

        // 注册按钮点击事件
        function fnRegister(){
            var $oMaskResult = $('#mask-result'),
                $oMaskClose = $oMaskResult.find('.btn-result-close'),
                $oResultOk = $oMaskResult.find('.result-ok'),
                $oResultFail = $oMaskResult.find('.result-fail'),
                $oBtnRegister = $('#btn-register');

            $oBtnRegister.on('click', function(event) {
                event.preventDefault();
                $("body").css({overflow:"hidden"});

                // TODO 处理新老用户检测及登录注册逻辑

                var isUserExists = false;   // 用户是否存在 存在：true，不存在：false

                if (isUserExists) {
                    $oResultFail.show(function(){
                        $oMaskResult.show();
                    });
                }else{
                    $oResultOk.show(function(){
                        $oMaskResult.show();
                    });
                }
            });

            $oMaskClose.on('click', function(event) {
                event.preventDefault();
                /* Act on the event */
                $oMaskResult.find('.result-info').hide(function(){
                    $oMaskResult.hide();
                    $("body").css({overflow:"auto"}); 
                });
            });
        }

    });

})();
