function form() {
    $("form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/index.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#main_modal').fadeOut();
            $('#thanks, .overlay').fadeIn('slow');
            $("form").trigger("reset");
        });
        return false;
    });

    let form = document.querySelector('.modal__form'),
    input = form.getElementsByTagName('input'),
    successHeader = document.querySelector(".success__header"),
    successText = document.querySelector(".success__header");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);
        
        function postData() {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                let formData = new FormData(form);  //данные, которые ввёл пользователь
                request.send(formData);             //отправляет данные на сервер

                request.addEventListener('readystatechange', function() {  //когда форма отправиться
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status === 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            });
        }
        function cleanInput() {
            for (let i = 0; i < input.length; i++) {          //очищаем поля после отправки
                input[i].value = '';
            }
        }
        postData()
            .catch(() => {
                successHeader.innerHTML = 'Ошибка!';
                successText.innerHTML = 'Не удалось отправить заявку' ;
            })
            .then(cleanInput());
    });
}

module.exports = form;