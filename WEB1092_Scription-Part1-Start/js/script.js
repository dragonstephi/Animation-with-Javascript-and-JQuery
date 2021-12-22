(function(){
// Smooth Scroll
const navLinks = document.querySelectorAll('nav ul li a');

const logoLink = document.querySelector('.logo');

navLinks.forEach(function(eachLink){
    eachLink.addEventListener('click',smoothScroll);
});



function smoothScroll(evt){
    evt.preventDefault();
    const targetID = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    const originalTop = Math.floor(targetSection.getBoundingClientRect().top - 200);
    window.scrollBy({top: originalTop, left: 0, behavior: 'smooth'});
    //console.log(originalTop);
};

window.addEventListener('load', function(){
    const posts = document.querySelectorAll('section');
    let postTops = [];
    let pagetop;
    let counter = 1;
    let prevcounter = 0;
    let doneResizing;
    
    resetPagePosition();
    //console.log(postTops);

    window.addEventListener('scroll', function(){
        pagetop = window.pageYOffset + 250;
        //console.log(pagetop);
        if (pagetop > postTops[counter]){
            counter++;
            //console.log(`scrolling down ${counter}`);
        } else if (counter > 1 && pagetop < postTops[counter-1]){
            counter--;
            //console.log(`scrolling up ${counter}`);
        }
        if(counter != prevcounter){
            navLinks.forEach(function(eachLink){
                eachLink.removeAttribute('class');
            });

            const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
            prevCounter = counter;
        }
    });

    function resetPagePosition(){
        postTops = [];
    
        posts.forEach(function(post){
            postTops.push ( Math.floor(post.getBoundingClientRect().top + window.pageYOffset));
        });
    
        const pagePosition = window.pageYOffset + 250;
        counter = 0;
        postTops.forEach(function(post) {if(pagePosition > post){counter ++;}});
        navLinks.forEach(function(eachLink){eachLink.removeAttribute('class');});
        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
    }
    
    logoLink.addEventListener('click', function(evt){
        evt.preventDefault();
        const documentHeight = $(document).height();
        window.scrollBy({top: -documentHeight, left:0, behavior: 'smooth'});
    });

});



// Flexslider
$(window).on('load', function(){
    
    
    $('#slider .flexslider').flexslider({
        animation: 'slide',
        slideshowspeed: 2000,
        start:(function(){
            $('#slider .cta').animate({bottom : 0}, 1000);
        }),
        after: (function(){
            const ctaHeight = - $('#slider .cta').innerHeight();
            
            if($('#slider .cta').css('bottom') == ctaHeight+'px'){
                $('#slider .cta').animate({bottom : 0}, 1000);
            }
        }),
        before: (function(){
            const ctaHeight = - $('#slider .cta').innerHeight();
            $('#slider .cta').css({bottom : ctaHeight}, 1000);
        }),
    });
        
});

// Tabs

$('#pricing > #tabs > ul > li > a').click(function(){
			
    $('#pricing > #tabs > ul > li > a ').css({ background: '#C8D6AF', color: '#061923'});
    $(this).css({ background: '#F7FFEA', color: '#061923'});
    
    //console.log(this.innerHTML);
    const thisTab = $(this).attr('href');

    $('#pricing #tabs > div:visible').fadeOut(500, function(){
        $(thisTab).fadeIn(500);
    });
});


// Content Rotator
$(window).on('load', function(){
    let counter = 1;

    function contentRotator (){
        $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000, function(){
            if($(this).is('#rotator blockquote:last-child')){
                setTimeout(function(){
                    $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
                        counter = 1;
                        contentRotator();
                    });
                }, 3000);
            } else {
                setTimeout(function(){
                    $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000, function(){
                        counter ++;
                        contentRotator();
                    });
                }, 3000);
                
            }
        });
    }
    
    contentRotator();    
});
// Features Rotator 

let counter = 1;

const listHeight = $('#feature-container #features .eachfeature').height() + 'px';
const listLength = $('#feature-container #features .eachfeature li').length;
const featureList = $('#feature-container #features .eachfeature');

    function featureRotator (){
        //first list should red color and bold, all eachfeature move up and delete and move to last
        //if end of eachfeature length, setTimeout , counter = 1, move up, featureRotator(); 
        //if not , setTimeout , counter ++ , move up, featureRotator();
        $(featureList).children().eq(0).css({color : '#FF5964', fontWeight: '600'});

        let scrollTop = 0;
        let itemHeight = $(featureList).children().eq(1).outerHeight();
        
        setTimeout(function(){
            $('#feature-container').animate({
                scrollTop: itemHeight
            }, 1000, 
                function(){
                    $(featureList).children().eq(0).appendTo('.eachfeature');
                    $(featureList).children().eq(listLength-1).css({color: '#061923', fontWeight: 'normal'});
                    console.log(listLength);
                    featureRotator();
                });
        }, 2000)
    }
    
featureRotator();






})();


