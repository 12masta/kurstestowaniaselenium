$('#SendButton').on('click', function(e) {
    var emailFieldValue = $('#emailInput').val();
    if (validateEmail(emailFieldValue)) {
      console.log("Valid");
      saveToFirebase(emailFieldValue)
    } else {
      console.log("Invalid");
      $('#SendButton').text('Spróbuj ponownie');
      $.notify({
        icon: 'fa fa-exclamation',
        message: 'Niepoprawny format adresu email.'
      }, {
        delay: 6000,
        type: 'warning',
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
   } })
  
  
  function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }
  
  function saveToFirebase(emailFieldValue) {
    $('#SendButton').text('Nie wysłano');
  console.error("Error adding document: ", error);
  $.notify({
    icon: 'fa fa-exclamation',
    message: 'Problem z wysłaniem, odśwież proszę stronę. Jeżeli problem się' +
      ' powtórzy skontaktuj się z administratorem: stanek.marcinp@gmail.com'
  }, {
    delay: 6000,
    type: 'danger',
    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span data-notify="icon"></span> ' +
      '<span data-notify="message">{2}</span>' +
      '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
      '</div>' +
      '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
  }


//   $('#SendButton').text('Nie wysłano');
//   console.error("Error adding document: ", error);
//   $.notify({
//     icon: 'fa fa-exclamation',
//     message: 'Problem z wysłaniem, odśwież proszę stronę. Jeżeli problem się' +
//       ' powtórzy skontaktuj się z administratorem: stanek.marcinp@gmail.com'
//   }, {
//     delay: 6000,
//     type: 'danger',
//     template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
//       '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
//       '<span data-notify="icon"></span> ' +
//       '<span data-notify="message">{2}</span>' +
//       '<div class="progress" data-notify="progressbar">' +
//       '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
//       '</div>' +
//       '<a href="{3}" target="{4}" data-notify="url"></a>' +
//       '</div>'
//   });

// $('#SendButton').text('Wyślij ponownie');
// console.log("Document written with ID: ", docRef.id);
// $.notify({
//   icon: 'fa fa-check',
//   message: 'Wysłano, dziękuje za Twój email. :)'
// }, {
//   delay: 6000,
//   type: 'success',
//   template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
//     '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
//     '<span data-notify="icon"></span> ' +
//     '<span data-notify="message">{2}</span>' +
//     '<div class="progress" data-notify="progressbar">' +
//     '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
//     '</div>' +
//     '<a href="{3}" target="{4}" data-notify="url"></a>' +
//     '</div>'
// });