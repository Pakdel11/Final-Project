
// link html tags
const iconList = document.getElementsByClassName("colorr"); 
const pageList = document.getElementsByClassName("kort"); 

// run a loop to count all my items and run the function for all of them
for(let i = 0; i < iconList.length; i++){
    // for each item I give an eventListener that become clickable
    iconList[i].addEventListener("click", function(){ 
        // MADE SOME VARIABLE AGAIN TO ACTIVE AND DEACTIVE
        const activeLink = document.querySelector(".colorr.active");
        const activePage = document.querySelector(".kort.active");
        
        // switch the icons
        activeLink.classList.remove("active");
        iconList[i].classList.add("active");
        // switch the pages
        activePage.classList.remove("active");
        pageList[i].classList.add("active")
 
});
}