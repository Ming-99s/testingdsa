window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 1) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};
    let observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }
        });
    });
    let hiddenE= document.querySelectorAll('.text-side');
    hiddenE.forEach(function(el){observer.observe(el)});