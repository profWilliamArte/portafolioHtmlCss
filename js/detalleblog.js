// Importaciones
import categorias from '../datos/categorias.json' assert { type: 'json' };
import post from '../datos/post.json' assert { type: 'json' };
console.log(post)
// Elementos
const menuCategoriasEl = document.querySelector("#menuCategorias");
const mostrarDetallePostEl    = document.querySelector("#mostrarDetallePost");
// Apis

// Variables y constantes globales
// globales
const parametros        = window.location.search;
const urlParams         = new URLSearchParams(window.location.search);
const idpost            = parseInt(urlParams.get('post'));
// Cargador

addEventListener("DOMContentLoaded",()=>{

    const postFiltrado = post.posts.filter((post) => post.idPost === idpost);
    renderDetallePost(postFiltrado);
})

// Funciones

menuCategoriasEl.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target && e.target.tagName==="A"){
        const postFiltrados = post.posts.filter((post) => post.categoria === e.target.name);
        renderPost(postFiltrados);

    }

})
function renderDetallePost(postFiltrado){

    const formattedStr = postFiltrado[0].descripcion.replace(/\./g, '.<br/><br/>');
    let valor="";
    
        valor+=
        `
        <article class="blog-detalle">
            <img alt="que es html"   src="img/post/${postFiltrado[0].img}" loading="lazy" decoding="async">
            <div class="blog-content">
                <h2>${postFiltrado[0].titulo.toUpperCase()}</h2>
                <p><b>Categoria:</b>${postFiltrado[0].categoria}</p>
                <h4>${formattedStr}</h4>
                <p><b>${postFiltrado[0].fecha}</b></p>  
                <a href="blog.html" class="btn2">ir al blog</a>
            </div>
          </article>
        `    
    
        mostrarDetallePostEl.innerHTML=valor
 
}
// Eventos