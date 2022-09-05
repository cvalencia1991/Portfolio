
document.getElementById("Deploy_menu").addEventListener("click", Deploy_menu);
function Deploy_menu(){
    let hambuermenu = document.getElementById("mobile-menu");
    hambuermenu.style.display="block";

}


document.getElementById("close-btn").addEventListener("click", Close_menu);
function Close_menu(){
    let hambuermenu = document.getElementById("mobile-menu");
    hambuermenu.style.display="none";

}


const elements=document.getElementsByClassName("line_border")
const elements_array= Array.from(elements)
elements_array.forEach(function(Element){
Element.addEventListener("click", Close_menu);
})



