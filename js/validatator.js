function validator() {
    // Mask
    $("input[name=phone]").mask("+7(999) 999-9999");
    // Validate forms
    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                email: {
                  required: true,
                  email: true
                },
                phone: "required",
              },
            messages: {
                name: {
                  required: "Пожалуйста, ввидите своё имя",
                  minlength: jQuery.validator.format("Введите больше {0} символов!")
                },
                email: {
                    required: "Пожалуйста, ввидите свою почту",
                    email: "Неправильно введён адрес почты"
                  },
                phone: {
                    required: "Пожалуйста, ввидите свой телефон",
                  }
              }
        });
    }

    valideForms("#modal");
}

module.exports = validator;