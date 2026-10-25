class Tarea {     
    constructor(nombre) {      
        this.nombre = nombre;        
        this.completada = false; 
    } 
    alternarCompletada() {     
        this.completada = !this.completada;     
    }  
    actualizarNombre(nuevoNombre) {      
        if (nuevoNombre && nuevoNombre.trim() !== "") { 
            this.nombre = nuevoNombre.trim();  
        }     
    } 
} 
class GestorDeTareas {  
    constructor() { 
        this.tareas = [];       
        this.listaElemento = document.getElementById('listaTareas'); 
    }
    eliminarTarea(index) {        
        this.tareas.splice(index, 1);         
        this.render();     
    }
    agregarTarea(nombre) {        
        if (!nombre || nombre.trim() === "") return;   
        const nuevaTarea = new Tarea(nombre);         
        this.tareas.push(nuevaTarea);         
        this.render();}   
        eliminarTarea(index) {     
        this.tareas.splice(index, 1);   
        this.render();    
    }    
    editarTarea(index) {        
        const tarea = this.tareas[index];       
        const nuevoTexto = prompt("Edita tu tarea:", tarea.nombre);     
        if (nuevoTexto !== null) {             
        tarea.actualizarNombre(nuevoTexto);       
        this.render();}
    }     
    render() {   
        this.listaElemento.innerHTML = "";
        this.tareas.forEach((tarea, index) => {          
        const nuevoElemento = document.createElement('li');                          
        const spanTexto = document.createElement('span');           
        spanTexto.textContent = tarea.nombre;            
        if (tarea.completada) {                 
            spanTexto.style.textDecoration = "line-through";             
        }            
        nuevoElemento.appendChild(spanTexto);       
        const botonEditar = document.createElement('button');            
        botonEditar.textContent = "Editar";             
        botonEditar.style.marginLeft = "10px";          
        botonEditar.addEventListener('click', () => {                
            this.editarTarea(index);             
        });          
        const botonEliminar = document.createElement('button');   
        botonEliminar.textContent = "Eliminar";         
        botonEliminar.style.marginLeft = "5px";       
        botonEliminar.addEventListener('click', () => {            
            this.eliminarTarea(index);
        });           
        nuevoElemento.appendChild(botonEditar);     
        nuevoElemento.appendChild(botonEliminar);      
        this.listaElemento.appendChild(nuevoElemento);});     
    } 
}

const gestor = new GestorDeTareas(); 
const botonagregarTarea = document.getElementById('agregar-tarea');
const inputnuevaTarea = document.getElementById('nueva-tarea');
botonagregarTarea.addEventListener('click', () => {     
    gestor.agregarTarea(inputnuevaTarea.value);     
    inputnuevaTarea.value = "";   
    inputnuevaTarea.focus(); 
});