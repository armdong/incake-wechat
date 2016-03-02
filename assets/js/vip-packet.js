(function(){

    $(function(){

        var $oContainer = $('#container'),
            $oPage01 = $oContainer.find('.page-01'),                    // 第一页
            $oPage02 = $oContainer.find('.page-02'),                    // 第二页
            $oPage03 = $oContainer.find('.page-03'),                    // 第三页
            $oBtnPacket = $oPage01.find('.btn-packet'),                 // 红包
            $oBtnRules = $oContainer.find('.btn-rules'),                // 活动规则按钮
            $oMaskRules = $oContainer.find('.mask-rules'),              // 活动规则弹出层
            $oBtnRulesClose = $oMaskRules.find('.btn-rules-close'),     // 活动规则关闭按钮
            $oBtnReg = $oPage02.find('.btn-reg'),                       // 注册按钮
            $oBtnShare = $oPage03.find('.btn-share'),                   // 分享按钮
            $oShareBox = $oPage03.find('.share-box'),                   // 分享弹出层
            $oShareBoxClose = $oShareBox.find('.btn-share-close'),      // 分享弹出层关闭按钮
            $oBtnFollow = $oContainer.find('.btn-follow'),              // 关注按钮
            $oFollowBox = $oContainer.find('.follow-box'),            // 关注弹出层
            $oBtnFollowClose = $oFollowBox.find('.btn-follow-close');  // 关注弹出层关闭按钮

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
                }, 800);
            });
            $oBtnRulesClose.on('click',function(){
                $oMaskRules.animate({
                    'top': '100%'
                }, 800);
            });
        }

        // 注册
        fnReg();

        function fnReg(){
            $oBtnReg.on('click',function(){

                // TODO 处理注册逻辑

                $oPage02.fadeOut(1000, function(){
                    $oPage03.fadeIn();
                });
            });
        }

        // 分享
        fnShare();

        function fnShare(){
            $oBtnShare.on('click',function(){
                $oShareBox.show();
            });
            $oShareBoxClose.on('click',function(){
                $oShareBox.hide();
            });
        }

        // 关注
        fnFollow();

        function fnFollow(){
            $oBtnFollow.on('click',function(){
                $oFollowBox.show();
            });
            $oBtnFollowClose.on('click',function(){
                $oFollowBox.hide();
            });
        }

    });

})();