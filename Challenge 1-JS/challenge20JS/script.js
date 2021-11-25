(function(){
    'use strict'
    $('nav ul li a').click(function(){
                         
        const id = '#para' + $(this).attr('id')

        $('p').css('color', 'black');
        $(id).css('color', 'red');

    })
})();