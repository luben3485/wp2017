
$(function(){
	var $block = $('#framework'), 
		$slides = $block.find('.slides'), 
		$ul = $slides.find('ul'), 
		_width = $slides.width(), 
		_left = _width * -1, 
		_animateSpeed = 300,
        num=1;

	$ul.find('li:first').before($ul.find('li:last')).end().css({
		left: _left,
		width: _width * ($ul.find('li').length + 1)
	});
    showtext(num);
    $('li:eq(1)').css('filter', 'blur(0px)');
 /*   $('li:first').css('-webkit-filter',blur(10px));
    $('li:third').css('-webkit-filter',blur(10px));*/
/*
   stop()方法的语法结构为：

                   stop([clearQueue],[gotoEnd]);

         参数clearQueue和gotoEnd都是可选参数，为Boolean值（true或false）。clearQueue代表是否清空未执行完的动画队列，gotoEnd代表是否直接将正在执行的动画跳转到末状态。

*/
	$block.find('a.prev').click(function(){
        
        $ul.stop(false, true).animate({'left' : _left + _width}, _animateSpeed, function () {
			$ul.find('li:first').before($ul.find('li:last')).end().css('left', _left);
             if(num==1)
                num=4;
            else
                num--;
            showtext(num);
        $ul.find('li:eq(1)').addClass('blurhide');
        $ul.find('li:eq(1)').css('filter','blur(0px)');
        $ul.find('li:eq(2)').addClass('blurshow');
        $ul.find('li:eq(2)').css('filter','blur(5px)');
			
        
		});
        $ul.find('li:eq(1)').removeClass('blurhide');
        $ul.find('li:eq(2)').removeClass('blurshow');
		return false;
	});
 

	$block.find('a.next').click(function(){

		$ul.stop(false, true).animate({'left' : _left - _width}, _animateSpeed, function () {

			$ul.find('li:last').after($ul.find('li:first')).end().css('left', _left);
            if(num==4)
                num=1;
            else
                num++;
            showtext(num);
        $ul.find('li:eq(1)').addClass('blurhide');
        $ul.find('li:eq(1)').css('filter','blur(0px)');
        $ul.find('li:eq(0)').addClass('blurshow');;
        $ul.find('li:eq(0)').css('filter','blur(5px)');
		});
        $ul.find('li:eq(1)').removeClass('blurhide');
        $ul.find('li:eq(0)').removeClass('blurshow');   
			
		return false;
	});
 
	$block.find('a').focus(function(){
		this.blur();
	});
    
});

function showtext(num){
    switch(num){
        case 1:
            $('#text').find('h1').show().html("My Hometown<br>Yunlin County");
            break;
        case 2:
            $('#text').find('h1').show().html("Beautiful<br>Scenery");
            break;
        case 3:
            $('#text').find('h1').show().html("As you sow, <br>so you reap.");
            break;
        case 4:
            $('#text').find('h1').show().html("Beigang<br>Chaotien Temple");
            break;
        }
}


