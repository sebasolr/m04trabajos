//variables globales
let input = document.querySelector('.input');
let botonAgregar= document.querySelector('.boton-agregar');
let container = document.querySelector('.container');

// crear clase item
class Item  {
    constructor(crearDiv){
       this.crearDiv
    } 
}
//crea el input con todos sus atributos clasicos
function crearDiv(tarea){
    //crear div
    const divnuevo= document.createElement('div')
    //atributos del div creado
    divnuevo.classList.add('item')
    //crear input
    const createInput= document.createElement('input')
    //atributos del input
    createInput.setAttribute('type','text');
    createInput.setAttribute('disabled','true');
    createInput.classList.add('item-input');
    createInput.value= tarea;
    //introducir el input dentro del div
    divnuevo.appendChild(createInput);
    //introducir el div dentro del container
    container.appendChild(divnuevo);
    //crear boton
    const botonEliminar = document.createElement('button')
    //atributos del boton remover
    botonEliminar.classList.add('boton-remover')
    botonEliminar.innerHTML=`<i class="fa-solid fa-pen-to-square"></i`
    //agregar el boton al div
    divnuevo.appendChild(botonEliminar)
    //crear boton editar
    const botonEditar = document.createElement('button')
    //atributos del boton
    botonEditar.classList.add('boton-editar')
    botonEditar.innerHTML=`<i class="fa-solid fa-trash"></i>`
    //agregar el boton al div
    divnuevo.appendChild(botonEditar)
}
// evento agregar con el click
botonAgregar.addEventListener('click',function(){
    console.log('hiciste click')
    if(input.value ===('')){
        console.log('agrega algo porfavor')
    }else{
      crearDiv(input.value)
      input.value =""
    }
})


//elemento html dOM
//

