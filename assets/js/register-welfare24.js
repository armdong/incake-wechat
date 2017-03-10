(function() {

    $(function() {

        var $oBtnBottom = $('.btn-bottom'),
            clientH = $(window).height(),
			
            $oBtnFooter = $('#float-footer'),
            iBtnFooterH = $oBtnFooter.height(),
			$oCoupon = $('#coupon'),
			$aBtnCoupon = $oCoupon.find('.btn-coupon'),
            iCouponT = $oCoupon.offset().top,
            count = 0, // 验证重复获取验证码
            time = 58;

        fnNav();

        // 注册按钮点击事件
        fnRegister();

        $(window).on('scroll', function() {

            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT + clientH > iCouponT) {
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
                fnScrollTop($oCoupon);
            });
            $oBtnFooter.on('click', function() {
                fnScrollTop($oCoupon);
            });
        }

        // 滑倒指定位置
        function fnScrollTop($obj) {
            $('html,body').animate({ scrollTop: $obj.offset().top }, 800);
        }

        // 领取代金券事件
        function fnRegister(){
            var $oMaskResult = $('#mask-result'),
                $oMaskClose = $oMaskResult.find('.btn-result-close'),
                $oResultLogin = $oMaskResult.find('.result-login'),
            	$oBtnVcode = $oResultLogin.find('#btn-vcode'),
            	$aInput = $oResultLogin.find('input'),
                $oResultOk = $oMaskResult.find('.result-ok'),
                $oResultFail = $oMaskResult.find('.result-fail'),
                $oBtnRegister = $('#btn-register'),
                isLogin = false,
				isUserExists = false;   // 用户是否存在 存在：true，不存在：false;

            $aBtnCoupon.on('click', function(event) {
                event.preventDefault();
                $("body").css({overflow:"hidden"});

                // TODO 处理新老用户检测及登录注册逻辑
				if(isLogin){
					if (isUserExists) {
	                    $oResultFail.show(function(){
	                        $oMaskResult.show();
	                    });
	                }else{
	                    $oResultOk.show(function(){
	                        $oMaskResult.show();
	                    });
	                }
				}else{
					$oResultLogin.show(function(){
                        $oMaskResult.show();
                    });
				}
                
            });
			
			$aInput.on('focus',function() {
				$(this).closest('li').css({'border-bottom':'1px solid #e9546b'});
			});
			
			$aInput.on('blur',function() {
				$(this).closest('li').css({'border-bottom':'1px solid #ddd'});
			});
			
            $oBtnVcode.on('click', function() {
                // 验证重复获取验证码
	    		if(count == 0){
		    		count = 1;
			    	$oBtnVcode.css({'background-color':'#99807f'}).text('59" 后重新发送');
			    	var interval = setInterval(function(){
			    		$oBtnVcode.text(time-- +'" 后重新发送');
			    		if(time==-1){
			    			count = 0;
			    			clearInterval(interval);
			    			time = 58;
			    			$oBtnVcode.css({'background-color':'#e9546b'}).text('获取验证码');
			    		}
			    	},1000);
		    	}
            });
            
            $oBtnRegister.on('click', function(){
            	$oResultLogin.hide();
				if (isUserExists) {
                    $oResultFail.show();
                }else{
                    $oResultOk.show();
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
