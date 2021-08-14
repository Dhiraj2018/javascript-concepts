let blueBtn = document.querySelector('#blue');
let pinkBtn = document.querySelector('#pink');
let greenBtn = document.querySelector('#green');

function changeColor(color){
    // closures because the inside function can 
    //lexically use the varibale color of the outer function
    return function(){
       document.body.style.background= color;
    }
}

blueBtn.addEventListener('click', changeColor('blue'))
pinkBtn.addEventListener('click', changeColor('pink'))
greenBtn.addEventListener('click', changeColor('green'))

