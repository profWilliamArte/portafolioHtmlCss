// Importaciones
import categorias from '../datos/categorias.json' assert { type: 'json' };
import post from '../datos/post.json' assert { type: 'json' };
console.log(post)
// Elementos
const menuCategoriasEl = document.querySelector("#menuCategorias");
const mostrarPostEl    = document.querySelector("#mostrarPost");
// Apis
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWM2YTllN2U0YWI4MDg3YmJmMWNlMzFmYThlMDVlYyIsInN1YiI6IjYyODI2ZjBhMDMxYTFkMTRhYzNhMmEwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O_MI9RNAt9zIXrgC0xOW-5U5FcrTnWEMcLkWl2xbEfQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/12413463/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

// Variables y constantes globales

// Cargador

addEventListener("DOMContentLoaded",()=>{
    renderMenuCategorias();
    const postFiltrados = post.posts.filter((post) => post.categoria === "HTML");
    renderPost(postFiltrados);
})

// Funciones
function renderMenuCategorias(){
    let valor="";
    categorias.forEach(element => {
        valor+=
        `
        <a href="#" class="btn" id="${element.id}" name="${element.nomCategoria}">${element.nomCategoria}</a>
        `
    });
    menuCategoriasEl.innerHTML=valor
}
menuCategoriasEl.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target && e.target.tagName==="A"){
        const postFiltrados = post.posts.filter((post) => post.categoria === e.target.name);
        renderPost(postFiltrados);

    }

})
function renderPost(postFiltrados){
    let valor="";
    postFiltrados.forEach(element => {
        console.log(element.img)
        valor+=
        `
        <article class="blog-card">
            <img alt="que es html" src="img/post/${element.img}" loading="lazy" decoding="async">
            <div class="blog-content">
                <h2>${element.titulo.toUpperCase()}</h2>
                <p><b>Categoria:</b>${element.categoria}</p>
                <h4>${element.descripcion.substring(0,120)}...</h4>
                <p><b>12/3/2022</b></p>  
                <a href="detalleblog.html?post=${element.idPost}" class="btn2">Ver Detalle</a>
            </div>
          </article>
        `    
    });
    mostrarPostEl.innerHTML=valor
 
}
// Eventos