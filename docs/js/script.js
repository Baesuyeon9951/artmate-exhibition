console.clear();
// 모바일메뉴 구현
function moblieMenu__init (){
	$('.moblie-top-bar__menu-btn').click(function(){
		$('.mobile-menu').addClass('active');		
	});

	$('.mobile-menu').click(function(){
		$('.mobile-menu').removeClass('active');		
	});

	$('.moblie-menu-wrap').click(function() {
		return false;
	});
}

moblieMenu__init();

function ExhibitionPageMenu1(){

	$('.exhibition-page__menu-1 > ul > li').click(function(){
		$(this).siblings('.active').removeClass('active');

		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}
		else{
			$(this).addClass('active');
		}
	})
}
ExhibitionPageMenu1();