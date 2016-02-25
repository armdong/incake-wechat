(function() {

    $(function() {

        fnTab();

    });

    function fnTab() {
        var $oTabNav = $('#tab-nav'),
            $aNavLi = $oTabNav.find('>li'),
            $oTabBody = $('#tab-body'),
            $aBodyLi = $oTabBody.find('>li');

        $.each($aNavLi, function(i, ele) {
            $(ele).on('click',function(){
                $(this).addClass('active').siblings('li').removeClass('active');
                $aBodyLi.eq(i).addClass('active').siblings('li').removeClass('active');
            });
        });
    }

})();
