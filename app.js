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