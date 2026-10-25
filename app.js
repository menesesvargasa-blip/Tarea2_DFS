const botonagregarTarea= document.getElementById('agregar-tarea');
const inputnuevaTarea= document.getElementById('nueva-tarea');
const listaTareas= document.getElementById('listaTareas');

botonagregarTarea.addEventListener('click', function() {
    const texto = inputnuevaTarea.value;
    const nuevoElemento = document.createElement('li');     
    const spanTexto = document.createElement('span');     
    spanTexto.textContent = texto;   
    nuevoElemento.appendChild(spanTexto);    
    const botonEditar = document.createElement('button');    
    botonEditar.textContent = "Editar";     
    botonEditar.style.marginLeft = "10px"; 
    botonEditar.addEventListener('click', () => {          
    const nuevoTexto = prompt("Edita tu tarea:", 
    spanTexto.textContent);              
    if (nuevoTexto !== null && nuevoTexto.trim() !== ""){         
        spanTexto.textContent = nuevoTexto.trim();       
     }     });     
    const botonEliminar = document.createElement('button');    
    botonEliminar.textContent = "Eliminar";    
    botonEliminar.style.marginLeft = "5px";   
    botonEliminar.addEventListener('click', () => {      
    nuevoElemento.remove();     });    
    nuevoElemento.appendChild(botonEditar);  
    nuevoElemento.appendChild(botonEliminar);    
    listaTareas.append(nuevoElemento);
 
    
    
    inputnuevaTarea.value = "";     
    inputnuevaTarea.focus();
});