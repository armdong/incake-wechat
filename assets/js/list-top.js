(function() {

	$(function() {
		// 切换排行榜
		fnChangeCakeTop();
	});

	function fnChangeCakeTop(){
		
		var $oDropDown = $('#header').find('.drop-down');
		var $oList = $('#header').find('.top-list');
		var onOff = true;
		
		$oDropDown.on('click',function(){
			if(onOff){
				$(this).css({
					'-webkit-transform':'rotateZ(90deg)',
					'transform':'rotateZ(90deg)'
				});
				$oList.show();
			}else{
				$(this).css({
					'-webkit-transform':'rotateZ(0deg)',
					'transform':'rotateZ(0deg)'
				});
				$oList.hide();
			}
			onOff = !onOff;
		});
		
	}

})();
