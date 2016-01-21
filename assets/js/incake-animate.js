(function() {

		//页面底部滑动置顶
		//置顶按钮显示/隐藏实现
        $(window).scroll(function(){
            var w_height = $(window).height();//浏览器高度
            var scroll_top = $(document).scrollTop();//滚动条到顶部的垂直高度
            if(scroll_top > w_height){
                    $(".retrun-up").fadeIn(500);
                }else{
                    $(".retrun-up").fadeOut(500);
            }
        });
	    //置顶
	    $(".retrun-up").click(function(e){
	            e.preventDefault();
	            $(document.documentElement).animate({
	                scrollTop: 0
	                },200);
	            //支持chrome
	            $(document.body).animate({
	                scrollTop: 0
	                },200);
	    });
	    
	});
})();