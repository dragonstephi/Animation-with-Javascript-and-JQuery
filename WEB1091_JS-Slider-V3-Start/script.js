window.addEventListener('load', function(){

    //How many Slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    //alert(slideCount);
    //How wide is each slide?
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;

    //Total width of the slider
    const totalWidth = slideCount * slideWidth + 'px';
    //Slider DOM element
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#prev');

    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function(evt){
        evt.preventDefault();
        counter ++;
        if(counter == slideCount){
            counter = 0;
        }
        leftPosition = `-${counter * slideWidth}px`;;
        slider.style.left = leftPosition;
    });

    previous.addEventListener('click', function(evt){
        evt.preventDefault();
        counter --;
        if(counter < 0){
            counter = slideCount - 1;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });

});