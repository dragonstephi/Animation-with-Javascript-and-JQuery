(function(){
    'use strict'

    const navLink = document.querySelectorAll('nav ul li a');
    const paragraphs = document.querySelectorAll('p');

    for(let i=0; i<navLink.length; i++){
        navLink[i].addEventListener('click', function(){
            const paraNumber = '#para' + this.id;

            for(let i=0; i<paragraphs.length; i++){
                paragraphs[i].style.color = 'black';
            }

        const thisParagraph = document.querySelector(paraNumber);
        thisParagraph.style.color = 'red';
        });
    }
})();