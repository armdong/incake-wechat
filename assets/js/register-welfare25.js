(function() {

    $(function() {

        var $oBtnBottom = $('#cakes a'),
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
        	
            $oBtnFooter.on('click', function() {
                fnScrollTop($oFrmRegister);
            });
            
            $oBtnVcode.on('click', function() {
                // 验证重复获取验证码
	    		if(count == 0){
		    		count = 1;
			    	$oBtnVcode.addClass("active").text('59" 后重新发送');
			    	var interval = setInterval(function(){
			    		$oBtnVcode.text(time-- +'" 后重新发送');
			    		if(time==-1){
			    			count = 0;
			    			clearInterval(interval);
			    			time = 58;
			    			$oBtnVcode.removeClass("active").text('获取验证码');
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
            var $oBtnWebsite = $(".btn-website"),
            	$oMaskResult = $('#mask-result'),
                $oMaskClose = $oMaskResult.find('.btn-result-close'),
                $oResultLogin = $oMaskResult.find('.result-login'),
            	$oBtnVcode2 = $oResultLogin.find('#btn-vcode2'),
            	$aInput = $oResultLogin.find('input'),
                $oResultWebsite = $oMaskResult.find('.result-website'),
                $oResultOk = $oMaskResult.find('.result-ok'),
                $oResultFail = $oMaskResult.find('.result-fail'),
                $oBtnRegister = $('#btn-register'),
                $oBtnRegister2 = $oMaskResult.find('#btn-register2'),
                isLogin = false,
				isUserExists = false;   // 用户是否存在 存在：true，不存在：false
			
			$oBtnWebsite.on('click', function(event) {
				event.preventDefault();
                $("body").css({overflow:"hidden"});
                $oResultWebsite.show(function(){
                    $oMaskResult.show();
                });
			});
			
            $oBtnRegister.on('click', function(event) {
                event.preventDefault();
                $("body").css({overflow:"hidden"});

                // TODO 处理新老用户检测及登录注册逻辑

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
            
            $oBtnBottom.on('click', function(event) {
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
			
			$oBtnVcode2.on('click', function() {
                // 验证重复获取验证码
	    		if(count == 0){
		    		count = 1;
			    	$oBtnVcode2.css({'background-color':'#99807f'}).text('59" 后重新发送');
			    	var interval2 = setInterval(function(){
			    		$oBtnVcode2.text(time-- +'" 后重新发送');
			    		if(time==-1){
			    			count = 0;
			    			clearInterval(interval2);
			    			time = 58;
			    			$oBtnVcode2.css({'background-color':'#e9546b'}).text('获取验证码');
			    		}
			    	},1000);
		    	}
            });
			
            $oBtnRegister2.on('click', function(event) {
                event.preventDefault();
                $("body").css({overflow:"hidden"});

                // TODO 处理新老用户检测
				
				$oResultLogin.hide();
                if (isUserExists) {
                    $oResultFail.fadeIn(500);
                }else{
                    $oResultOk.fadeIn(500);
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
