let input = document.querySelector('.input');
let botonAgregar= document.querySelector('.boton-agregar');
let container = document.querySelector('.container');

botonAgregar.addEventListener('click',function(){
    console.log('hiciste click')
    if(input.value ===('')){
        console.log('agrega algo porfavor')
    }else{
        container.innerHTML= input.value
    }
})

let Item = {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
}