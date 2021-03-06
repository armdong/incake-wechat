(function() {

    $(function() {

        // 图片懒加载
        new LazyLoad();

        var $oBtnReturn = $('.icon-return'),
            clientH = $(window).height();
        var containerWidth = $('#index-swiper').width();
        var $aImg = $('#index-swiper').find('img');
        $aImg.css({
            width: containerWidth,
            height: containerWidth
        });

        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            width: containerWidth,
            height: containerWidth,
            loop: true,
            centeredSlides: true,
            autoplay: 5000,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            preloadImages: false,
            lazyLoading: true
        });

        $(window).on('resize', function() {
            containerWidth = $('#index-swiper').width();
            $aImg.css({
                width: containerWidth,
                height: containerWidth
            });
            swiper.destroy();
            swiper = null;
            swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                width: containerWidth,
                height: containerWidth,
                loop: true,
                centeredSlides: true,
                autoplay: 5000,
                speed: 1000,
                autoplayDisableOnInteraction: false,
                preloadImages: false,
                lazyLoading: true
            });
        });

        $(window).on('scroll', function() {

            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT >= clientH / 3) {
                $oBtnReturn.show();
            } else {
                $oBtnReturn.hide();
            }

        });

        // 主要对安卓微信内置浏览器做兼容
        function fnFitAndroidLayout() {
            var dynamicLoading = {
                css: function(path) {
                    if (!path || path.length === 0) {
                        throw new Error('argument "path" is required !');
                    }
                    var head = document.getElementsByTagName('head')[0];
                    var link = document.createElement('link');
                    link.href = path;
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    head.appendChild(link);
                },
                js: function(path) {
                    if (!path || path.length === 0) {
                        throw new Error('argument "path" is required !');
                    }
                    var head = document.getElementsByTagName('head')[0];
                    var script = document.createElement('script');
                    script.src = path;
                    script.type = 'text/javascript';
                    head.appendChild(script);
                }
            }

        }

        //规格切换
        $(".spec-list .type").click(function() {
            var cur = $(".spec-list .cur");
            var img = $(".spec-list .cur img");
            cur.removeClass("cur");
            img.addClass("hide");
            $(this).addClass("cur");
            $(this).children("img").removeClass("hide");
            cur = $(this);
            $(".number").val("1");
            $(".subtract").css("background-color", "#d7d7d7");
            //修改规格信息
            switch (this.text) {
                case "1.2磅":
                    $('.gPrice').html("169");
                    break;
                case "2.2磅":
                    $('.gPrice').html("269");
                    break;
                case "3.2磅":
                    $('.gPrice').html("369");
                    break;
                case "4.2磅":
                    $('.gPrice').html("469");
                    break;
                case "5.5磅":
                    $('.gPrice').html("569");
                    break;
                case "6.5磅":
                    $('.gPrice').html("669");
                    break;
            }
        });
        //GAW规格切换
        $(".gaw-list .type").click(function() {

            $(this).addClass("cur");
            $(this).children('img').removeClass("hide");
            $(this).siblings('.type').removeClass("cur");
            $(this).siblings('.type').children('img').addClass("hide");

            $(".number").val("1");
            $(".subtract").css("background-color", "#d7d7d7");

        });

        var numberNew = 0;
        /* 数量减 */
        $(".subtract").click(function() {
            $(".add").removeAttr("disabled");
            //选购数量&价格
            var number = $(".number").val();
            numberNew = parseInt(number) - 1;
            $(".number").val(numberNew);
            var priceNow = $(".gPrice").html();
            //获取单价
            var sPrice = parseInt(priceNow) / parseInt(number);
            //更改价格
            $(".gPrice").html(parseInt(numberNew) * sPrice);
            if (numberNew > 1) {
                $(".add").css("background-color", "#0055a2");
            } else {
                $('.subtract').attr('disabled', "true");
                $(".subtract").css("background-color", "#d7d7d7");
            }
        });
        /* 数量增 */
        $(".add").click(function() {
            $(".subtract").removeAttr("disabled");
            //选购数量&价格
            var number = $(".number").val();
            numberNew = parseInt(number) + 1;
            $(".number").val(numberNew); //更改数量
            var priceNow2 = $(".gPrice").html();
            //获取单价
            var sPrice2 = parseInt(priceNow2) / parseInt(number);
            //更改价格
            $(".gPrice").html(parseInt(numberNew) * sPrice2);
            if (numberNew < 100) {
                $(".subtract").css("background-color", "#0055a2");
            } else {
                $('.add').attr('disabled', "true");
                $(".add").css("background-color", "#d7d7d7");
            }

        });

        $('.package-txt').click(function() {
            $('.package-hide').toggleClass('hide');
            if ($('.package-hide').hasClass('hide')) {
                $('.package-txt').css("color", "#969696");
                $('.package-txt').css("borderColor", "#969696");
            } else {
                $('.package-txt').css("color", "#E74566");
                $('.package-txt').css("borderColor", "#E74566");
            }
        });

        /* 加入购物车 */
        var $oCarNumber = $('.car-number');
        var $oCart = $('#mask-cart');
        var $oBtnContinue = $('#btnContinue');
        var tl = new TimelineLite();

        $('.addCart').on('click', function() {
            /*
            $oCart.removeClass('hide');
            $('.car-number').html(parseInt(number)+1);
            $('body').bind('touchmove',function(e){
            	e.preventDefault();
            });
            */

            tl.clear();

            var startT = $(this).offset().top - $oCarNumber.height() / 2,
                startL = $(this).offset().left + $(this).width() / 2,
                endT = $oCarNumber.offset().top + $oCarNumber.height() / 2,
                endL = $oCarNumber.offset().left - $oCarNumber.width() / 2;

            // 加入购物车动画
            $('<div class="flyEle"></div>').fly({
                start: {
                    left: startL,
                    top: startT
                },
                end: {
                    left: endL,
                    top: endT
                },
                onEnd: function() {

                	// 购物车数字加1
        			var number = $('.car-number').text();
        			$oCarNumber.html(parseInt(number, 10) + 1);

                    this.destory();

                    tl.to($oCarNumber, 0.1, {
                        scale: 2,
                        ease: Ease.easeIn,
                        onComplete: function() {
                            tl.to($oCarNumber, 0.1, {
                                scale: 1,
                                ease: Ease.easeIn
                            });
                        }
                    });
                }
            });

        });
        $oBtnContinue.on('click', function() {
            $oCart.addClass('hide');
            $('body').unbind('touchmove');
        });


    });

})();
