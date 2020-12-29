console.log("Check..");
var hidden_panel = document.getElementById('panel');
var ham = document.querySelector('.ham');
var cross = document.querySelector('.crossed');
var happy=document.querySelector('.happy');
var sad=document.querySelector('.sad');



var aboutimage=document.querySelector(".about-image")

var page_1 = document.querySelector('.page-1');



hidden_panel.classList.add('hidden');
page_1.classList.add('downward');
cross.classList.add('hide');
ham.addEventListener('click', function(){
    hidden_panel.classList.remove('hidden');
    hidden_panel.classList.add('visible');
    ham.classList.add('hide');
    cross.classList.remove('hide');
});


cross.addEventListener('click', function(){
    hidden_panel.classList.remove('visible');
    hidden_panel.classList.add('hidden');
    cross.classList.add('hide');
    ham.classList.remove('hide');
});

window.addEventListener("scroll",function(){
    if(window.scrollY>300)
    {
        aboutimage.classList.add("fadein")
        aboutimage.classList.remove("fadeout")
        // cursor.classList.add("changebordercolor")
    }
    else{
        aboutimage.classList.remove("fadein")
        aboutimage.classList.add("fadeout")
        // cursor.classList.remove("changebordercolor")


    }
})
