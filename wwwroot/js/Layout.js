function activeNavItem() {
    $('#navbarNavDropdown ul li a').removeClass('active')

    $('#navbarNavDropdown ul li a').each(function () {
        console.log($(this).attr('id'))
        let navItem = window.location.href.split('/')[4];

        if (navItem == undefined) {
            $('#Home').addClass('active')
        } else {
            navItem = navItem.split('#')[0];
            $(this).attr('id') == navItem ? $(this).addClass('active') : $(this).removeClass('active')
        }
    })
}

activeNavItem();

var strMessage = '';

setInterval(function () { genericWidthMenor700px() }, 1000);

function genericWidthMenor700px() {
    if ($(window).width() < 768) {
        $('.eleven div').removeClass('col-6').addClass('col-12')
        $('.div-btn').removeClass('col-3');
        $('.div-btn').addClass('ml-3');
        $('.btn').removeClass('col-3');
        $('.btn-submit-contact').removeClass('col-4')
        $('.btn-submit-contact').addClass('col-8')

        $('.div-btn-onetrust').removeClass('col-3');
        $('.btn-onetrust').removeClass('ml-3 mt-3 col-10');
        $('.btn-onetrust').addClass('mr-3');

        $('.img-jp-home').attr('width', '300');
        $('.img-jp-home').attr('heigth', '325');

        $('.container-mobile-text-center').addClass('container text-center mt-3');
        $('.mobile-text-center').addClass('text-center mt-3');
    }
}


var verification = true;

function questionInputRequired(form) {
    $(`${form} input[type="text"], ${form} select, ${form} textarea`).each(function () {

        if ($(this).val() == '') {
            $('.toast-alert-input .toast-body').html('Preencha o campo ' + $(this).attr('placeholder'))
            $('.toast-alert-input').toast('show');
            $(this).focus();
            verification = false;
            return verification;
        }

        if ($(this).attr('placeholder') == 'Email' && validacaoEmail($(this).val()) == false) {
            $('.toast-alert-input .toast-body').html('O campo ' + $(this).attr('placeholder') + ' é inválido!')
            $('.toast-alert-input').toast('show');
            $(this).focus();
            return false;
        }

        verification = true;
    });
}

function validacaoEmail(field) {
    var sEmail = field;
    var emailFilter = /^.+@.+\..{2,}$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
    // condição
    if (!(emailFilter.test(sEmail)) || sEmail.match(illegalChars)) {
        return false;
    }
}

function Message(form) {

    if (form == '#FormEmail') {
        strMessage = $(`${form} #Nome`).val() + ';' +
            $(`${form} #Remetente`).val() + ';' +
            $(`${form} #Telefone`).val() + ';' +
            $(`${form} #rascunho`).val();

    } else if (form == '#formTraining') {
        strMessage = $(`${form} #Nome`).val() + ' ;' +
            $(`${form} #Remetente`).val() + ' ;' +
            $(`${form} #Telefone`).val() + ' ;' +
            $(`${form} input[name=tipoCurso]`).val();
    }
    else if (form == '#formOneTrust') {
        strMessage = $(`${form} #Nome`).val() + '; ' +
            $(`${form} #Remetente`).val() + '; ' +
            $(`${form} #Telefone`).val() + '; ' +
            $(`${form} #Empresa`).val();

    }else if (true) {
        strMessage = $(`${form} #Nome`).val() + ' efetuou o cadastro com êxito a partir do email ' + $(`${form} #Remetente`).val();
    }
    //strMessage = strMessage.replace(/[<br/>]/g, '\n');

    $(`${form} #Mensagem`).val(strMessage);

    console.log($(`${form} #Mensagem`).val())
}

function SendEmail(form, envioToUser = false) {
    questionInputRequired(form);

    if (verification == false) {
        return false;
    }

    if (envioToUser) {

        let destino = $(`${form} #Destino`).val();
        let remetente = $(`${form} #Remetente`).val();

        let strM = `Parábens ${strMessage.split(' ')[0]} agora você pode acompanhar seu treinamento através do link ...`
        $(`${form} #Mensagem`).val(strM);
        $(`${form} #Destino`).val(remetente);
        $(`${form} #Remetente`).val(destino);

    }

    $.ajax({
        url: '/SendEmail/EnviaEmail',
        type: 'POST',
        dataType: 'json',
        data: $(form).serialize(),
    })
        .done(function (data) {

            if (form == '#FormEmailModal' || form == '#formTraining') {
                $('.toast-send-email-success .toast-body').html('Inscrição efetuada com êxito');
                $(`${form} #Destino`).val() == 'contato@jumplabel.com.br' ? SendEmail(`${form}`, true) : '';

                console.log('1');
            }

            $('.toast-send-email-success').toast('show');

            console.log('3')


        })
        .fail(function () {
            console.log("error");
        });
}

var errorGeoLocation = document.querySelector('#errorGeoLocation');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else {
        errorGeoLocation.innerHTML = "Geolocalização não é suportada nesse browser.";
    }
}

function showPosition(position) {
    lat = -23.575597;
    lon = -46.645977;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('map1')
    mapholder.style.height = '400px';
    mapholder.style.width = '100%';

    var myOptions = {
        center: latlon, zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    };

    var map = new google.maps.Map(document.getElementById("map1"), myOptions);
    var marker = new google.maps.Marker({ position: latlon, map: map, title: "Jump Label Solutions!" });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorGeoLocation.innerHTML = "Usuário rejeitou a solicitação de Geolocalização."
            break;
        case error.POSITION_UNAVAILABLE:
            errorGeoLocation.innerHTML = "Localização indisponível."
            break;
        case error.TIMEOUT:
            errorGeoLocation.innerHTML = "O tempo da requisição expirou."
            break;
        case error.UNKNOWN_ERROR:
            errorGeoLocation.innerHTML = "Algum erro desconhecido aconteceu."
            break;
    }
}

//getLocation();

$('.mask-telefone').mask('(00) 00000-0000')