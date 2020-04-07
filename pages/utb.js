
// acitve the right menu

const iconList = document.getElementsByClassName("colorr"); // take the element from HTMl5 into javascript
for(var i = 0; i < iconList.length; i++){// here I run a for loop function to bring all the items inside the loop
 iconList[i].addEventListener("click", function(){ // for each item I give an eventListener that become clickable
     var current = document.getElementsByClassName("active");// I took the extra class that I made in CSS to add to each of the item when its active
     current[0].className = current[0].className.replace("active"); // I replace the class for each items
     this.className += " active"; // added the active class to the current item.
     
});
}
// icons 


const pages = document.getElementsByClassName("kort");

const licenceB = document.querySelector(".car").addEventListener("click", btnCar);
const licenceC = document.querySelector(".bok").addEventListener("click", btnBok);
const licenceD = document.querySelector(".risk").addEventListener("click", btnRisk);
const licenceE = document.querySelector(".fr").addEventListener("click", btnQes);
const licenceF = document.querySelector(".lastbil").addEventListener("click", btnLastbil);




function btnCar(){
        document.querySelector(".k").style.cssText = "display: block;";
        document.querySelector(".b").style.cssText = "display: none;";
        document.querySelector(".r").style.cssText = "display: none;";
        document.querySelector(".bk").style.cssText = "display: none;";
        document.querySelector(".l").style.cssText = "display: none;";
    }

function btnBok(){
    document.querySelector(".k").style.cssText = "display: none;";
    document.querySelector(".b").style.cssText = "display: block;";
    document.querySelector(".r").style.cssText = "display: none;";
    document.querySelector(".bk").style.cssText = "display: none;";
    document.querySelector(".l").style.cssText = "display: none;";
}
function btnRisk(){
    document.querySelector(".k").style.cssText = "display: none;";
    document.querySelector(".b").style.cssText = "display: none;";
    document.querySelector(".r").style.cssText = "display: block;";
    document.querySelector(".bk").style.cssText = "display: none;";
    document.querySelector(".l").style.cssText = "display: none;";
}
function btnQes(){
    document.querySelector(".k").style.cssText = "display: none;";
    document.querySelector(".b").style.cssText = "display: none;";
    document.querySelector(".r").style.cssText = "display: none;";
    document.querySelector(".bk").style.cssText = "display: block;";
    document.querySelector(".l").style.cssText = "display: none;";
}

function btnLastbil(){
    document.querySelector(".k").style.cssText = "display: none;";
    document.querySelector(".b").style.cssText = "display: none;";
    document.querySelector(".r").style.cssText = "display: none;";
    document.querySelector(".bk").style.cssText = "display: none;";
    document.querySelector(".l").style.cssText = "display: block;";

}

