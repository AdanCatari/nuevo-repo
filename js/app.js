window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carousel__lista'), {
        slidesToScroll: 1,
        slidesToShow: 6,
        draggable: true,
        dots: '.carousel__indicadores'
    });
});