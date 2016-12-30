var start = document.getElementsByClassName('start')[0];
var finish = document.getElementsByClassName('end')[0];
var shrews = document.getElementsByClassName('shrews');
var score = document.getElementById('score');
var rate = document.getElementById('rate');
var timeout = document.getElementById('timeout');
var time,flag=true;
function selectFrom(x,y){
	var choice = y-x;
	return Math.floor(Math.random()*choice+x);
};
var count = 0,mouse = 0;
start.onclick = function(){
	score.value = 0;
	rate.value = 1.00;
	timeout.value = 30;
	if(flag == true){
		time = setInterval(function(){
			count++;
			var i = selectFrom(0,16);
			if(shrews[i].innerHTML == ''){
				shrews[i].innerHTML = '<div class="mouse"></div>';
				setTimeout(function(){
					shrews[i].innerHTML = '';
				},3000)
			}
			timeout.value = parseInt(timeout.value)-1;
			rate.value = (mouse/count).toFixed(2);
			if(timeout.value == 0){
				alert('时间到,您得分为：'+score.value+'分！'+'命中率为：'+rate.value*100+'%');
				finishGame();
			}
		},1000);

	}
	flag = false;
};

/*结束游戏-清除地鼠*/
function finishGame(){
	clearInterval(time);
	for(var i=0;i<shrews.length;i++){
		shrews[i].innerHTML = '';
	}
	flag = true;
}
finish.onclick = function(){
	finishGame();
	timeout.value = 0;
};
/*开始打地鼠*/
for(var i=0;i<shrews.length;i++){
	shrews[i].onclick = function(){
		if(this.innerHTML!=''){
			score.value = parseInt(score.value)+1;
			mouse ++;//击中的地鼠个数
			var _this = this;
			this.innerHTML = '<div class="mouse_change"></div>';
			setTimeout(function(){
				_this.innerHTML = '';
			},300)
		}
	}
}
