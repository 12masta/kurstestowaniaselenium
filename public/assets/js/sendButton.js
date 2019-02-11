$("#SendButton").on("click", function(e) {
  var emailFieldValue = $("#emailInput").val();
  if (validateEmail(emailFieldValue)) {
    console.log("Valid email");
    createOrUpdateContact(emailFieldValue);
  } else {
    console.log("Invalid email");
    $("#SendButton").val("Spróbuj ponownie");
    $.notify(
      {
        icon: "fa fa-exclamation",
        message: "Niepoprawny format adresu email."
      },
      {
        delay: 6000,
        type: "warning",
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
          '<span data-notify="icon"></span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          "</div>" +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          "</div>"
      }
    );
  }
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function createOrUpdateContact(emailFieldValue) {
  var apiUrl = "https://intense-tor-29387.herokuapp.com/createorupdatecontact"; // get this from settings

  var contact = {
    contact: {
      email: emailFieldValue,
      firstName: "",
      lastName: "",
      phone: ""
    }
  };

  console.log(JSON.stringify(contact));
  $.ajax({
    url: apiUrl,
    type: "post",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(contact),
    dataType: "json",
    success: function(data) {
      console.info(data);
      $("#SendButton").val("Wyślij ponownie");
      $.notify(
        {
          icon: "fa fa-check",
          message: "Wysłano, dziękuje za Twój email. :)"
        },
        {
          delay: 6000,
          type: "success",
          template:
            '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            "</div>" +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            "</div>"
        }
      );
      window.location.href = "dziekuje.html";
    },
    error: function(request, status, error) {
      console.info(request, status, error);
      $("#SendButton").val("Nie wysłano");
      console.error("Error adding document: ");
      $.notify(
        {
          icon: "fa fa-exclamation",
          message:
            "Problem z wysłaniem, odśwież proszę stronę. Jeżeli problem się" +
            " powtórzy skontaktuj się z administratorem: kontakt@marcinstanek.pl"
        },
        {
          delay: 6000,
          type: "danger",
          template:
            '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            "</div>" +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            "</div>"
        }
      );
    }
  });
}
