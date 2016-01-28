(function() {

    $(function() {

        // 遮罩层是通用的，所以提出来成为全局变量
        var $oMask = $('#mask');

        // 定义一个全局动画示例
        var tl = new TimelineLite();

        // 验证码弹框
        fnVerifyBox();

        // 音乐播放
        fnPlayer();

        // 验证码弹框事件
        function fnVerifyBox() {
            var $oBtnOk = $('#btn-verify-ok'),
                $oVerifyBox = $('#verify-box');

            $oBtnOk.on('click', function() {
                tl.clear();
                tl.to($oVerifyBox, 1, {
                    opacity: 0,
                    onComplete: function() {
                        $oVerifyBox.hide();
                    }
                }); // 1秒钟将验证码弹框的opcity变成0
                tl.to($oMask, 1, {
                    opacity: 0,
                    onComplete: function() {
                        $oMask.hide();
                    }
                }, 0); // 1秒钟将遮罩层的opcity变成0，没有延时时间，跟验证码弹框同步
            });
        }

        // 音乐播放
        function fnPlayer() {

            // 音乐播放按钮
            var $oBtnInit = $('#btn-init'),
                $oPlayer = $('#player'), // 音乐播放容器
                $oPlayerTop = $oPlayer.find('.player-top'),
                $oMusicBar = $oPlayer.find('.musicbar'), // 音乐播放状态条
                $aMusicDiv = $oMusicBar.find('>div'),
                $oAudio = $('#bgm'), // audio 标签
                iTimer = null;

            // 点击信封事件
            $oBtnInit.on('click', function() {
                tl.clear();
                tl.to($oPlayer, 1, {
                    opacity: 1,
                    onStart: function() {
                        $oPlayer.show();
                    }
                });
                tl.to($oMask, 1, {
                    opacity: 1,
                    onStart: function() {
                        $oMask.show();
                    }
                }, 0);

                // 信封打开
                tl.to($oPlayerTop, 1, {
                    transform: 'rotateX(180deg)',
                    onComplete: function() {
                        $oMusicBar.attr('state', 'running');
                        $aMusicDiv.css({
                            '-webkit-animation-play-state': 'running',
                            'animation-play-state': 'running'
                        });

                        // 播放音乐
                        $oAudio.get(0).play();
                        iTimer = setInterval(fnCheckStatus, 1000); // 开启播放器
                    }
                });
            });

            // 暂停/继续播放控制
            $oMusicBar.on('click', function() {
                if ($(this).attr('state') === "running") {
                    $(this).attr('state', 'paused');
                    $aMusicDiv.css({
                        '-webkit-animation-play-state': 'paused',
                        'animation-play-state': 'paused'
                    });

                    // 暂停音乐
                    $oAudio.get(0).pause();
                    clearInterval(iTimer); // 清除播放器
                } else {
                    $(this).attr('state', 'running');
                    $aMusicDiv.css({
                        '-webkit-animation-play-state': 'running',
                        'animation-play-state': 'running'
                    });

                    // 继续播放音乐
                    $oAudio.get(0).play();
                    iTimer = setInterval(fnCheckStatus, 1000); // 开启播放器
                }
            });

            // 检测音乐是否已播放完
            function fnCheckStatus() {
                if ($oAudio.get(0).ended) { // 音乐播放完成                    
                    tl.clear();

                    // 关闭信封
                    tl.to($oPlayerTop, 1, {
                        transform: 'rotateX(0deg)',
                        onComplete: function() {
                            $oMusicBar.attr('state', 'paused');
                            $aMusicDiv.css({
                                '-webkit-animation-play-state': 'paused',
                                'animation-play-state': 'paused'
                            });

                            // 清除定时器
                            clearInterval(iTimer);
                        }
                    });

                    // 关闭播放器和遮罩层
                    tl.to($oPlayer, 1, {
                        opacity: 0,
                        onComplete: function() {
                            $oPlayer.hide();
                        }
                    });
                    tl.to($oMask, .4, {
                        opacity: 0,
                        onComplete: function() {
                            $oMask.hide();
                        }
                    });
                }
            }
        }

    });

})();
