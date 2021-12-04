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

    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    var timer = setInterval(function(evt){
        //evt.preventDefault();
        counter ++;
        if(counter == slideCount){
            counter = 0;
        }
        leftPosition = `-${counter * slideWidth}px`;;
        slider.style.left = leftPosition;
    }, 4000);

    
       
    

});