const menu=document.querySelector('#menu-icon');
const nav=document.querySelector('#menu');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
}


const headerEl = document.querySelector("header");

addEventListener("scroll",()=>{
    headerEl.classList.toggle("sticky",window.scrollY>200)
})