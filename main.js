//variables globales
let input = document.querySelector('.input');
let botonAgregar= document.querySelector('.boton-agregar');
let container = document.querySelector('.container');

// crear clase item
class Item  {
    constructor(nueva_tarea){
        this.crearDiv(nueva_tarea);
    } 
    //metodos
    crearDiv(tarea){
        const newDiv = document.createElement('div')
        newDiv.classList.add('item')
        const newInput = document.createElement('input')
        newInput.setAttribute('type','text');
        newInput.setAttribute('disabled','true');
        newInput.classList.add('item-input');
        newInput.value= tarea;
        
        newDiv.appendChild(newInput);
        container.appendChild(newDiv);
        
        const removeButton = document.createElement('button');
        removeButton.classList.add('boton-remover')
        removeButton.innerHTML='<i class="fa-solid fa-lock"></i>';
        //agregar el boton al div
        newDiv.appendChild(removeButton)
        
        const editButton = document.createElement('button')
        //atributos del boton
        editButton.classList.add('eeditar')
        editButton.innerHTML='<i class="fa-solid fa-trash"></i>';
        //agregar el boton al div
        newDiv.appendChild(editButton)
        
        removeButton.addEventListener('click',function(){
            if(removeButton.innerHTML === `<i class="fa-solid fa-lock-open"></i>` ){
                removeButton.innerHTML=`<i class="fa-solid fa-lock"></i>`
                newInput.setAttribute('disabled', 'true')
            }else{
                newInput.removeAttribute('disabled')
                removeButton.innerHTML=`<i class="fa-solid fa-lock-open"></i>`
            }
        })
        editButton.addEventListener('click',function(){
            newDiv.remove('div')
        })
    }
}



// evento agregar con el click
botonAgregar.addEventListener('click',function(){
    console.log('hiciste click')
    if(input.value ===''){
        console.log('agrega algo porfavor')
    }else{
        const addItem = new Item(input.value);
        
        
        input.value =""
        
    }
})


//elemento html dOM
//

