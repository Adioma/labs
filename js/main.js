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
                         "Here is my infographic project description:" + "\n" + $("textarea[name=description]" ).val() + "\n\n";
              var dataSet = $("input[name=data-set]" ).val();
              if ( dataSet ) {
                body += "\n Data Set: " + dataSet + "\n";
              }
              var visualAnalogy = $("input[name=visual-analogy]" ).val();
              if ( visualAnalogy ) {
                body += "\n Visual analogy: " + visualAnalogy + "\n";
              }
              var sketch = $("input[name=sketch]" ).val();
              if ( sketch ) {
                body += "\n Sketch: " + sketch + "\n";
              }
              var distributionChannel = $("input[name=distribution-channel]" ).val();
              if ( distributionChannel ) {
                body += "\n Primary distribution channel : " + distributionChannel + "\n";
              }
              var distributionTypes = $("input[type='checkbox'][name='distribution-type']:checked");
              if (distributionTypes && distributionTypes.length > 0) {
                body += "\n I also want to distribute it ";
                distributionTypes.each(function (i, item) {
                  if (i > 0) {
                    body += ", ";
                  }
                  body += item.value;
                });
                body +=  "\n";
              }
                            
              var budget = $("select[name=budget]" ).val();
              if ( budget ) {
                body += "\n Budget: " + budget + "\n";
              }
              var name = $("input[name=name]" ).val();
              var contact = $("input[name=contact]" ).val();
              
              if (name && contact) {
                body += "\n";
              }            
              if ( name ) {
                body += "\n" + name;
              }
              if ( contact ) {
                body += "\n" + $("#contact-picker").data('contactType') + ": " + contact;
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
          case "facebook":
              placeholder  = "your Facebook Profile"
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
