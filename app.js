const navP = document.querySelector(".phone");
const toggleBtn = document.querySelector(".toggleBtnNav");
const links = document.getElementsByClassName(".link-p");
const link = document.querySelectorAll(".link-w");

var eg = true
toggleBtn.addEventListener("click", function(){        
        if(eg == true){
        console.log("its work");
        document.querySelector(".phone").style.cssText = "right: 0";
        document.querySelector(".links-p a").style.cssText = "color: #b4235d; text-decoration-color: #225; text-decoration: underline;";
        toggleBtn.style.cssText = "position: absolute; z-index: 1035;";
        eg = false
    }
    else if(eg == false){
        console.log("NOOOOOOOOOOOOOOO");
        document.querySelector(".phone").style.cssText = "right: -1000px;";
        eg = true
        toggleBtn.style.cssText = "position: relative; color: #eee;";
        
    }
});

const nav = document.querySelectorAll("#closeOpen");

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("header").style.cssText = "width: 70%; height: 10vh;";
    document.querySelector(".links-p a").style.cssText = "color: snow;";
    nav[0].style.cssText = "background: #eee;";
    nav[1].style.cssText = "background: #eee;";
    nav[2].style.cssText = "background: #eee;";
    
  } else {
    document.getElementById("header").style.cssText = "width: 90%; height: 8vh; padding: 0 10px;";
    nav[0].style.cssText = "background: #225;";
    nav[1].style.cssText = "background: #225;";
    nav[2].style.cssText = "background: #225;";
    


  }
  prevScrollpos = currentScrollpos;
};


/*  intro slider */

const slider = document.querySelectorAll(".slider .slide");

const time = 2000;
let counter = 0;

slider[counter].style.opacity = 1;
setInterval(changeImg, time);
function changeImg(){
  
  
  slider[counter].style.opacity = 0;
  counter = (counter + 1) % slider.length;
  slider[counter].style.opacity = 1;
}


// pop up window

t = setTimeout(openPopUp, 5000);
const clsBtn = document.getElementsByClassName("no-tack");
const windowP = document.querySelector(".windowPop");
for(let i = 0; i < clsBtn.length; i++){
  clsBtn[i].addEventListener('click', () =>{
      windowP.style.cssText = "display: none";
      clearInterval(openPopUp);
    });
  }  
function openPopUp(){
  windowP.style.cssText = "display: flex;";
}


const outsideClick = document.getElementsByClassName("forms");

window.onclick = function(e){
  var target = e.target;
  if(target = outsideClick){
    windowP.style.cssText = "display: none;";
    console.log("hello its work")
  }

}

