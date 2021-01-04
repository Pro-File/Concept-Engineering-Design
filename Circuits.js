var add = document.getElementById("add");
var back = document.getElementById('form-back');
// var content = document.querySelector('.content');
var hidden = document.querySelector('.hidden');

$(".carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,

   
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

var softwares=[
    {
        name:"matlab",
        URLlink:"http://bit.ly/38AZkKF",
        Imglink:"./images/Matlab_Logo.png"


    },
    {
        name:"proteus",
        URLlink:"http://bit.ly/34K2xGS",
        Imglink:"./images/proteus\ logo.png"

    },
    {
        name:"lt spice",
        URLlink:"http://bit.ly/3mNI8qG",
        Imglink:"./images/LTLOGO.png"

    },
    {
        name:"microwind",
        URLlink:"http://bit.ly/3pnwww1",
        Imglink:"./images/microwindd.png"

    }
    ,
    {
        name:"etap",
        URLlink:"http://bit.ly/2KRYnpo",
        Imglink:"./images/ETAP-removebg-preview.png"

    },
    {
        name:"altium",
        URLlink:"http://bit.ly/37LpRWG",
        Imglink:"./images/Altium.png"

    },
    {
        name:"dev c++",
        URLlink:"http://bit.ly/37M5TuM",
        Imglink:"./images/dev\ c++.png"

    },
    {
        name:"multisim",
        URLlink:"http://bit.ly/38E91IB",
        Imglink:"./images/mulitism.png"

    },
    {
        name:"autodesk autocad",
        URLlink:"http://bit.ly/3aJ9Fae",
        Imglink:"./images/autocad-removebg-preview.png"

    },
    {
        name:"xilinix ise design ",
        URLlink:"http://bit.ly/3mNLERU",
        Imglink:"./images/ise-removebg-preview.png"

    },
    {
        name:"ni labview",
        URLlink:"http://bit.ly/2KATZLx",
        Imglink:"./images/labview-removebg-preview.png"

    },
    {
        name:"python",
        URLlink:"http://bit.ly/3mNBgJP",
        Imglink:"./images/python.png"

    },
    {
        name:"spyder ide",
        URLlink:"http://bit.ly/34Fo17G",
        Imglink:"./images/spyder.png"

    },
    {
        name:"ultraedit",
        URLlink:"http://bit.ly/2WK1x0X",
        Imglink:"./images/ultraedit.png"

    },
    {
        name:"notepad++",
        URLlink:"http://bit.ly/3aFVcM6",
        Imglink:"./images/notepad++.png"

    },
    {
        name:"visual studio code",
        URLlink:"http://bit.ly/2KUQjRu",
        Imglink:"./images/vscode.png"

    },
    {
        name:"sublime",
        URLlink:"http://bit.ly/3rrwpS0",
        Imglink:"./images/sublime-removebg-preview.png"

    },
    {
        name:"atom",
        URLlink:"http://bit.ly/3hk2KWs",
        Imglink:"./images/atom.png"

    },
    {
        name:"brackets text editor",
        URLlink:"http://bit.ly/2KDzJsL",
        Imglink:"./images/brackets.png"

    },
    {
        name:"pycharm",
        URLlink:"http://bit.ly/3nPJEK9",
        Imglink:"./images/pycharm.png"

    },
    {
        name:"audacity",
        URLlink:"http://bit.ly/3rvSvmj",
        Imglink:"./images/audacity-removebg-preview.png"

    },
    {
        name:"bandlab",
        URLlink:"http://bnd.la/3mOHGIC",
        Imglink:"./images/bandLAB.png"

    },
    {
        name:"soundbridge",
        URLlink:"http://bit.ly/2KDYd4W",
        Imglink:"./images/soundbridge.jpg"

    },
    {
        name:"tracktion",
        URLlink:"http://bit.ly/3aGCYKt",
        Imglink:"./images/tracktion-icon.png"

    },
    {
        name:"avid pro tool",
        URLlink:"http://bit.ly/3pnRqeG",
        Imglink:"./images/avid\ pro.png"

    },
    {
        name:"ableton live lite",
        URLlink:"http://bit.ly/2KSwJZd",
        Imglink:"./images/ableton.png"

    },
    {
        name:"reaper",
        URLlink:"http://bit.ly/3mNFbq1",
        Imglink:"./images/reaper-removebg-preview.png"

    },
    {
        name:"davinci resolve",
        URLlink:"http://bit.ly/3mWSAMF",
        Imglink:"./images/Davinci-removebg-preview.png"

    },
    {
        name:"hitfilm express",
        URLlink:"http://bit.ly/3rDaEPo",
        Imglink:"./images/hitfilm-express.png"

    },
    {
        name:"vsdc",
        URLlink:"http://bit.ly/3mQoASe",
        Imglink:"./images/vsdc-removebg-preview.png"

    },
    {
        name:"lightworks",
        URLlink:"http://bit.ly/38xV6DG",
        Imglink:"./images/lightroom.png"

    },
    {
        name:"openshot",
        URLlink:"http://bit.ly/3rnbIGZ",
        Imglink:"./images/openshot-removebg-preview.png"

    },
    {
        name:"shotcut",
        URLlink:"http://bit.ly/37LvGTQ",
        Imglink:"./images/shotcut.png"

    },
    {
        name:"blender",
        URLlink:"http://bit.ly/37LP2rW",
        Imglink:"./images/blender-removebg-preview.png"

    },
    {
        name:"kdenlive",
        URLlink:"http://bit.ly/34LAoz0",
        Imglink:"./images/kdenliv.png"

    },
    {
        name:"tinytake",
        URLlink:"http://bit.ly/3ppUlUc",
        Imglink:"./images/tinytake-removebg-preview.png"

    },
    {
        name:"sharex",
        URLlink:"http://bit.ly/34JInMZ",
        Imglink:"./images/shareX-removebg-preview.png"

    },
    {
        name:"screenrec",
        URLlink:"http://bit.ly/3rptBoF",
        Imglink:"./images/screeenrec.png"

    },
    {
        name:"obs",
        URLlink:"http://bit.ly/34Fpvin",
        Imglink:"./images/OBS.png"

    },
    {
        name:"shadowplay",
        URLlink:"http://bit.ly/3rsDl1e",
        Imglink:"./images/shadowplay.png"

    },
    {
        name:"flashback",
        URLlink:"http://bit.ly/3hgwfIC",
        Imglink:"./images/flashback.png"

    },
    {
        name:"fbx",
        URLlink:"http://bit.ly/2KWPwCR",
        Imglink:"./images/FBX.png"

    },
    {
        name:"amd",
        URLlink:"https://bit.ly/37R0B1k",
        Imglink:"./images/AMD-removebg-preview.png"

    },
    {
        name:"daz3d",
        URLlink:"http://bit.ly/2M51qeh",
        Imglink:"./images/daz3d-removebg-preview.png"

    },
    {
        name:"gimp",
        URLlink:"http://bit.ly/3mPfXHG",
        Imglink:"./images/gimp.png"

    },
    {
        name:"blender",
        URLlink:"http://bit.ly/37LP2rW",
        Imglink:"./images/blender-removebg-preview.png"

    },
    {
        name:"ink space",
        URLlink:"http://bit.ly/2WJaLuv",
        Imglink:"./images/inkscape.png"

    },
    {
        name:"ubuntu",
        URLlink:"http://bit.ly/3aHfV2h",
        Imglink:"./images/ubuntu.png"

    },
    {
        name:"linux mint",
        URLlink:"http://bit.ly/3nNPCuW",
        Imglink:"./images/linixmint.png"

    },
    {
        name:"balena etcher",
        URLlink:"http://bit.ly/3hlnFbk",
        Imglink:"./images/Etcher-icon.png"

    },
    {
        name:"zorin",
        URLlink:"http://bit.ly/3hnfA5X",
        Imglink:"./images/zorin-removebg-preview.png"

    },
    {
        name:"qubes",
        URLlink:"http://bit.ly/38yjXY4",
        Imglink:"./images/qubes.png"

    },
    {
        name:"nomad bsd",
        URLlink:"http://bit.ly/3prOFZL",
        Imglink:"./images/nomad-removebg-preview.png"

    },
    {
        name:"ubuntu studio",
        URLlink:"http://bit.ly/3aKbQdC",
        Imglink:"./images/ubuntuStudio.png"

    },
    {
        name:"manjaro",
        URLlink:"http://bit.ly/37RCL5x",
        Imglink:"./images/manjaro-removebg-preview.png"

    },
    {
        name:"pc linux",
        URLlink:"http://bit.ly/38BrNjC",
        Imglink:"./images/pclinux"

    },
    {
        name:"true os",
        URLlink:"http://bit.ly/37S5NC8",
        Imglink:"./images/trueos-removebg-preview.png"

    },
    {
        name:"react os",
        URLlink:"http://bit.ly/2WQOVoK",
        Imglink:"./images/reactos.png"

    },
    {
        name:"haiku",
        URLlink:"http://bit.ly/37RCaR9",
        Imglink:"./images/riscos.png"

    },
    
]

var search=document.getElementById("search");
var btn=document.getElementById("btn");
var List = document.getElementById('List');
function Add(name, url, img){

    const position = "beforeend";
    const item = `<li class="item">
        <div class="img"> <img src="${img}" width="75px" height="75px" border-radius ="50%"></div>
        <h1 class="head">${name}</h1>
        <a href="${url}">
        <i class="fas fa-angle-double-right view"></i>
        </a>
    </li>`;

    List.insertAdjacentHTML(position, item);


};

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    var searcheditem=search.value;

    var result=[];
    hidden.classList.remove('unvisible');
    hidden.classList.remove('unopac');
    hidden.classList.add('opac');
    // content.classList.add('blur');
    for(var i=0;i<softwares.length;i++)
    {
        if(softwares[i].name.includes(searcheditem.toLowerCase()) || softwares[i].name.includes(searcheditem.toUpperCase()))
        {
            result.push(softwares[i])
        }
    }
    search.value = "";
    List.innerHTML = "";
    for(var i=0; i<result.length; i++){
        Add(result[i].name, result[i].URLlink, result[i].Imglink);
    }
    // console.log(result)
})


back.addEventListener('click', function(){
    hidden.classList.remove('opac');
    hidden.classList.add('unopac');
    // content.classList.remove('blur');
    setTimeout(() => {
        hidden.classList.add('unvisible');
    }, 250);
});