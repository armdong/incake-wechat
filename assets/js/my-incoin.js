(function(){
    
    $(function(){
        
        fnInitTab();
        
    });
    
    function fnInitTab(){       
        var $oTitle = $('.tab-title');
        var $aTitleLi = $oTitle.find('.title-item');
        var $oContent = $('.tab-content');
        var $aContentLi = $oContent.find('.content-item');      
        $.each($aTitleLi, function(i,ele) {         
            $(ele).on('click',function(){               
                $(this).addClass('active').siblings().removeClass('active');        
                $aContentLi.eq(i).addClass('active').siblings().removeClass('active');
            });         
        });     
    }
    
})();