(function() {

    $(function() {

        fnShare();

    });

    function fnShare() {
        var $oContainer = $('.container-wrapper'),
            $oBtnShare = $oContainer.find('.btn-share'),
            $oMask = $oContainer.find('.mask-share'),
            $oAct = $oContainer.find('#maskAct'),
            $oBtnOk = $oAct.find('.btn-ok'),
            $oBtnCancel = $oAct.find('.btn-cancel'),
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
        
        //此处添加判断是否符合优惠条件的逻辑，更改status状态
		var status = true;
		
		if(status){
			$oAct.fadeIn();
		}
		
		$oBtnCancel.on('click',function(){
			$oAct.fadeOut();
		});
		
		$oBtnOk.on('click',function(){
			//此处跳转至活动分享页
			location.href = "http://192.168.1.188:8020/incake-act-wechat/queen-cheese-all.html?status=true";
		});
        
    }

})();
