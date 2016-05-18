(function() {

    $(document).ready(function() {
        fnGetGift();
    });

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
                if (isSecondShare) {	// 第二次分享
                    $oMaskResult.find('.result-again').fadeIn();
                } else {
                    if (isUserExists) {	// 老用户
                        $oMaskResult.find('.result-old').fadeIn();
                    } else {	// 新用户
                        $oMaskResult.find('.result-new').fadeIn();
                    }
                }
            });
        });
    }

})();
