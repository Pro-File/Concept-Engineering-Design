$('.carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplayTimeout:1000,
   
    responsive: {
        0:{
            items:1,
          
        },
        500:{
            items:2,
        },
        630:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})
// Display Today's Date : 
var date = document.getElementById("timeHeading");
const options = { weekday :"short", month: "long", day: "numeric"};
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);