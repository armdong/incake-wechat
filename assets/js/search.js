(function(){
	
	$(function(){
		fnSearch();
		fnDelHistory();
	});
	
	// 搜索
	function fnSearch(){
		var $oTxtSearch = $('.txt-search');
		var $oBtnSearch = $('.btn-search');
		var $oHisBody = $('.history-body');
		
		$oBtnSearch.on('click',function(){
			var txt = $oTxtSearch.val();
			var _html = '';
			_html += '<span>';
			_html += txt;
			_html += '</span>';
			
			//TODO 入库操作
			var $aSpan = $oHisBody.find('span');
			if( $aSpan.length > 0 ){
				// 判断是否有重复项				
				$.each($aSpan, function(i,ele) {
					var currTxt = $(ele).html();
					if(currTxt === txt){
						$(ele).remove();
					}
				});				
				$oHisBody.prepend(_html);
			}else{
				$oHisBody.html(_html);
			}
			$oTxtSearch.val('');
		});
	}
	
	// 清除搜索历史
	function fnDelHistory(){		
		var $oHisBody = $('.history-body');
		var $oBtnDelHis = $('.btn-clear-history');
		$oBtnDelHis.on('click',function(){
			$oHisBody.html('暂无搜索历史');
		});
	}
	
})();
