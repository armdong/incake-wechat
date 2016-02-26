(function() {

    $(function() {

        fnTab();

        // 下一步 充值&兑换
        fnNext();

        // 充值
        fnPayment();
        // 兑换
        fnMsg();

    });

    function fnTab() {
        var $oTabNav = $('#tab-nav'),
            $aNavLi = $oTabNav.find('>li'),
            $oTabBody = $('#tab-body'),
            $aBodyLi = $oTabBody.find('>li');

        $.each($aNavLi, function(i, ele) {
            $(ele).on('click', function() {
                $(this).addClass('active').siblings('li').removeClass('active');
                $aBodyLi.eq(i).addClass('active').siblings('li').removeClass('active');
            });
        });
    }

    function fnNext() {
        var $oBody = $('#tab-body'),
            $oBtnRechargeNext = $oBody.find('.li-recharge').find('.btn-next'),
            $oBtnExchangeNext = $oBody.find('.li-exchange').find('.btn-next'),
            $oMaskPayment = $('#mask-payment'),
            $oMaskMsg = $('#mask-msg');

        // 充值
        $oBtnRechargeNext.on('click', function() {
            $oMaskPayment.show();
        });

        // 兑换
        $oBtnExchangeNext.on('click',function(){
            $oMaskMsg.show();
        });
    }

    function fnPayment() {
        var $oMaskPayment = $('#mask-payment'),
            $oBtnClose = $oMaskPayment.find('.btn-close'),
            $aLi = $oMaskPayment.find('.main').find('li'),
            $oBtnPay = $oMaskPayment.find('.btn-pay');

        $oBtnClose.on('click', function() {
            $oMaskPayment.hide();
        });

        $.each($aLi, function(i, ele) {
            $(ele).on('click',function(){
                $(this).addClass('active').siblings('li').removeClass('active');
            });
        });

        $oBtnPay.on('click',function(){
            // TODO 处理充值逻辑，跳转支付页面
        });
    }

    function fnMsg(){
        var $oMaskMsg = $('#mask-msg'),
            $oBtnReture = $oMaskMsg.find('.btn-return'),
            $oBtnOk = $oMaskMsg.find('.btn-ok');

        $oBtnReture.on('click',function(){
            $oMaskMsg.hide();
        });
        $oBtnOk.on('click',function(){
            // TODO 处理兑换逻辑
        });
    }

})();
