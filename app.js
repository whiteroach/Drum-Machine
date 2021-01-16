//declaring all the variables

//PADS
const Q = document.querySelector('#q');
const W = document.querySelector('#w');
const E = document.querySelector('#e');
const A = document.querySelector('#a');
const S = document.querySelector('#s');
const D = document.querySelector('#d');
const Y = document.querySelector('#y');
const X = document.querySelector('#x');
const C = document.querySelector('#c');

// //SEQUENCER CELL
const N1 = document.querySelector('#N1');
const N2 = document.querySelector('#N2');
const N3 = document.querySelector('#N3');
const N4 = document.querySelector('#N4');
const N5 = document.querySelector('#N5');
const N6 = document.querySelector('#N6');
const N7 = document.querySelector('#N7');
const N8 = document.querySelector('#N8');

//BUTTONS
const canc = document.getElementById('canc');

//sequencer arrays
const sequencerArr = [N1,N2,N3,N4,N5,N6,N7,N8];
let sequencer = [];

//Keydown for pad
window.addEventListener('keydown', drum);
function drum(e) {
  e.preventDefault;
  console.log(e);

  if (e.code === 'KeyQ') {
    console.log('Q!');
    Q.style.backgroundColor = '#f8d241';
  } else if
    (e.code === 'KeyW') {
    console.log('W!');
    W.style.backgroundColor = '#f8d241';
  } else if (e.code === 'KeyE') {
    console.log('E!');
    E.style.backgroundColor = '#f8d241';
  } else if (e.code === 'KeyA') {
    console.log('A!');
    A.style.backgroundColor = '#f8d241';
  } else if (e.code === 'KeyS') {
    console.log('S!');
    S.style.backgroundColor = '#f8d241';
  } else if (e.code === 'KeyD') {
    console.log('D!');
    D.style.backgroundColor = '#f8d241';
  } else if (e.code === 'KeyZ') {
    console.log('Y!');
    Y.style.backgroundColor = '#f8d241';
  } else if (e.code === 'KeyX') {
    console.log('X!');
    X.style.backgroundColor = '#f8d241';
  } else if (e.code === 'KeyC') {
    console.log('C!');
    C.style.backgroundColor = '#f8d241';
  }


  
}
window.addEventListener('keyup',mach);
function mach(e) {
  e.preventDefault;
  console.log(e);

  if (e.code === 'KeyQ') {
    console.log('Q!');
    Q.style.backgroundColor = '#FFDB4A';
  } else if
    (e.code === 'KeyW') {
    console.log('W!');
    W.style.backgroundColor = '#FFDB4A';
  } else if (e.code === 'KeyE') {
    console.log('E!');
    E.style.backgroundColor = '#FFDB4A';
  } else if (e.code === 'KeyA') {
    console.log('A!');
    A.style.backgroundColor = '#FFDB4A';
  } else if (e.code === 'KeyS') {
    console.log('S!');
    S.style.backgroundColor = '#FFDB4A';
  } else if (e.code === 'KeyD') {
    console.log('D!');
    D.style.backgroundColor = '#FFDB4A';
  } else if (e.code === 'KeyZ') {
    console.log('Y!');
    Y.style.backgroundColor = '#FFDB4A';
  } else if (e.code === 'KeyX') {
    console.log('X!');
    X.style.backgroundColor = '#FFDB4A';
  } else if (e.code === 'KeyC') {
    console.log('C!');
    C.style.backgroundColor = '#FFDB4A';
  }



}
//this part is going to stay on the top, with all the other sound -`library`

// let bulletSound = document.createElement('audio');
// bulletSound.src ='./sounds/bullet.wav';
// bulletSound.setAttribute('controls','none');
// bulletSound.setAttribute('preload','auto');
// bulletSound.style.display = 'none';
// bulletSound.volume = 0.1;
// document.append(bulletSound);


Q.addEventListener('click',addSequence);
W.addEventListener('click',addSequence);
E.addEventListener('click',addSequence);
A.addEventListener('click',addSequence);
S.addEventListener('click',addSequence);
D.addEventListener('click',addSequence);
Y.addEventListener('click',addSequence);
X.addEventListener('click',addSequence);
C.addEventListener('click',addSequence);


function addSequence(e){
  if(sequencer.length < 8){
    console.log(e.target.id)
    sequencer.push(e.target.id) ;
    console.log(sequencer.length);
    sequencerArr[sequencer.length-1].style.backgroundColor='#3298DC';
    sequencerArr[sequencer.length-1].innerHTML= e.target.id;
  
  }
}

//CONTROLLERS

//cancel button. 
canc.addEventListener('click', cancLast);

function cancLast(e){
  if (sequencer.length >= 1){
    e.preventDefault;
    sequencer.pop();
    // sequencer.pop();
    sequencerArr[sequencer.length].style.backgroundColor='white';
    sequencerArr[sequencer.length].innerHTML= sequencer.length+1;


  }
}