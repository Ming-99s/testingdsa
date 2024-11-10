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
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }
        });
    });
    let hiddenE= document.querySelectorAll('.text-side');
    let hiddenImg = document.querySelectorAll('.img');
    let hiddenImg2 = document.querySelectorAll('#box-img');

    hiddenE.forEach(function(element1){observer.observe(element1)});
    hiddenImg.forEach(function(element2){observer.observe(element2)});
    hiddenImg2.forEach(function(element3){observer.observe(element3)});
