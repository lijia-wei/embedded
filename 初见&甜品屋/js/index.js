$(function(){
	//导航
	$('.h-con li').hover(function(){
		$(this).toggleClass('current');
	})
	//关闭广告
	$('.h-close').click(function(){
		$('.h-new').hide();
	})
	//下拉栏
	$('.h-con .more').hover(function(){
		$(this).children('.more-con').stop().slideToggle('fast');
	})
	//轮播图
	var index=0;
	var f;
	$('.box-img').eq(index).fadeIn(0).siblings('.box-img').fadeOut(0);
	function dinshiqi(){
		f = setInterval(function(){
		$('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
		$('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
		if(index==$('.box-img').length-1){
			index=-1;
		}
		index++;
		}, 4000)
	}
	dinshiqi();
	$('.box-left').on('click', function(){
		clearInterval(f);
		if(index==0){
			index=$('.box-img').length
		}
		index--;
		$('.box-img').stop().eq(index).fadeIn().siblings('.box-img').fadeOut();
		$('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
		dinshiqi();
	})
	$('.box-right').on('click', function(){
		clearInterval(f);
		if(index==$('.box-img').length-1){
			index=-1;
		}
		index++;
		$('.box-img').stop().eq(index).fadeIn().siblings('.box-img').fadeOut();
		$('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
		dinshiqi();
	})
	$('.botton').on('click', function(){
		clearInterval(f);
		var indexx=$(this).index();
		index=indexx;
		$('.box-img').stop().eq(index).fadeIn().siblings('.box-img').fadeOut();
		$('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
		dinshiqi();
	})
	// 切换栏
	$('.musi ul>li').hover(function(){
		var index=0;
		index=$(this).index();
		$('.tab-con img').eq(index).stop().css('opacity', '1').siblings().css('opacity', '0');
	})
	//滑动遮挡效果
	function slide(){
		for(var index=0, l=22; index<6; index++){
			$('.mkl ul img').eq(index).css('right', l+'%');
			l+=10;
		}
	}
	slide();
	$('.mkl ul img').hover(function(){
		var index=$(this).index();
		$(this).eq(index).toggleClass('mkl_cur');
	})
	// 侧边栏
	$(window).scroll(function(){
		if($(window).scrollTop()>=700){
			$('.slider-bar').fadeIn();
		}
		else{
			$('.slider-bar').fadeOut();
		}
	})
})
