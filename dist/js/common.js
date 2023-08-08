$(document).ready(function () {
	//Date picker
	$('.datetimepicker').datetimepicker({
		format: 'L',
	});

	if ($('.carenation-body .carenation-table').length > 0) {
		setTimeout(() => {
			var headHeight = $('.carenation-body .carenation-body__head').outerHeight();
			console.log(headHeight);
			$('.carenation-body .carenation-table').css('height', 'calc(100% - ' + headHeight + 'px)');
		}, 10);
	}
});
