$('#imagePrevModal').on('show.bs.modal', function (e) {

	$('<img class="img-responsive" src="'+ e.relatedTarget.dataset.remoteImage+ '">').load(function() {
		  $('#imagePrevModal .modal-body').html('');
	      $(this).appendTo($('#imagePrevModal .modal-body'));
	});	
	
	ga('send', 'pageview', '/modal/portfolio');
});

$('#infoModal').on('show.bs.modal', function (e) {
	ga('send', 'pageview', '/modal/contact-us');
});


$( document ).ready(function() {
  $('#contact-us')
          .bootstrapValidator()
          .on('success.form.bv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            if ( $('#contact-us').data('bootstrapValidator').isValid() ) {
              var subject = $( "input[name=company]" ).val();
              var body = "Hi,\n I would like to make an infographic about '" + subject + "'.\n" +
                         "Here is my infographic project description:" + "\n" + $("textarea[name=description]" ).val() + "\n";
              var budget = $("select[name=budget]" ).val();
              if ( budget ) {
                body += "\n Budget: " + budget + "\n";
              }
              if ( $("input[name=name]" ).val() ) {
                body += "\n" + $("input[name=name]" ).val();
              }
              if ( $("input[name=contact]").val() ) {
                body += "\n" + $("#contact-picker").data('contactType') + ": " + $("input[name=contact]" ).val();
              }
              var address = 'i' + 'n' + 'f' + 'o' + 'graphics' + '@' + 'fnf' + '.' + 'vc';
              $(location).attr('href', 'mailto:' + address + '?subject='
                                       + encodeURIComponent(subject + " [Infographic]")
                                       + "&body=" 
                                       + encodeURIComponent(body)
              );
              $('#infoModal').modal('hide');
              $('#do-contact').prop('disabled', false);
              ga('send', 'event', 'contact-us', 'submit', 'contact submitted');
            }
  });

  $(".dropdown-menu li a").click(function(){
      var iconClass = $(this).find("i").attr('class');
      $("#contact-picker.btn>i").attr('class', iconClass);
      var contact = $(this).data('contactType');
      $("#contact-picker").data('contactType', contact );
      $("#contact-data").val("");
      var placeholder = "";
      switch (contact) {
          case "phone":
              placeholder  = "your phone number"
              break;
          case "skype":
              placeholder  = "your Skype ID"
              break;
          case "hangout":
              placeholder  = "your Google Hangouts ID"
              break;
          case "email":
              placeholder  = "your alternative email"
              break;
      }
      $("#contact-data").attr("placeholder", placeholder);
      $("#contact-group").addClass("has-success");
  });
  
  $( "select[name=budget]").change( function() {
    $(this).parent().addClass("has-success");
  });
  
});
