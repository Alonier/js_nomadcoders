const title = document.querySelector(".hello");

function handleTitleClick(){
    title.style.color = "blue";
}


title.addEventListener("click",handleTitleClick);