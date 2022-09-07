const lampOn = document.getElementById('lampOn');
const lampOff = document.getElementById('lampOff');
const lamp = document.getElementById('lamp');

function ligar (){
    lamp.src = './img/lampada-ligada.jpg'
}

function desligar (){
    lamp.src = './img/lampada.jpg'
}
lampOn.addEventListener('click', ligar);
lampOff.addEventListener('click', desligar);

console.log(desligar)
