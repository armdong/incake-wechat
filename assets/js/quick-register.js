(function() {

    $(function() {

        // 轮播图
        fnInitSwiper();

        var $oBtnMore = $('#find-more'),
            clientH = $(window).height(),

            $oNav = $('#float-nav'),
            iNavH = $oNav.height(),

            $oActivitiesLi = $oNav.find('.li-activities'),
            $oHotLi = $oNav.find('.li-hot'),
            $oFeatureLi = $oNav.find('.li-feature'),

            $oBtnFooter = $('#float-footer'),
            iBtnFooterH = $oBtnFooter.height(),

            $oActivities = $('#activities'),
            $oHot = $('#hot'),
            $oFeature = $('#feature'),

            $oFrmRegister = $('#frm-register');

        fnFindMore();
        fnNav();

        // 页面跳转处理事件
        fnRedirect();

        $(window).on('scroll', function() {

            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT >= iNavH) {
                $oBtnMore.hide();
                $oNav.show();
            } else {
                $oBtnMore.show();
                $oNav.hide();
            }

            if (scrollT > ($('#container').height() - clientH - iBtnFooterH)) {
                $oBtnFooter.hide();
            } else {
                $oBtnFooter.show();
            }

        });

        $(window).on('resize', function() {
            clientH = $(window).height();
            iNavH = $oNav.height();
            iBtnFooterH = $oBtnFooter.height();
        });

        function fnInitSwiper() {
            var $oSwiper = $('#activities-swiper'),
                $aImg = $oSwiper.find('img'),
                swiper = null,
                containerWidth = $oSwiper.width();

            $aImg.css({
                width: containerWidth,
                height: containerWidth / 2
            });
            if (swiper != null) {
                swiper.destroy();
            }
            swiper = null;
            swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                width: containerWidth,
                height: containerWidth / 2,
                loop: true,
                centeredSlides: true,
                autoplay: 5000,
                speed: 1000,
                autoplayDisableOnInteraction: false,
                preloadImages: false,
                lazyLoading: true
            });
        }

        function fnFindMore() {
            $oBtnMore.on('click', function() {
                fnScrollTop($oActivities);
            });
        }

        function fnNav() {
            $oActivitiesLi.on('click', function() {
                fnScrollTop($oActivities);
            });
            $oHotLi.on('click', function() {
                fnScrollTop($oHot);
            });
            $oFeatureLi.on('click', function() {
                fnScrollTop($oFeature);
            });
            $oBtnFooter.on('click', function() {
                fnScrollTop($oFrmRegister);
                // 
            });
        }

        // 滑倒指定位置
        function fnScrollTop($obj) {
            $('html,body').animate({ scrollTop: $obj.offset().top - iNavH }, 800);
        }

        // 处理页面跳转事件
        function fnRedirect() {

            var arrLink = [];

            // 拿到所有以.html结尾的a标签
            var $aLinks = $('a');
            $.each($aLinks, function(i, ele) {
                var _href = $(ele).attr('href');
                var reg = /.*\.html.*/i;
                if (reg.test(_href)) {
                    arrLink.push(ele);
                }
            });

            //给所有的标签绑定事件
            for (var i = 0, len = arrLink.length; i < len; i++) {
                $(arrLink[i]).on('click', function(ev) {

                    var _this = $(this);

                    // 检测是否已经注册领取
                    var $oHid = $('#hid_isreg');
                    var isReg = parseInt($oHid.val(), 10) == 1 ? true : false;

                    // 如果没有注册，弹出提示框
                    if (!isReg) {

                        var _href = _this.attr('href');

                        // 处理弹框事件
                        handler4Pop(_href);

                        return false;
                    }

                });
            }
        }

        // 处理弹框事件
        function handler4Pop(url) {
            var $oMask = $('#mask-redirect'),
                $oBtnOk = $oMask.find('.btn-redirect-ok'),
                $oBtnCancel = $oMask.find('.btn-redirect-cancel'),
                $oTxtMobile = $('#frm-register').find('.txt-mobile');

            $oMask.show();

            $oBtnOk.on('click', function() {
                $oMask.hide();
                $oTxtMobile.focus();
            });
            $oBtnCancel.on('click', function() {
                window.location.href = url;
            });
        }

    });

})();
