widthMenor700px()

setInterval(function () { widthMenor700px() }, 1000);

function widthMenor700px() {

    if ($(window).width() < 768) {
        $('.mobile-col-10').removeClass('col-5').addClass('col-10')
        $('.text-enter-lines-black').removeClass('col-4').addClass('col-12');
        $('.div-line-black').removeClass('col-3').addClass('col-10')
        $('.margin-right-line-left').show();
        $('.div-solucoes-inteligentes').removeClass('col-3').addClass('col-12')
        $('.text-left, .text-right').addClass('text-center').removeClass('text-left text-right');
        $('.div-consultoria-professional').removeClass('col-6 col-3').addClass('col-12 text-center')
        $('.div-consultoria-professional img').attr({ 'width': '320', 'height': '318' })
        $('.ten .item-inbox-30px-mobile').removeClass('col-3').addClass('col-12 text-center')
        $('.nine div, .ten div').removeClass('col-3 item-inbox-100px')
        $('.div-elementor-button').removeClass('col-7 text-center').addClass('col-12 spacing-top-plus-5-mobile ml-3 text-center')
        $('.div-elementor-onetrust').removeClass('col-3').addClass('col-10 text-center')

        $('.img-jump-label-home').attr({ 'width': '320', 'height': '280' })
        $('.text-treinamentos-index').html('Oferecemos qualificação profissional adaptada as necessidades da sua equipe. Turmas regulares em nossas instalações e cursos online. <br> Somos a primeira Academia SAS da América Latina!')
    }
}