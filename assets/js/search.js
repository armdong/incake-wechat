(function(){
	
	$(function(){
		fnSearch();
		fnDelHistory();
	});
	
	// 搜索
	function fnSearch(){
		var $oBtnSearch = $('.btn-search');
		
		$oBtnSearch.on('click',function(){
						
			//TODO 入库操作
			window.location.href = 'search-list.html';			
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
