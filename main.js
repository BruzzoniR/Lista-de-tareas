export const main = document.querySelector("main");
import { menuContainer } from "./nav.js";
const historial = [];

main.addEventListener("click", (e)=>{
  if(e.target.className=="btn-add"){
    const addBtn = e.target;

    addBtn.addEventListener("click", (e)=>{

      e.preventDefault();
      const input = e.target.parentElement.firstChild.parentNode[0];
      const text = input.value;
      const ul = e.target.parentElement.parentElement.parentElement.children[2].children[0];
      const empty = e.target.parentElement.parentElement.parentElement.children[3];
    
      if (text !== ""){
    
        const li = document.createElement("li");
        const p = document.createElement("p");
    
        p.textContent = text;
        historial.push(text);
                
        li.appendChild(p);
        ul.appendChild(li);
        li.appendChild(addDeleteBtn());
    
        input.value = "";
        empty.style.display = "none";
    
      }
    
    }); 
    
    function addDeleteBtn () {
      
      const deleteBtn = document.createElement("button");
    
      deleteBtn.className = "btn-delete";
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
     
    
      deleteBtn.addEventListener("click", (e)=>{
        const ul = e.target.parentElement.parentElement;
        const item = e.target.parentElement;
        const empty = e.target.parentElement.parentElement.parentElement.parentElement.children[3];
        
        ul.removeChild(item);
    
        const items =ul.querySelectorAll("li");
        
        if(items.length===0){
          empty.style.display = "block";
        };
      });
    
      return deleteBtn;
    }
    
    
    
  }

  if(e.target.parentNode!="menu-container"){
    menuContainer.className ="menu-container";
  }

  if(!(e.target.parentNode.className.includes("historial"))){
    barraHistorial.className="historial";
  }
})


//funcionamiento busqueda de historial

const barraHistorial = document.querySelector(".historial");
const botonHistorial = document.querySelector(".btn-historial");
const listaHistorial = document.querySelector(".ul-historial");

botonHistorial.addEventListener("mouseover", ()=>barraHistorial.className="historial historial--visible");

botonHistorial.addEventListener("click", ()=>{
    listaHistorial.innerHTML="";
    let inputHistorial = document.querySelector("#inputHistorial").value;
    historial.forEach(element => {
        if(element.includes(inputHistorial)){
            const divNuevoHistorial = document.createElement("div");
            const nuevoLiHistorial = document.createElement("li"); //crear un div que encapsule el texto con el boton dentro del li
            const copyBtn = document.createElement("button");
            copyBtn.className = "btn-copy";
            copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`;
            nuevoLiHistorial.textContent = element;
            divNuevoHistorial.appendChild(nuevoLiHistorial);
            divNuevoHistorial.appendChild(copyBtn);
            listaHistorial.appendChild(divNuevoHistorial);
        };
    });
});

listaHistorial.addEventListener("click", (e)=>{
  let copiaTarea;

  if(e.target.className=="btn-copy"){
    copiaTarea = e.target.parentElement.children[0].textContent;
    console.log(copiaTarea);
    navigator.clipboard.writeText(copiaTarea);
    alert("La tarea fue copiada al portapapeles. Puede pegarla en la lista de tareas que desee con el comando CTRL+V");
  }
})