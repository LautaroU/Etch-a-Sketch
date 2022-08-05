








const divpa = document.querySelector('div');
divpa.classList.add('father');

for (i = 0; i < 16; i ++) {

    
    const fila = document.createElement('div');
    fila.setAttribute('style', 'width:832px; height:29px; display:flex;')
    fila.classList.add('fila');
    divpa.appendChild(fila);
    
    
    for (j = 0 ; j < 16; j ++) {
    if (i === 11) {
        
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', "once" + `${i}` + j)
        fila.appendChild(square);
        
    }else{
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('id', `${i}` + j )
    fila.appendChild(square); 
    }
    }
    
    
    
  
   
    
}


const divs = document.querySelectorAll('div');
    
divs.forEach((div) => div.addEventListener('mouseover', function(e){
    e.stopPropagation();
    const nEw = document.querySelector(`div[id="${e.target.id}"]`)
    if(!nEw) return;
    nEw.classList.remove('square')
    nEw.classList.add('newSquare')
}))
    

   

    
    
