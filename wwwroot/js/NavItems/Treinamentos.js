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

    }
}