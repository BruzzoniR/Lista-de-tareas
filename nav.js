import { main } from "./main.js";
// comportamiento de barra menu
const listaMenu = document.querySelector("nav .ul-menu");
const botonMenu = document.querySelector(".boton-menu");
let tituloLista = document.querySelector(".titulo-lista");
let itemMenu = document.querySelector(".item-menu");
export let menuContainer = document.querySelector(".menu-container");
let botonOk = document.querySelector(".btn-ok");

let contadorListas = 1;

botonMenu.addEventListener("click",()=>{  //despliegue de barra

  switch (menuContainer.className) {
    case "menu-container":
      menuContainer.className ="menu-container menu-container--visible";
      menuContainer.style.left = "null;"
      menuContainer.style.rigth = "10px;"
      break;
  
    case "menu-container menu-container--visible":
      menuContainer.className ="menu-container"
      break;
  }
});



//funcionamiento de botones de accion de la barra de menu
listaMenu.addEventListener("click",(e)=>{
    const numeroLista = e.target.parentElement.children[0].id.charAt(e.target.parentElement.children[0].id.length - 1);
    switch (e.target.className) {
        case "btn-ok":  //modificacion de nombres de listas desde barra de menu
            const tituloLista = document.querySelector(`#lista${numeroLista}`);
            const itemMenu = document.querySelector(`#menu${numeroLista}`);
            tituloLista.textContent = itemMenu.value;
            break;
    
        case "btn-del-menu":    //remocion de lista seleccionada
            document.getElementById(`container${numeroLista}`).remove();
            document.getElementById(`menu${numeroLista}`).parentElement.parentElement.remove();
            break;
    }
    
})


//boton creador de nuevas listas
const btnAddList = document.querySelector(".btn-add-list");
btnAddList.addEventListener("click", ()=>{
    contadorListas++;
    const nuevaLista = document.createElement("div");

    nuevaLista.className = `container`;
    nuevaLista.id = `container${contadorListas}`
    nuevaLista.innerHTML = `<h1 class="titulo-lista" id="lista${contadorListas}">Listas de tareas ${contadorListas}</h1>
    <div class="tareasList">
        <form>
            <input type="text" placeholder="Agrega tu tarea.." class="input-tarea">
            <button type="button" class="btn-add"><i class="fa-solid fa-plus"></i></button>
        </form>
    </div>
    <div class="li-container">
        <ul class="ul-listas"></ul>
    </div>
    <div class="empty">
        <p>No tiene tareas pendientes.</p>
    </div>`
    main.appendChild(nuevaLista);

    const nuevoLiMenu = document.createElement("li")
    nuevoLiMenu.innerHTML =
    `<form>
        <input type="text" class="item-menu" value="Lista de tareas ${contadorListas}" id="menu${contadorListas}">
        <button type="button" class="btn-ok"><i class="fa-solid fa-check"></i></button>
        <button type="button" class="btn-del-menu"><i class="fa-solid fa-xmark"></i></button>
        </form>`
    listaMenu.appendChild(nuevoLiMenu);
});

