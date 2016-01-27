(function(){

    $(function(){

        // 初始化信封事件
        fnMailBox();

    });

    function fnMailBox(){
        var $oBtnInit = $('#btn-init');
        var $oMask = $('#mask');

        $oBtnInit.on('click',function(){
            //$oMask.show();
        });
    }

})();