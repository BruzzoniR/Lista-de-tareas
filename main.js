export const main = document.querySelector("main");
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
})


