widthMenor700px()

setInterval(function () { widthMenor700px() }, 1000);

function widthMenor700px() {
    if ($(window).width() < 768) {
        $('.col-4,.col-3').addClass('col-12')
        $('.col-12').removeClass('col-4 col-3')
    }
}