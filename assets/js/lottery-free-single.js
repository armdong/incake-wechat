(function() {
	var lottery={
		index:-1,	//当前转动到哪个位置，起点位置
		count:0,	//总共有多少个位置
		timer:0,	//setTimeout的ID，用clearTimeout清除
		speed:20,	//初始转动速度
		times:0,	//转动次数
		cycle:50,	//转动基本次数：即至少需要转动多少次再进入抽奖环节
		prize:-1,	//中奖位置
		init:function(id){
			if ($("#"+id).find(".lottery-unit").length>0) {
				$lottery = $("#"+id);
				$units = $lottery.find(".lottery-unit");
				this.obj = $lottery;
				this.count = $units.length;
				$lottery.find(".lottery-unit-"+this.index).addClass("active");
			};
		},
		roll:function(){
			var index = this.index;
			var count = this.count;
			var lottery = this.obj;
			$(lottery).find(".lottery-unit-"+index).removeClass("active");
			index += 1;
			if (index>count-1) {
				index = 0;
			};
			$(lottery).find(".lottery-unit-"+index).addClass("active");
			this.index=index;
			return false;
		},
		stop:function(index){
			this.prize=index;
			return false;
		}
	};

	var click = false;
	// 这里是控制抽奖奖项逻辑,只能抽中5折(70%)和7折(30%)奖项
	var arrPrize = [1,1,1,3,3,3,4,4,4,4,4,4,4,7,7,7,7,7,7,7];
	
	$(function() {
		lotteryPage();
		init();
	});
	
	function lotteryPage() {
		var $oPage1 = $('.page01');
		var $oLottery = $oPage1.find('.btn-lottery');
		var $oPage2 = $('.page02');
		var $oRegist = $oPage2.find('.btn-regist');
		var $oPage3 = $('.page03');
		$oLottery.click(function(){
			$oPage1.addClass('hide');
			$oPage2.removeClass('hide');
		});
		$oRegist.click(function(){
			$oPage2.addClass('hide');
			$oPage3.removeClass('hide');
		});
	}
	
	function init(){
		lottery.init('lottery');
		var $oCount = $('#count');
		
		$("#lottery a").click(function(){
			if (click) {
				return false;
			}else{
				lottery.speed=100;
				$oCount.html('0');
				roll();
				click=true;
				return false;
			}
		});
	}
	
	function roll(){
		lottery.times += 1;
		lottery.roll();
		if (lottery.times > lottery.cycle+10 && lottery.prize==lottery.index) {
			clearTimeout(lottery.timer);
			lottery.prize=-1;
			lottery.times=0;
			click=false;
			initPopup(lottery.index);
		}else{
			if (lottery.times<lottery.cycle) {
				lottery.speed -= 10;
			}else if(lottery.times==lottery.cycle) {
				// 这里是控制抽奖奖项逻辑,只能抽中5折(70%)和7折(30%)奖项
				var index = arrPrize[parseInt(Math.random()*20)];
				lottery.prize = index;		
			}else{
				if (lottery.times > lottery.cycle+10 && ((lottery.prize==0 && lottery.index==7) || lottery.prize==lottery.index+1)) {
					lottery.speed += 110;
				}else{
					lottery.speed += 20;
				}
			}
			if (lottery.speed<40) {
				lottery.speed=40;
			};
			lottery.timer = setTimeout(roll,lottery.speed);
		}
		return false;
	}
	
	
	
	function initPopup(index){
		var $oPopupTip = $('#popup-tip');
		var $oBtnShare = $oPopupTip.find('.btn-share');
		var $oPopupShare = $('#popup-share');
		var tips = '';
		
		if(index==1||index==3){
			tips='7折券';
		}else if(index==4||index==7){
			tips='5折券';
		}
		
		$oPopupTip.find('#prize').html(tips);
		$oPopupTip.show();
		
		$oBtnShare.click(function(){
			$oPopupTip.hide();
			$oPopupShare.show();
		});
	}
	
})();