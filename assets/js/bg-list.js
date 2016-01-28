(function() {

	$(function() {

		var $oUl = $('.bg-list');
		var $aUlLi = $oUl.find('.bg-item');
		var $aItemText = $aUlLi.find('.item-text');
		var arrVioce = ['assets/audio/bgm.mp3', 'assets/audio/hello.mp3', 'assets/audio/juice.mp3', 'assets/audio/xindong.mp3'];
		var $oPlayer = $('#player');
		var $aItemPlay = $('.item-play');
		var $aItemPause = $('.item-pause');

		//check voice
		fnInitVoice();
		//play or paush
		fnPlayPause();
		//submit
		fnBtnSubmit();

		//check voice
		function fnInitVoice() {

			//check model
			$.each($aItemText, function(i, ele) {
				$(ele).on('click', function() {
					//check this
					$aUlLi.removeClass("active");
					$aUlLi.eq(i).addClass("active");
					//hide all pause
					$aItemPlay.css('display', 'block');
					$aItemPause.css('display', 'none');
					// player pause
					$oPlayer.get(0).pause();
				});
			});

		}


		//play or paush
		function fnPlayPause() {
			var originSrc = '';
			//play
			$.each($aItemPlay, function(i, ele) {
				$(ele).on('click', function() {
					// check model
					$aItemText.eq(i + 1).trigger('click');
					// get player src
					originSrc = $oPlayer.attr('src');
					//show this pause
					$(this).css('display', 'none');
					$aItemPause.eq(i).css('display', 'block');
					// make sure play or pause
					if (originSrc !== arrVioce[i]) {
						$oPlayer.attr('src', arrVioce[i])
					}
					// player begin
					$oPlayer.get(0).play();
				});
			});

			//paush
			$.each($aItemPause, function(i, ele) {
				$(ele).on('click', function() {
					$(this).css('display', 'none');
					$aItemPlay.eq(i).css('display', 'block');
					// player pause
					$oPlayer.get(0).pause();
				});
			});

		}

		//submit
		function fnBtnSubmit() {
			var $popupTip = $('.popup-tip');
			var $btnSure = $('.btn-sure');
			var $btnReturn = $('.btn-return');

			$btnSure.on('click', function() {
				$popupTip.removeClass("hide");
			});

			$btnReturn.on('click', function() {
				$popupTip.addClass("hide");
			});

		}
	});

})();