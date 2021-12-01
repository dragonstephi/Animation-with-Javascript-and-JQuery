(function(){
    'use strict';

    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    tabs.forEach(tab => {
        tab.addEventListener('click', selectTab);
    });

    function selectTab(event){
        event.preventDefault();
        tabs.forEach(tab => {
            tab.removeAttribute('class');
        });
        event.target.className = 'active';

        const thisTab = this.getAttribute('href');
        const thisContent = document.querySelector(thisTab);

        const oldContent = document.querySelector('.visible');
        oldContent.className = 'visuallyhidden';
        oldContent.addEventListener('transitionend', function(){
            oldContent.className = 'hidden';
            thisContent.className = 'visuallyhidden visible';
            setTimeout(function(){
                thisContent.classList.remove('visuallyhidden');
            }, 300);
        },{capture: false, once: true, passive: false});
    };

})();




















































/* 
    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    for (var i=0; i<tabs.length; i++){
        tabs[i].addEventListener('click', selectTab);
    }

    function selectTab(event){
        event.preventDefault();

        for (var i=0; i<tabs.length; i++){
            tabs[i].removeAttribute('class');
        };

        event.target.classList.add('active');

        var thisTab = event.target.getAttribute('href');
        var thisContent = document.querySelector(thisTab);
    
        var oldContent = document.querySelector('.visible');
        oldContent.className = 'visuallyhidden';
        oldContent.addEventListener('transitionend', function(){
            oldContent.className = 'hidden';
            thisContent.className = 'visuallyhidden visible';
            setTimeout(function(){
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        },{capture:false, once:true, passive:false});
    }; */
