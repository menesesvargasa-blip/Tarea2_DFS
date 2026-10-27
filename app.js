class Tarea {
    constructor(nombre, completada = false) {
        this.nombre = nombre;
        this.completada = completada;
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
        this.errorElemento = document.getElementById('mensaje-error');
        this.cargarTareas();
        this.render();
    }
    guardarTareas() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }
    cargarTareas() {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
        this.tareas = tareasGuardadas.map(t => new Tarea(t.nombre, t.completada));
    }
    mostrarError(mensaje) {
        this.errorElemento.textContent = mensaje;
    }
    limpiarError() {
        this.errorElemento.textContent = "";
    }
    agregarTarea(nombre) {
        if (!nombre || nombre.trim() === "") {
            this.mostrarError("No puedes agregar una tarea vacía.");
            return false;
        }
        this.limpiarError();
        const nuevaTarea = new Tarea(nombre.trim());
        this.tareas.push(nuevaTarea);
        this.guardarTareas();
        this.render();
        return true;
    }
    eliminarTarea(index) {
        this.tareas.splice(index, 1);
        this.guardarTareas();
        this.render();
    }
    editarTarea(index) {
        const tarea = this.tareas[index];
        const nuevoTexto = prompt("Edita tu tarea:", tarea.nombre);
        if (nuevoTexto === null) return;
        if (nuevoTexto.trim() === "") {
            this.mostrarError("El nombre de la tarea no puede estar vacío.");
            return;
        }
        this.limpiarError();
        tarea.actualizarNombre(nuevoTexto);
        this.guardarTareas();
        this.render();
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
    if (gestor.agregarTarea(inputnuevaTarea.value)) {
        inputnuevaTarea.value = "";
    }
    inputnuevaTarea.focus();
});
