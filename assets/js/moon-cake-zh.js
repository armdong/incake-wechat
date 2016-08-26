/**
 * Created by Michael on 2016/8/26.
 */

(function () {

    $(function () {
        fnOperate();
    });

    // 数量改变事件
    function fnOperate() {
        var $oOperate = $('#operate'),
            $oSubBtn = $oOperate.find('.sub'),
            $oAddBtn = $oOperate.find('.add'),
            $oInput = $oOperate.find('.num');

        // 增加数量
        $oAddBtn.on('click', function () {
            var num = parseInt($oInput.val(), 10);
            num++;
            if (num > 999) {
                num = 999;
            }
            $oSubBtn.css({
                'background-color': '#0055a2'
            });
            $oInput.val(num);
        });

        // 减少数量
        $oSubBtn.on('click', function () {
            var num = parseInt($oInput.val(), 10);
            num--;
            if (num <= 1) {
                num = 1;
                $oSubBtn.css({
                    'background-color': '#d7d7d7'
                });
            } else {
                $oSubBtn.css({
                    'background-color': '#0055a2'
                });
            }
            $oInput.val(num);
        });
    }

})();