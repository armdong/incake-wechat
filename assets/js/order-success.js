(function() {

    $(function() {

        fnShare();

    });

    function fnShare() {
        var $oContainer = $('.container-wrapper'),
            $oBtnShare = $oContainer.find('.btn-share'),
            $oMask = $oContainer.find('.mask-share'),
            tl = new TimelineLite();

        $oBtnShare.on('click', function(event) {

            // TODO 这里处理提交团购申请处理逻辑


            // 以下代码为了查看分享效果，上线时应删除
            tl.clear();
            tl.to($oMask, 0.6, {
                top: '0',
                ease: Bounce.easeOut
            });

        });

        // 点击遮罩层事件
        $oMask.on('click', function() {

            tl.clear();
            tl.to($oMask, 0.6, {
                top: '-100%',
                ease: Power2.easeOut
            });
        });
    }

})();
