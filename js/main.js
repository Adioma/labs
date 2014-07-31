$('#imagePrevModal').on('show.bs.modal', function (e) {

	$('<img class="img-responsive" src="'+ e.relatedTarget.dataset.remoteImage+ '">').load(function() {
		  $('#imagePrevModal .modal-body').html('');
	      $(this).appendTo($('#imagePrevModal .modal-body'));
	});
	
});


$( document ).ready(function() {
  $('#contact-us').bootstrapValidator();

  $('#do-contact').click(function() {
    //if ($('#contact-us').isValid() ) {
      var subject = $( "input[name=company]" ).val() + " [Infographic]";
      var body = "Hi,\n I would like to make an infographic. " +
                 "Here is my infographic project description:" + "\n" + $("textarea[name=description]" ).val() +
                 "\nBudget: " + $( "select[name=budget]" ).val() + "\n\n" +
                 $("input[name=name]" ).val() + "\n" +
                 $("input[name=phone]" ).val();
      $(location).attr('href', 'mailto:?subject='
                               + encodeURIComponent(subject)
                               + "&body=" 
                               + encodeURIComponent(body)
      );
    //}
  });
});
