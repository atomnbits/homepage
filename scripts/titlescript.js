var startbuttone = document.querySelector('.startbutton');
var everthing = document.body;

const mouseClickAnimation =()=>{

 
    anime({
       // targets: '.square',
       targets: everthing,
         translateX:[0,window.innerWidth*0.2],
        opacity: [1,0],
        easing: 'easeInQuint',
        loop: false,
        duration: 800
    });

    setTimeout(function () {
        var mql = window.matchMedia("screen and (max-width: 768px)");
        if (mql.matches) {
            anime({
                targets: everthing,
                opacity: [0,1],
                translateX: [window.innerWidth*0.2,0],
                easing: 'easeInQuint',
                loop: false,
                duration: 1000
            });
        }
        window.location.href = "main.html";

      

    }, 1100);
    
}

startbuttone.addEventListener('click', mouseClickAnimation)



setTimeout(function () { ///자동 전환
    anime({
        // targets: '.square',
        targets: everthing,
        translateX: [0, window.innerWidth*0.2],
        opacity: [1,0],
        easing: 'easeInQuint',
        loop: false,
        duration: 800
    });

    setTimeout(function () {
        var mql = window.matchMedia("screen and (max-width: 768px)");
        if (mql.matches) {
            anime({
                targets: everthing,
                opacity:[0,1],
                translateX: [window.innerWidth*0.2, 0],
                easing: 'easeInQuint',
                loop: false,
                duration: 1000
            });
        }
        window.location.href = "main.html";
    }, 1100);

}, 10000);