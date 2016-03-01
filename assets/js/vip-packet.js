(function(){

    $(function(){

        var $oContainer = $('#container'),
            $oPage01 = $oContainer.find('.page-01'),
            $oPage02 = $oContainer.find('.page-02'),
            $oPage03 = $oContainer.find('.page-03'),
            $oBtnPacket = $oPage01.find('.btn-packet'),
            $oBtnRules = $oPage02.find('.btn-rules'),
            $oMaskRules = $oPage02.find('.mask-rules'),
            $oBtnRulesClose = $oMaskRules.find('.btn-rules-close'),
            $oBtnReg = $oPage02.find('.btn-reg');

        // 打开红包
        fnOpenPacket();

        function fnOpenPacket(){

            // 点击打开按钮
            $oBtnPacket.on('click',function(){
                $oPage01.fadeOut(1000, function(){
                    $oPage02.fadeIn();
                });
            });
        }

        // 活动规则
        fnRules();

        function fnRules(){
            $oBtnRules.on('click',function(){
                $oMaskRules.animate({
                    'top': '0'
                }, 1000);
            });
            $oBtnRulesClose.on('click',function(){
                $oMaskRules.animate({
                    'top': '100%'
                }, 1000);
            });
        }

        // 注册
        fnReg();

        function fnReg(){
            $oBtnReg.on('click',function(){
                $oPage02.fadeOut(1000, function(){
                    $oPage03.fadeIn();
                });
            });
        }

    });

})();