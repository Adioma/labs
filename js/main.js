$('#imagePrevModal').on('show.bs.modal', function (e) {

	$('<img class="img-responsive" src="'+ e.relatedTarget.dataset.remoteImage+ '">').load(function() {
		  $('#imagePrevModal .modal-body').html('');
	      $(this).appendTo($('#imagePrevModal .modal-body'));
	});
});
