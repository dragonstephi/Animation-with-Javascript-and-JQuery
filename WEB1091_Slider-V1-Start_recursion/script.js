$(window).on('load', function() {
    'use strict';

    const imageCount = $("#slider ul li").length;
    const imageWidth = $("#slider ul li img").first().width();
    const totalWidth = (imageWidth * imageCount) + 'px';
    //alert(totalWidth);

    let leftPosition = 0;
    let counter = 0;
    

    $('#slider ul').css('width', totalWidth);

    function imageRoatator(){
        counter++;

        if(counter === imageCount){
            setTimeout(function(){

                $('#slider ul').clone().appendTo('#slider');
                $('#slider ul').last().css('left', imageWidth + 'px'); 

                leftPosition = `-${totalWidth}`

                $('#slider ul').last().animate({left: 0}, 700, 'easeInQuad');
                $('#slider ul').first().animate({left: leftPosition}, 700, 'easeInQuad', function(){
                    $('#slider ul').first().remove();
                });

                counter = 0;
                imageRoatator();

            }, 4000);
        } else{
            setTimeout(function(){
                leftPosition = `-${counter * imageWidth}px`
                $('#slider ul').animate( {left : leftPosition}, 700, 'easeInQuad');
                imageRoatator();
            }, 4000);
        } 
    };
    imageRoatator();
});

