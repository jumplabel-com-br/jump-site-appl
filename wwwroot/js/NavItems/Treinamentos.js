widthMenor700px()

setInterval(function () { widthMenor700px() }, 1000);

function widthMenor700px() {
    if ($(window).width() < 768) {
        $('.mobile-col-10').removeClass('col-3 col-5 col-6').addClass('col-10');
        $('.mobile-col-12').removeClass('col-3 col-5').addClass('col-12');
        $('.item-inbox-75px').removeClass('item-inbox-75px').addClass('item-inbox-25px')
        $('.item-inbox-25px img').attr({ 'height': '200' });
        $('.mobile-height-max').attr({ 'style': 'height : 1020px !important' });
        $('.item-inbox-100px').removeClass('item-inbox-100px');
        $('.col-2-to-col-1').removeClass('col-2').addClass('col-1');

        $('.h3-subtext-melhor-experiencia').html('Melhore sua experiência com dados. Escolha <strong class="element-text-color-orange">uma ou mais ferramentas</strong> alinhem com a sua necessidade <br /> e realidade profissional.')
        $('.h3-subtext-focado').html('Focando não apenas em técnicas de extrações e manipulações de dados, mas em <strong class="element-text-color-orange">entender, interpretar <br />  e gerar insights.</strong>')

    }
}