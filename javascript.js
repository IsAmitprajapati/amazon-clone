let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")

console.log(imgItem.length-1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click",handleLeftBtn)

function handleLeftBtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click",handleRightBtn)

function handleRightBtn(){
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
     
}
//render automatic
function renderSlideAuto(){
   
    if(startSlider >= -endSlider+100){
        handleRightBtn()
    }
    else{
        startSlider  = 0 ;
    }
}
setInterval(renderSlideAuto, 2000);




 /***** sidebar navigation  */
 const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
 const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
 const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")


 console.log(sidebarNavigationEl)

 sidebarOpenNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show")
 })
 sidebarCloseNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show")
 })