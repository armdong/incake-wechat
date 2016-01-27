(function() {

    $(function() {

        var $oMask = $('#mask');

        // 验证码弹框
        fnVerifyBox();

        // 验证码弹框事件
        function fnVerifyBox() {
            var $oBtnOk = $('#btn-verify-ok');
            var $oVerifyBox = $('#verify-box');
            $oBtnOk.on('click', function() {
                $oVerifyBox.hide();
                $oMask.hide();
            });
        }

    });

})();
