

const divpa = document.querySelector('div');
divpa.classList.add('father');
const hijo1 = document.createElement('div');
hijo1.classList.add('hijo1');
divpa.appendChild(hijo1);

const hijo2 = document.createElement('div');
hijo2.classList.add('hijo2');
divpa.appendChild(hijo2);

const cuadrado = document.createElement('div');
cuadrado.classList.add('cuadrado');
hijo2.appendChild(cuadrado);



const btnRainbow = document.createElement('button');
hijo1.appendChild(btnRainbow);
btnRainbow.innerHTML = "Rainbow Mode"
btnRainbow.setAttribute('style', 'margin-right: 20px')

const btn = document.createElement('button');
hijo1.appendChild(btn);
btn.innerHTML = "Tamaño";
btn.setAttribute('style', 'margin-left: 20px; width: 104.91px;')
btn.addEventListener('click', () => {
    
    
    
    let numeros = prompt("Ingrese la escala de dibujo (Un numero del 1 al 100)" )
    
    if (numeros > 0 && numeros <= 100) {
    let division = (500/numeros) - 2;
    division.toString();

    let cantidad = numeros*numeros;
    
    for (i = 1; i <= cantidad; i ++ ) {
    const pruebaDiv = document.createElement('div');
    pruebaDiv.classList.add('aa');
    pruebaDiv.setAttribute('style', `width:${division}px; height:${division}px; background-color:white; border: solid black 1px;`)
    pruebaDiv.setAttribute('id', i);
    cuadrado.appendChild(pruebaDiv);
    }
    
    const divs = document.querySelectorAll('div');
    
    divs.forEach((div) => div.addEventListener('mouseover', function(e){
    e.stopPropagation();
    const nEw = document.querySelector(`div[id="${e.target.id}"]`)
    if(!nEw) return;
    nEw.classList.remove('aa')
    
    nEw.setAttribute('style', `width:${division}px; height:${division}px; background-color:black; border: solid black 1px;`)
    nEw.classList.add('newSquare')
    }))
    }else 
    alert("No a ingresado un numero o caracter valido");
}, {
    once: true
})





    

   

    
    
