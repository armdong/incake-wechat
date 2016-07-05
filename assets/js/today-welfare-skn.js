(function() {

    $(document).ready(function() {
        fnInit();

        // 定位
        fnLocation();
    });

    $(window).on('load', function(event) {
        event.preventDefault();
        /* Act on the event */
        fnAnimationRunning();
    });

    // 城市定位
    function fnLocation() {
        var $oPage1 = $('#container').find('.page1'),
            $oLocation = $oPage1.find('.location'),
            $oP = $oLocation.find('>p'),
            $oUl = $oLocation.find('>ul'),
            $aLi = $oUl.find('>li'),
            $oMask = $oPage1.find('.mask');

        // 下拉列表是否处于下拉状态
        var isExpand = false;

        $oLocation.on('click', function(event) {
            event.preventDefault();

            if (!isExpand) { // 非下拉状态
                $oMask.fadeIn('fast', function() {
                    $oUl.slideDown('fast');
                });
            } else {
                $oUl.slideUp('fast', function() {
                    $oMask.fadeOut('fast');
                });
            }

            // 每次点击状态取反
            isExpand = !isExpand;
        });

        $aLi.each(function(index, el) {
            $(el).on('click', function(event) {
                event.preventDefault();
                /* Act on the event */
                $oP.html($(this).html());
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    }

    // 开始动画
    function fnAnimationRunning() {
        
        // 拿到 animation 动画目标元素
        var $aTarget = $('#circleContainer').find('.circleProgress'),
            $oTime = $('#currentSecond'),
            currTime = $oTime.html(),
            iTimer = null,
            $oTitle = $('#titleTip'),
            $oBtnList = $('#btnList');

        // 给个延时保证用户能看到动画开始
        setTimeout(function() {
            $aTarget.css({
                '-webkit-animation-play-state': 'running',
                'animation-play-state': 'running'
            });
            iTimer = setInterval(function() {
                currTime = parseInt(currTime, 10);
                if (currTime > 0) {
                    currTime--;
                } else {
                    currTime = 0;
                    clearInterval(iTimer);
                }
                $oTime.html(currTime);
            }, 1000);
        }, 500);

        // 动画结束调用事件
        $aTarget.filter('.leftcircle').on('webkitAnimationEnd animationend', function(event) {
            event.preventDefault();
            //console.log('end');
            /* Act on the event */
            $aTarget.css({
                '-webkit-animation-play-state': 'paused',
                'animation-play-state': 'paused'
            });
            $oTitle.html('60秒已过');
            $oBtnList.find('.timeout').show();

            // 移除btn点击事件
            $oBtnList.find('.btn').off('click');
        });
    }

    function fnInit() {

        var $oContainer = $('#container'),
            $aBtn = $('.btn', $oContainer),
            $oPage1 = $('.page1', $oContainer),
            $oPage2 = $('.page2', $oContainer),
            $oBtnReg = $('.btn-reg', $oPage2),
            $oSlide1 = $('.slide1', $oPage2),
            $oSlide2 = $('.slide2', $oPage2),
            $oSlide1Title = $('.title', $oSlide1).find('span'),
            $oBtnVcode = $('.btn-vcode', $oSlide1),
            $oName = $('.txt-name', $oSlide1),
            $oMobile = $('.txt-mobile', $oSlide1),
            $oVcode = $('.txt-vcode', $oSlide1),
            tl = new TimelineLite();

        // page1 领券按钮点击事件
        $aBtn.on('click', function() {
            $oPage1.fadeOut(function() {
                $oPage2.fadeIn();
            });
        });

        // 获取验证码
        $oBtnVcode.on('click', function() {

            // 处理验证码以及是否是老会员逻辑
            // TODO

            $oSlide1Title.css({
                display: 'inline-block'
            });
        });

        // 注册领取红包
        $oBtnReg.on('click', function() {

            // 处理非空验证等等
            // TODO

            tl.clear();
            tl.to($oSlide1, 0.2, {
                left: '-100%',
                ease: Power0.easeOut,
                onComplete: function() {
                    tl.to($oSlide2, 0.5, {
                        left: '0',
                        ease: Bounce.easeOut
                    });
                }
            });
        });
    }

})();
