(function() {

    $(document).ready(function() {

        // loading
        fnLoading();
    });

    function fnLoading() {
        $(window).on('touchstart', function(event) {
            event.preventDefault();
            /* Act on the event */
            return false;
        });
        fnLoadImg();
    }

    function fnLoadImg() {

    	// 图片数组
        var arrImg = ['top.jpg', 'li3_bd.png', 'bottom_title.jpg', 'li1_bd.png', 'mask_bg.png', 'li2_bd.png', 'yellow_man.png', 'center.jpg', 'li3_bg.png', 'li1_bg.png', 'li3_btn.png', 'li1_btn.png', 'li2_btn.png', 'btn_buy_bg.png', 'li2_bg.png', 'icon_ok.png'];
        var num = 0;
        var url = 'assets/imgs/childrens-day/';

        $.each(arrImg, function(index, obj) {
            var objImg = new Image();
            objImg.src = url + obj;
            objImg.onload = function() {
                num++;
                if (num == arrImg.length) {
                    $('#loading').animate({
                        opacity: 0
                    }, 1000, function() {
                        $(this).remove();
        				fnGetGift();
                    });
                }
            };
            //图片加载错误或不全
            objImg.onerror = function() {
                $('#loading').animate({
                    opacity: 0
                }, 1000, function() {
                    $(this).remove();
    				fnGetGift();
                });
            };
        });
    }

    function fnGetGift() {
        var $oUl = $('#btnList'),
            $aBtn = $('.btn', $oUl),
            $oMask = $('#mask'),
            $oMaskReg = $('.mask-reg', $oMask),
            $oMaskResult = $('.mask-result', $oMask);

        var isUserExists = false; // 是否是老用户
        var isSecondShare = false; // 是否是第二次分享

        $aBtn.each(function(index, el) {
            $(el).on('click', function(event) {
                event.preventDefault();
                /* Act on the event */

                // 领取礼品 弹出注册提示框
                $oMask.fadeIn(function() {
                    $oMaskReg.fadeIn();
                });
            });
        });

        // 注册获取验证码
        $oMaskReg.on('click', '.btn-vcode', function(event) {
            event.preventDefault();
            /* Act on the event */

            // TODO 验证是否是老用户，如果是老用户，隐藏姓名输入框
            isUserExists = true;

            if (isUserExists) {
                $oMaskReg.find('.txt-name').parent('li').fadeOut();
            }
        });

        // 提交注册
        $oMaskReg.on('click', '.btn-reg', function(event) {
            event.preventDefault();
            /* Act on the event */

            // TODO 处理注册逻辑，新用户注册并领券，老用户领券
            isUserExists = false;
            isSecondShare = false;

            // 注册提示框隐藏，结果提示层显示
            $oMaskReg.fadeOut(function() {
                $oMaskResult.fadeIn();
                if (isSecondShare) { // 第二次分享
                    $oMaskResult.find('.result-again').fadeIn();
                } else {
                    if (isUserExists) { // 老用户
                        $oMaskResult.find('.result-old').fadeIn();
                    } else { // 新用户
                        $oMaskResult.find('.result-new').fadeIn();
                    }
                }
            });
        });
    }

})();
