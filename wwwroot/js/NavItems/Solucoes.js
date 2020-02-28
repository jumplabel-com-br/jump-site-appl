widthMenor700px();
setInterval(function () { widthMenor700px() }, 1000);

    function widthMenor700px() {
        if ($(window).width() < 768) {
            $('.mobile-col-10').removeClass('col-5').addClass('col-12')
            $('.mobile-col-10 div').removeClass('item-inbox-100px')
            $('.item-inbox-50px').removeClass('item-inbox-50px')
            $('.img-nuvem-solucoes').attr({ 'width' : '301', 'height' : '258'})
        }
    }