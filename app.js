const botonagregarTarea= document.getElementById('agregar-tarea');
const inputnuevaTarea= document.getElementById('nueva-tarea');
const listaTareas= document.getElementById('listaTareas');
const botonEditarTareas= document.getElementById('Editar');
const botonEliminarTareas= document.getElementById('Eliminar');
botonagregarTarea.addEventListener('click', function() {
    const textoIngresado = inputnuevaTarea.value;
    const nuevoElemento = document.createElement('li');     
    nuevoElemento.textContent = textoIngresado;     
    listaTareas.append(nuevoElemento);        
    inputnuevaTarea.value = "";     
    inputnuevaTarea.focus();
});