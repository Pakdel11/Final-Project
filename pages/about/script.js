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