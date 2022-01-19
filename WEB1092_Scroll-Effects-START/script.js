const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(eachLink){
    eachLink.addEventListener('click', smoothScroll);
});

function smoothScroll(evt){
    evt.preventDefault();
    const targetID = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    const originalTop = Math.floor(targetSection.getBoundingClientRect().top - 200);
    window.scrollBy({top: originalTop, left: 0, behavior: 'smooth'});
};

window.addEventListener('load', function(){
    const posts = document.querySelectorAll('section');
    let postTops = [];
    let pagetop;
    let counter = 1;
    let prevcounter =1;
    let doneResizing;
    
    posts.forEach(function(post){
        postTops.push( Math.floor(post.getBoundingClientRect().top + window.pageYOffset ) );
    });
    //console.log(postTops);

    window.addEventListener('scroll', function(){
        pagetop = window.pageYOffset;
    });
});
