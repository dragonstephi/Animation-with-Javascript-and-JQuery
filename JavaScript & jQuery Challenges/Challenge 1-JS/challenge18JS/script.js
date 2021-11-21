(function(){

    'use strict'

    $('nav ul li a').click(function(){
        const thisLink = $(this).html();
        $('#paragraph').html(`You clicked ${thisLink}`);
    });

})();