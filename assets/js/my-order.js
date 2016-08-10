(function() {

    $(function() {

        fnInitTab();

        fnPay();

        // 取消订单
        fnCancelOrder();

        // 订单支付倒计时
        fnPayTimeout({
            remain: 15 * 60 // 15分钟
        });
    });

    // 未支付订单设置最大支付时间
    function fnPayTimeout(config) {

        // 拿到所有的未支付订单
        var $aPayTime = $('.pay-time');

        $aPayTime.each(function(i, ele) {

        	ele.timer = null;

        	var beginTime = 0;
            if (i == 0) {
            	beginTime = new Date(2016, 7, 10, 11, 40, 00);
            } else if ( i == 1){
            	beginTime = new Date(2016, 7, 10, 11, 47, 00);
            }

            // 最迟支付时间
            //var beginTime = new Date(2016, 7, 10, 11, 40, 00); // TODO:下单时间需要到数据库查询
            var endTime = beginTime.addSeconds(config.remain);
            var curShowTimeSeconds = 0;

            var $oHour = $(ele).find('.hours'),
                $oMinute = $(ele).find('.minutes'),
                $oSecond = $(ele).find('.seconds');

            curShowTimeSeconds = getCurrentShowTimeSeconds();

            ele.timer = setInterval(function() {
                render();
                update();
            }, 50);

            function update() {

                var nextShowTimeSeconds = getCurrentShowTimeSeconds();

                var nextHours = parseInt(nextShowTimeSeconds / 3600);
                var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60);
                var nextSeconds = nextShowTimeSeconds % 60;

                var curHours = parseInt(curShowTimeSeconds / 3600);
                var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60);
                var curSeconds = curShowTimeSeconds % 60;

                if (nextSeconds != curSeconds) {
                    curShowTimeSeconds = nextShowTimeSeconds;
                }
            }

            function render() {
                var hours = parseInt(curShowTimeSeconds / 3600);
                var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
                var seconds = curShowTimeSeconds % 60;

                if (hours == 0 && minutes == 0 && seconds == 0) {

                	// TODO:超出最大支付时间，在这里做相应处理
                	console.log('超出了最大支付时间');

                	clearInterval(ele.timer);	
                }

                $oHour.html(hours);
                $oMinute.html(minutes < 10 ? '0' + minutes : minutes);
                $oSecond.html(seconds < 10 ? '0' + seconds : seconds);
            }

            function getCurrentShowTimeSeconds() {
                var curTime = new Date();
                var ret = endTime.getTime() - curTime.getTime();
                ret = Math.round(ret / 1000);
                return ret >= 0 ? ret : 0;
            }

        });
    }

    function fnInitTab() {
        var $oTitle = $('.tab-title');
        var $aTitleLi = $oTitle.find('.title-item');
        var $oContent = $('.tab-content');
        var $aContentLi = $oContent.find('.content-item');
        $.each($aTitleLi, function(i, ele) {
            $(ele).on('click', function() {
                $(this).addClass('active').siblings().removeClass('active');
                $aContentLi.eq(i).addClass('active').siblings().removeClass('active');
            });
        });
    }

    function fnPay() {

        var $oBtnPay = $('.btn-pay');
        var $oMaskPayment = $('.mask-payment');
        var $oBtnPaymentCancel = $('.btn-payment-cancel');
        var $oPaymentList = $oMaskPayment.find('.payment-list');
        var $aPaymentItem = $oPaymentList.find('li');

        $oBtnPay.on('click', function() {
            $oMaskPayment.show();
            $('body').bind('touchmove', function(e) {
                e.preventDefault();
            });
        });

        $oBtnPaymentCancel.on('click', function() {
            $oMaskPayment.hide();
            $('body').unbind('touchmove');
        });

        $aPaymentItem.on('click', function() {
            $(this).addClass('active').siblings('li').removeClass('active');
        });

    }

    function fnCancelOrder() {
        var $oBtnCancel = $('.btn-cancel');
        var $oMaskOrder = $('.mask-order');
        var $oBtnOrderCancel = $oMaskOrder.find('.btn-order-cancel');
        var $oList = $oMaskOrder.find('.list');
        var $aLi = $oList.find('li');

        $oBtnCancel.on('click', function() {
            $oMaskOrder.show();
            $('body').bind('touchmove', function(e) {
                e.preventDefault();
            });
        });

        $oBtnOrderCancel.on('click', function() {
            $oMaskOrder.hide();
            $('body').unbind('touchmove');
        });

        $aLi.on('click', function() {
            $(this).addClass('active').siblings('li').removeClass('active');
        });
    }

})();
