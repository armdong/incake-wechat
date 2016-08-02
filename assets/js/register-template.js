(function() {

    $(function() {

        var clientH = $(window).height(),
            $oBtnFooter = $('#float-footer'),
            iBtnFooterH = $oBtnFooter.height(),
            $oFrmRegister = $('#frm-register'),
            iFrmRegisterH = $oFrmRegister.offset().top;

        fnNav();

        $(window).on('scroll', function() {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT > (iFrmRegisterH - clientH)) {
                $oBtnFooter.hide();
            } else {
                $oBtnFooter.show();
            }
        });

        // 浏览器尺寸改变时重新计算变量值
        $(window).on('resize', function() {
            clientH = $(window).height();
            iBtnFooterH = $oBtnFooter.height();
            iFrmRegisterH = $oFrmRegister.offset().top;
        });

        function fnNav() {
            $oBtnFooter.on('click', function() {
                fnScrollTop($oFrmRegister);
            });
        }

        // 滑倒指定位置
        function fnScrollTop($obj) {
            $('html,body').animate({ scrollTop: $obj.offset().top }, 800);
        }

    });

})();
