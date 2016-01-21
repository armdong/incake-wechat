(function() {

	$(function() {
		
		/* 帮助中心 */
		$('.help-list .item-title').click(function(e){
			$(this).find('.add').toggleClass('hide');
			$(this).find('.subtract').toggleClass('hide');
			$(this).parent().find('.item-txt').toggleClass('hide');
		});
	
		/* 发票 */
		//删除发票
		$('.invoice-list .delete').click(function(e){
			$(this).closest('.invoice-item').remove();
		});
		
		
		
		
		
		
		
		
		
		
	});

})();