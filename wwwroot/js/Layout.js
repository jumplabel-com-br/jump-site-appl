function activeNavItem() {
    $('#navbarNavDropdown ul li a').removeClass('active')

    $('#navbarNavDropdown ul li a').each(function () {
        //debugger;
        console.log($(this).attr('id'))
        let navItem = window.location.href.split('/')[4];

        if (navItem == undefined) {
            $('#Home').addClass('active')
        } else {
            navItem = navItem.split('#')[0];
            $(this).attr('id') == navItem ? $(this).addClass('active') : $(this).removeClass('active')
        }

        if ($('#Alteryx').attr('class') == 'nav-link element-background-black-2 mobile-text-center active' ||
            $('#OneTrustLGPD').attr('class') == 'nav-link element-background-black-2 mobile-text-center active' || 
            $('#Solucoes').attr('class') == 'nav-link element-background-black-2 mobile-text-center active') {
            $('#navbarDropdown').addClass('active')
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
            $('.toast-alert-input').toast({ delay: 5000, animation: true }).toast('show');
            $(this).focus();
            verification = false;
            return verification;
        }

        if ($(this).attr('placeholder') == 'Email' && validacaoEmail($(this).val()) == false) {
            $('.toast-alert-input .toast-body').html('O campo ' + $(this).attr('placeholder') + ' é inválido!')
            $('.toast-alert-input').toast({ delay: 5000, animation: true }).toast('show');
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
        strMessage = `O usuário ${$(`${form} #Nome`).val()} efetou um contato através do nosso site, email para contato ${$(`${form} #Remetente`).val()}
        , telefone para contato ${$(`${form} #Telefone`).val()}, messagem descrita pelo usuário ${$(`${form} #rascunho`).val()};
        `;

    } else if (form == '#formTraining') {
        strMessage = `O usuário ${$(`${form} #Nome`).val()} cadastrou no ${$('#modalTraining .modal-title').html()}, através do email: ${$(`${form} #Remetente`).val()}, telefone: ${$(`${form} #Telefone`).val()} e curso do tipo: ${$(`${form} input[name=tipoCurso]`).val()}`;
    }
    else if (form == '#formOneTrust') {
        strMessage = `O usuário ${$(`${form} #Nome`).val()}, da empresa: ${$(`${form} #Empresa`).val()} efetou o cadastro no OneTrust através do email: ${$(`${form} #Remetente`).val()}, com o  telefone: ${$(`${form} #Telefone`).val()}.`;

    } else if (true) {
        strMessage = $(`${form} #Nome`).val() + ' efetuou o cadastro com êxito a partir do email ' + $(`${form} #Remetente`).val();
    }
    //strMessage = strMessage.replace(/[<br/>]/g, '\n');

    $(`${form} #Mensagem`).val(strMessage.replace(/<br>/g, ''));

    console.log($(`${form} #Mensagem`).val())
}

function SendEmail(form, envioToUser = false) {
    questionInputRequired(form);


    if (verification == false) {
        return false;
    }

    /*if (envioToUser) {

        let destino = $(`${form} #Destino`).val();
        let remetente = $(`${form} #Remetente`).val();

        let strM = `Parábens ${strMessage.split(' ')[0]} pelo seu cadastrado em nosso treinamento, logo entraremos em contato.`
        $(`${form} #Mensagem`).val(strM);
        $(`${form} #Destino`).val(remetente);
        $(`${form} #Remetente`).val(destino);

    }*/

    $.ajax({
        url: '/SendEmail/EnviaEmail',
        type: 'POST',
        data: $(form).serialize(),
        beforeSend: function () {
            $('.toast-send-email-success .toast-body').html('O Email está sendo processado, por favor aguarde!');
            $('.toast-send-email-success').toast({ delay: 9000, animation: true }).toast('show');
        }
    })
        .done(function (data) {

            $('.toast-send-email-success').toast('hide');

            InsertEmailDB(
                $('#Nome').val() == undefined ? '' : $('#Nome').val(),
                $('#Remetente').val() == undefined ? '' : $('#Remetente').val(),
                $('#Telefone').val() == undefined ? '' : $('#Telefone').val(),
                $('#Mensagem').val() == undefined ? '' : $('#Mensagem').val(),
                $('#Destino').val() == undefined ? '' : $('#Destino').val(),
                $('#Assunto').val() == undefined ? '' : $('#Assunto').val(),
                $('#Empresa').val() == undefined ? '' : $('#Empresa').val(),
                $('#TipoCurso').val() == undefined ? '' : $('#TipoCurso').val()
            )

            $('.toast-send-email-success .toast-body').html('Email enviado com êxito, logo entraremos em contato');
            $('.toast-send-email-success').toast({ delay: 5000, animation: true }).toast('show');

            $('#Nome').val() == undefined ? '' : $('#Nome').val(''),
            $('#Remetente').val() == undefined ? '' : $('#Remetente').val(''),
            $('#Telefone').val() == undefined ? '' : $('#Telefone').val(''),
            $('#Mensagem').val() == undefined ? '' : $('#Mensagem').val(''),
            $('#rascunho').val() == undefined ? '' : $('#rascunho').val(''),
            $('#Empresa').val() == undefined ? '' : $('#Empresa').val(''),
            $('#TipoCurso').val() == undefined ? '' : $('#TipoCurso').val('')


        })
        .fail(function () {
            console.log("error");
        });
}


function InsertEmailDB(Nome, Remetente, Telefone, Mensagem, Destino, Assunto, Empresa, TipoCurso) {

    let params = { Nome, Remetente, Telefone, Mensagem, Destino, Assunto, Empresa, TipoCurso }

    $.ajax({
        url: '/Emails/Create',
        type: 'POST',
        data: params,
    })
        .done(function () {
            console.log("success");

            $('form input[type="text"], form select').each(function () { $(this).val('') });
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