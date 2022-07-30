const btn = document.getElementById('Gen');
let display = document.getElementById('container');

const text = [
    'Great' ,
    'Fountain' ,
    'School' ,
    'Hospital' ,
    'Present' ,
    'Acknowledge' ,
    'Imaginary' ,
    'Understand' ,
    'Preview' ,
    'Movie' ,
    'Challenge' ,
    'Single' ,
    'Travel' ,
    'Deliver' ,
    'Trust' ,
    'Mountain' ,
    'Interesting' ,
    'king' ,
    'Important' ,
 ]


btn.addEventListener('click', () => {
    const random  = Math.random();
    const number = Math.floor(random*text.length - 1 )
    display.innerHTML = text[number]
     
})

       

   
   