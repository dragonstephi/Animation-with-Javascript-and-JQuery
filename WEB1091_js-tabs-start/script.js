var tabsLink = document.querySelectorAll('#tabs > ul > li a');


for(var i=0; i<tabsLink.length; i++){
    tabsLink[i].addEventListener('click', function(event){
        event.preventDefault();
        var hrefLink = document.querySelectorAll('#href');
        alert(hrefLink.innerHTML);
        if (!this.classList.contains('active')){
            this.classList.add('active');
        } else {
            
        }
       
    });
};
console.log(tabsLink.innerHTML);
