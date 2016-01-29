(function() {
    $(function() {

        // 图片懒加载
        new LazyLoad();

        // 语音口令使用方法
        fnVoiceManual();

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

        //var $top = $('.settlement').offset().top;

        /* 切换选中事件 */
        function _switch(e) {
            $(e).children('.unchecked').toggleClass("hide");
            $(e).children('.checked').toggleClass("hide");
        }

        /* 已选蛋糕切换 */
        $(".circle-cakes").click(function() {
            if ($(".circle-cakes .checked").hasClass('hide')) { //未选中状态
                $(".circle-cakes .unchecked").addClass('hide');
                $(".circle-cakes .checked").removeClass('hide');
                $(".circle-cake .unchecked").addClass("hide");
                $(".circle-cake .checked").removeClass("hide");
            } else { //选中状态
                $(".circle-cakes .unchecked").removeClass('hide');
                $(".circle-cakes .checked").addClass('hide');
                $(".circle-cake .unchecked").removeClass("hide");
                $(".circle-cake .checked").addClass("hide");
            }
        });

        /* 单独蛋糕切换 */
        $(".circle-cake").click(function(e) {
            _switch(this);
            var $child = $(".circle-cake .unchecked");
            var $true = 0;
            for (var i = 0; i < $child.length; i++) {
                if ($($child[i]).hasClass('hide')) {
                    $true += 1;
                }
            }
            if ($true == $child.length) {
                $(".circle-cakes .unchecked").addClass("hide");
                $(".circle-cakes .checked").removeClass("hide");
            } else {
                $(".circle-cakes .unchecked").removeClass("hide");
                $(".circle-cakes .checked").addClass("hide");
            }
        });

        /* 切块 */
        $(".circle-cut").click(function() {
            _switch(this);
        });

        /* 单独套餐切换 */
        $(".circle-package").click(function(e) {
            _switch(this);
        });

        /* 单独配件切换 */
        $(".circle-parts").click(function(e) {
            _switch(this);
        });

        /* 全选 */
        $(".circle-both").click(function(e) {
            var cutState = $(".circle-cut .checked").hasClass('hide');
            if ($(".circle-both .checked").hasClass('hide')) { //未选中状态
                $(".circle-both .unchecked").addClass('hide');
                $(".circle-both .checked").removeClass('hide');
                $(".circle .unchecked").addClass("hide");
                $(".circle .checked").removeClass("hide");
                if (cutState) {
                    $(".circle-cut .unchecked").removeClass("hide");
                    $(".circle-cut .checked").addClass('hide');
                }
            } else { //选中状态
                $(".circle-both .unchecked").removeClass('hide');
                $(".circle-both .checked").addClass('hide');
                $(".circle .unchecked").removeClass("hide");
                $(".circle .checked").addClass("hide");
            }
        });

        /* 菜单收缩 */
        /*$(".with-package .title").click(function(){
        	$(".with-package .box").toggleClass("hide");
        });
        $(".selected-parts .title").click(function(){
        	$(".selected-parts .box").toggleClass("hide");
        });*/

        /* 数量增减 */
        var numberNew = 0;

        function subtract(e) {
            $(e).siblings('add').removeAttr("disabled");
            //选购数量&价格
            var number = $(e).siblings(".number").val();
            if (number > 1) {
                numberNew = parseInt(number) - 1;
                $(e).siblings(".number").val(numberNew);
                if (numberNew <= 1) {
                    $(e).attr('disabled', "true");
                    $(e).css("background-color", "#d7d7d7");
                } else {
                    $(e).siblings(".add").css("background-color", "#0055a2");
                }
            } else {
                $(e).attr('disabled', "true");
                $(e).css("background-color", "#d7d7d7");
            }
        }

        function add(e) {
            $(e).siblings(".subtract").removeAttr("disabled");
            //选购数量&价格
            var number = $(e).siblings(".number").val();
            numberNew = parseInt(number) + 1;
            $(e).siblings(".number").val(numberNew); //更改数量
            if (numberNew > 100) {
                $(e).attr('disabled', "true");
                $(e).css("background-color", "#d7d7d7");
            } else {
                $(e).siblings(".subtract").css("background-color", "#0055a2");
            }
        }

        /* 数量减 */
        $(".cake-number").delegate('.subtract', 'click', function(e) {
            subtract(this);
        });
        $(".buy-hide").delegate('.subtract', 'click', function(e) {
            subtract(this);
        });

        /* 数量增 */
        $(".cake-number").delegate('.add', 'click', function(e) {
            add(this);
        });
        $(".buy-hide").delegate('.add', 'click', function(e) {
            add(this);
        });

        /* 删除事件 */
        $(".delete").click(function() {
            $(this).closest('.box').remove();
        });

        /* 精美配件加入购物车事件 */
        $('.img-add').click(function() {
            $('.buyBtm').remove();
            if ($(this).hasClass('inner-number')) { //数字蜡烛
                $('.type').removeClass('cur');
                $('.buyMde-list a').first().addClass('cur');
                $('.buyMde').removeClass('hide');
                $('.buyBtn').before(
                    "<div class=" + "'buyBtm buy1 clearfix'" + "><span class=" + "'count'" + ">数字1：</span><span class=" + "'countR'" + "><button class=" + "'subtract'" + ">－</button><input class=" + "'number'" + " type=" + "'text'" + " value=" + "'1'" + " style='margin:0 .3rem;' /><button class=" + "'add'" + ">＋</button>	</span></div>");
            } else { //其他
                $('.buyMde').addClass('hide');
                $('.buyBtn').before(
                    "<div class=" + "'buyBtm buyNumber clearfix'" + "><span class=" + "'count'" + ">数量：</span><span class=" + "'countR'" + "><button class=" + "'subtract'" + ">－</button><input class=" + "'number'" + " type=" + "'text'" + " value=" + "'1'" + " style='margin:0 .3rem;' /><button class=" + "'add'" + ">＋</button>	</span></div>");
            }
            $(".buy-hide").removeClass("hide");
            $(".mask").removeClass("hide");
            $('body').css({
                "overflow": "hidden",
                'z-index': '-1'
            });
            // 禁止页面拖动
            $('body').bind('touchmove', function(e) {
                e.preventDefault();
            });
            //关闭
            $(".close").click(function() {
                $(".buy-hide").addClass("hide");
                $(".mask").addClass("hide");
                $('body').css("overflow", "auto");
                $('body').unbind('touchmove');
            });
        });

        /* 规格选择事件 */
        $(".buyMde-list .type").click(function() {
            $(this).toggleClass("cur");
            if ($(this).hasClass('cur')) {
                $('.buyBtn').before(
                    "<div class=" + "'buyBtm buy" + this.text + " clearfix'" + "><span class=" + "'count'" + ">数字" + this.text + "</span><span class=" + "'countR'" + "><button class=" + "'subtract'" + ">－</button><input class=" + "'number'" + " type=" + "'text'" + " value=" + "'1'" + " style='margin:0 .3rem;' /><button class=" + "'add'" + ">＋</button>	</span></div>");
            } else {
                $(".buy" + this.text).remove();
            }

        });

        /* 加入购物车 */
        var $oCart = $('#mask-cart');
        var $oBtnContinue = $('#btnContinue');
        $('.addCart').on('click', function() {
            $oCart.removeClass('hide');
            $(".buy-hide").addClass("hide");
            $(".mask").addClass("hide");
            $('body').bind('touchmove', function(e) {
                e.preventDefault();
            });
        });
        $oBtnContinue.on('click', function() {
            $oCart.addClass('hide');
            $('body').unbind('touchmove');
        });

        /* 结算 */
        var cart = $('.mask-pay');
        var btnContinue = $('.btnContinue');
        $('.pay').on('click', function() {
            cart.removeClass('hide');
            $('body').bind('touchmove', function(e) {
                e.preventDefault();
            });
        });
        btnContinue.on('click', function() {
            cart.addClass('hide');
            $('body').unbind('touchmove');
        });

        // 语音口令使用方法
        function fnVoiceManual() {
            var $oBtnPop = $('#mail-manual'),
                $oManual = $('#voice-manual'),
                $oManualContent = $oManual.find('.manual-content'),
                tl = new TimelineLite();

            // 手册展开
            $oBtnPop.on('click', function() {
                tl.clear();
                tl.to($oManual, .2, {
                    width: '100%',
                    onStart: function(){
                    	$oManual.show();
                    }
                });
                tl.to($oManualContent, .2, {
                	display: 'block'
                });
            });

            // 手册收缩
            $oManual.on('click',function(){
            	tl.clear();
            	tl.to($oManualContent, .2, {
                	display: 'none'
                });
                tl.to($oManual, .3, {
                    width: 0,
                    onComplete: function(){
                    	$oManual.hide();
                    }
                });
            });
        }

    });
})();
