$(document).ready(function () {
	var TrueValue = true;
	// $('.show_my_info').on('click', function () {
	// 	if (TrueValue == true) {
	// 	$('.info_side').css('transform', 'scale(1)');
	// 		TrueValue = false;
	// 		$('.show_my_info h6').text('galary')
	// 	} else {
	// 		$('.info_side').css('transform', 'scale(0)');
	// 		$('.show_my_info h6').text('my info')

	// 		TrueValue = true;
	// 	}
	// })

	$('.list_chose2 span').click(function () {
		$('.list_chose2 span').removeClass('active');
		$(this).addClass('active');
		var val = $(this).data('chose');
		$('.galary_gird div').hide();
		if (val == 'all') {
		$('.galary_gird div').show();
		}
		$('.galary_gird div').each(function () {
			if ($(this).hasClass(val)) {
				$(this).show();
		       }
		})
		console.log()
	});
		$('.list_chose span').click(function () {
	      	$('.list_chose span').removeClass('active');
			$(this).addClass('active');
			$('.content_chose > div').removeClass('active');
			$('.content_chose .' + $(this).data('value')).addClass('active');
		// console.log($(this).data('value'))
			console.log(('.content_chose .' + $(this).data('value')));
	});
})