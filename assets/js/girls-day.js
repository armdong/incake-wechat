(function() {

    $(function() {

        var $oGirl = $('#girls-day'),
            $oHeader = $oGirl.find('.header'),
            $oMain = $oGirl.find('.main'),
            viewH = $(window).height(),
            iHeaderH = $oHeader.height(),
            $oPage1 = $oMain.find('.page-01'),
            $oPage2 = $oMain.find('.page-02'),
            $oPage3 = $oMain.find('.page-03');

        // 自适应高度
        fnAdoptHeight();

        // 调整main高度
        function fnAdoptHeight() {
            $oMain.height(viewH - iHeaderH);
        }

        // 窗口大小改变时，重新计算main高度
        $(window).on('resize', function() {
            viewH = $(window).height();
            iHeaderH = $oHeader.height();
            fnAdoptHeight();
        });

        // 拆红包
        fnOpenPacket();

        function fnOpenPacket() {
            var $oBtnOpen = $oMain.find('.btn-open');
            $oBtnOpen.on('click', function() {
                // 切换到page2
                $oPage1.fadeOut(500, function() {
                    $oPage2.fadeIn();
                });
            });
        }

        // 领取红包
        fnReg();

        function fnReg(){
            var $oBtnReg = $oMain.find('.btn-reg');
            $oBtnReg.on('click',function(){
                
                // TODO 处理注册逻辑
                
                // 切换到page3
                $oPage2.fadeOut(500, function() {
                    $oPage3.fadeIn();
                });
            });
        }

    });

})();
