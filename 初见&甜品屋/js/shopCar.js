$(function(){
	//全选
	$('.checkall').change(function(){
		$('.single, .checkall').prop('checked', $(this).prop('checked'));
		if($(this).prop('checked')){
			$('.c-good ul').css('background-color', '#EEDC82');
		}
		else{
			$('.c-good ul').css('background-color', '#EEDFCC');
		}
		getSum();
	});
	$('.single').change(function(){
		if($('.single:checked').length===$('.single').length){
			$(".checkall").prop('checked', true);
		}
		else{
			$(".checkall").prop('checked', false);
		}
		if($(this).prop("checked")){
			$(this).parents('ul').css('background-color', '#EEDC82');
		}else{
			$(this).parents('ul').css('background-color', '#EEDFCC');
		}
		getSum();
	});
	$('.single').trigger('change');
	//小计函数
	function xiaoji(n, target){
		var s=$(target).parent().siblings('.s-price').html();
		s=s.substr(1);
		$(target).parent().siblings('.s-num').html('￥'+(s*n).toFixed(2));
	}
	getSum();
	//求和函数
	function getSum(){
		var count = 0;
		var money = 0;		
		$('.itxt').each(function(i, ele){
			if($(ele).parent().siblings('.choose').children().prop('checked')){
				count+=parseInt($(ele).val());
			}		
		});
		$('.bought em').text(count);
		$('.s-num').each(function(i, ele){
			if($(ele).siblings('.choose').children().prop('checked')){
				money += parseFloat($(ele).text().substr(1));
			}	
		});
		$('.allnum em').text("￥"+money.toFixed(2));
	}
	function empty(){
		setTimeout(function(){
			if($('.single').length==0){
			alert('购物车为空快去选购吧！');
			}
		}, 1);
	}
	//数量
	$('.add').click(function(){
		var n=$(this).siblings('.itxt').val();
		n++;
		$(this).siblings('.itxt').val(n);
		//小计
		xiaoji(n, this);
		getSum();
	});
	$('.sub').click(function(){
		var n=$(this).siblings('.itxt').val();
		if(n==1){
			return false;
		}
		n--;
		$(this).siblings('.itxt').val(n);
		//小计
		xiaoji(n, this);
		getSum();
	});
	//需修改文本框
	$('.itxt').change(function(){
		var n=$(this).val();
		xiaoji(n, this);
		getSum();
	});
	$('.itxt').trigger('change');
	//删除
	$('.del a').click(function(){
		$(this).parents('ul').remove();
		getSum();
		empty();
	});
	$('.delchecked').click(function(){
		$('.single:checked').parents('ul').remove();
		getSum();
		empty();
	});
	$('.delall').click(function(){
		$(".c-good ul").remove();
		getSum();
		empty();
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>=400){
			$('.slider-bar').fadeIn();
		}
		else{
			$('.slider-bar').fadeOut();
		}
	})
})
