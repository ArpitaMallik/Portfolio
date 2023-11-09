const sections  = document.querySelectorAll(".section");
const allSec = document.querySelector(".main-content");

window.addEventListener('scroll',reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');

            for(var i=0; i<reveals.length; i++)
            {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;

                if(revealtop < windowheight-revealpoint)
                {
                    reveals[i].classList.add('active');
                }
                else{
                    reveals[i].classList.remove('active');
                }
            }
        }

const spans = document.querySelectorAll(".progress-bar span");

spans.forEach((span) =>{
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
})