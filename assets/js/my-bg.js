(function() {

	$(function() {
		var $oUl = $('.voice-list');
		var $aUlLi = $oUl.find('.voice-item');
		var $aItemText = $aUlLi.find('.item-text');
		var $aBtnDel = $aUlLi.find('.item-del');
		var arrVioce = ['assets/audio/bgm.mp3', 'assets/audio/hello.mp3', 'assets/audio/xindong.mp3'];
		var $oPlayer = $('#player');
		var $aItemPlay = $('.item-play');
		var $aItemPause = $('.item-pause')
		
		//check voice
		fnInitVoice();
		//play or paush
		fnPlayPause();
		//delete model
		fnDeleteVoice();

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

			// delete model
			$.each($aBtnDel, function(i, ele) {
				$(ele).on('click', function() {
					$aUlLi.eq(i).remove();
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
					$aItemText.eq(i).trigger('click');
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
		
		// delete model
		function fnDeleteVoice() {
			$.each($aBtnDel, function(i, ele) {
				$(ele).on('click', function() {
					$aUlLi.eq(i).remove();
					// player pause
					$oPlayer.get(0).pause();
					// remove voice
					$(arrVioce).splice(i,1);
				});
			});
		}
		
	});

})();