widthMenor700px()

setInterval(function () { widthMenor700px() }, 1000);

function widthMenor700px() {
    if ($(window).width() < 768) {
        $('.replace-col-1-to-col-3').removeClass('col-1');
        $('.replace-col-4-to-col-2').removeClass('col-4');
        $('.replace-col-4-to-col-12').removeClass('col-4');
        $('.replace-col-3-to-col-12').removeClass('col-3');
        $('.replace-col-3-to-col-12').removeClass('ml-mobile-4-percent')

        $('.replace-col-1-to-col-3').addClass('col-3');
        $('.replace-col-4-to-col-2').addClass('col-2');
        $('.replace-col-4-to-col-12').addClass('col-12');
        $('.replace-col-3-to-col-12').addClass('col-12');

        $('.remove-ml-3').removeClass('ml-3')
        $('.col-12-mobile').addClass('col-12')
        $('.text-center-mobile').addClass('text-center')

        $('.div-sub-title-onetrust').removeClass('col-4').addClass('col-12 text-center');
        $('.ml-5percent-mobile .col-4').addClass('col-12').removeClass('col-4')
    }
}