

const divpa = document.querySelector('div');
divpa.classList.add('father');
const hijo1 = document.createElement('div');
hijo1.classList.add('hijo1');
divpa.appendChild(hijo1);

const hijo2 = document.createElement('div');
hijo2.classList.add('hijo2');
divpa.appendChild(hijo2);


const btn = document.createElement('button');
hijo1.appendChild(btn);
btn.innerHTML = "Tamaño";
btn.addEventListener('click', () => {
    let numeros = prompt("Ingrese el tamaño para dibujar ej.(64x64, 16x16 etc.)" )
    let division = (500/numeros) ;
    division.toString();

    let cantidad = numeros*numeros;
    
    
    
    const cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    hijo2.appendChild(cuadrado);
    
    

    for (i = 1; i <= cantidad; i ++ ) {
    const pruebaDiv = document.createElement('div');
    pruebaDiv.classList.add('aa');
    pruebaDiv.setAttribute('style', `width:${division}px; height:${division}px; background-color:red;`)
    pruebaDiv.setAttribute('id', i);
    cuadrado.appendChild(pruebaDiv);
    }
    const divs = document.querySelectorAll('div');
    
    divs.forEach((div) => div.addEventListener('mouseover', function(e){
    e.stopPropagation();
    const nEw = document.querySelector(`div[id="${e.target.id}"]`)
    if(!nEw) return;
    nEw.classList.remove('aa')
    
    nEw.setAttribute('style', `width:${division}px; height:${division}px; background-color:yellow;`)
    nEw.classList.add('newSquare')
    

}))
})






    

   

    
    
