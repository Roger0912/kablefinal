function f1()
{
    if(document.getElementById('goal').style.display=="block")
    {
        (document.getElementById('goal').style.display="none")
    }
    else
    {
        document.getElementById('goal').style.display="block";
    }
    
}
function f2()
{
    if(document.getElementById('ideal').style.display=="block")
    {
        (document.getElementById('ideal').style.display="none")
    }
    else
    {
        document.getElementById('ideal').style.display="block";
    }
    
}
function f3()
{
    if(document.getElementById('aim').style.display=="block")
    {
        (document.getElementById('aim').style.display="none")
    }
    else
    {
        document.getElementById('aim').style.display="block";
    }
    
}
function f4()
{
    if(document.getElementById('window').style.display=="block")
    {
        (document.getElementById('window').style.display="none")
    }
    else
    {
        document.getElementById('window').style.display="block";
    }
    
}
function jj1()
{
    if(document.getElementById('jj1').style.display=="block")
    {
        (document.getElementById('jj1').style.display="none")
    }
    else
    {
        document.getElementById('jj1').style.display="block";
    }
}
function jj2()
{
    if(document.getElementById('jj2').style.display=="block")
    {
        (document.getElementById('jj2').style.display="none")
    }
    else
    {
        document.getElementById('jj2').style.display="block";
    }
}
function jj3()
{
    if(document.getElementById('jj3').style.display=="block")
    {
        (document.getElementById('jj3').style.display="none")
    }
    else
    {
        document.getElementById('jj3').style.display="block";
    }
}
function jj4()
{
    if(document.getElementById('jj4').style.display=="block")
    {
        (document.getElementById('jj4').style.display="none")
    }
    else
    {
        document.getElementById('jj4').style.display="block";
    }
}
function x1()
{
    document.getElementById("cover").style.display="none";
}
function o1()
{
    document.getElementById("cover").style.display="flex";
}
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0);
})

function burgerFunction(x){
    x.classList.toggle("change");
}
function showsidenav() {
    document.getElementById("Sidenav").classList.toggle("active");
}
var slideIndex = 1;
        Slideshow(slideIndex);
        var timer = setInterval(autoplay, 3000);

        function autoplay() {
            slideIndex += 1;
            Slideshow(slideIndex);
        }

        function plusSlides(n) {
            Slideshow(slideIndex += n);
            resetTimer();
        }

        function currentSlide(n) {
            Slideshow(slideIndex = n);
            resetTimer();
        }

        function resetTimer() {
            clearInterval(timer);
            timer = setInterval(autoplay, 3000);
        }

        function Slideshow(n) {
            var i;
            var slides = document.getElementsByClassName("slide");
            var controlBtns = document.getElementsByClassName("control-btn");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < controlBtns.length; i++) {
                controlBtns[i].className = controlBtns[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            controlBtns[slideIndex - 1].className += " active";
        }
