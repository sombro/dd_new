$(document).ready(function(){

	$('.x-loader').hide();

	var screenIdOld = 1,
		time = 300,
		easing = 'swing';

	resizeProjectBlocks();

	$('.x-menu li').on('click', function(){
		var screenId = $(this).data('scr');
		if ($('.x-project_about').is(':visible')){
			hideProjectAbout(time, menuNavigateHorizontal(screenId) )
		}
		else{
			menuNavigateHorizontal(screenId)
		}		
	});

	$('.x-project_block').on('click', function(){
		var dataProjectId = $(this).data('projectid');
		showProjectAbout(time, dataProjectId)	
	});

	$(window).resize(function() {
		resizeProjectBlocks()
	});

	function hideProjectAbout(timeHide){
		$('.x-project_about').animate({left: '100%'}, timeHide, easing, function(){
			$('.x-project_about_block').hide()
			$('.x-project_about').hide()
		})
	};

	function showProjectAbout(timeShow, dataProjectId){
		$(".x-project_about_block[data-projectid='" + dataProjectId + "']").show()
		$('.x-project_about').show().animate({left: '10%'}, timeShow, easing)
	};

	function resizeProjectBlocks(){
		$('.project_block').css('height', $('.project_block').width());
	};

	function menuNavigateHorizontal(screenId){

		var pathNew = ".screen[data-scr='" + screenId + "']",
			pathOld = ".screen[data-scr='" + screenIdOld + "']";

		if (screenId != screenIdOld){
			if (screenId > screenIdOld){
				$(pathNew).animate({left : '100%'}, 0, function(){
					$(this).animate({left : '0'}, time, easing).addClass('active')
				})
				$(pathOld).animate({left: '-100%'}, time, easing, function(){
					$(this).removeClass('active').animate({left : '0'}, 0)
				})
			}
			else{
				$(pathNew).animate({left : '-100%'}, 0, function(){
					$(this).animate({left : '0'}, time, easing).addClass('active')
				})
				$(pathOld).animate({left : '100%'}, time, easing, function(){
					$(this).removeClass('active').animate({left : '0'}, 0)
				})
			}
		}	
		screenIdOld = screenId
	};

});