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
const play = document.getElementById('play');
const pause = document.getElementById('pause');

//SAMPLES 


const Sa1 = {
  name: 'cowbell-808',
  sample: document.getElementById('SA-1'),
  id: 1
}
const Sa2 = {
  name: 'hihat-808',
  sample: document.getElementById('SA-2'),
  id: 2
}
const Sa3 = {
  name: 'hihat-digital',
  sample: document.getElementById('SA-3'),
  id: 3
}
const Sa4 = {
  name: 'kick-cultivator',
  sample: document.getElementById('SA-4'),
  id: 4
}
const Sa5 = {
  name: 'kick-dry',
  sample: document.getElementById('SA-5'),
  id: 5
}
const Sa6 = {
  name: 'kick-electro',
  sample: document.getElementById('SA-6'),
  id: 6
}
const Sa7 = {
  name: 'openhat-808',
  sample: document.getElementById('SA-7'),
  id: 7
}
const Sa8 = {
  name: 'openhat-acoustic',
  sample: document.getElementById('SA-8'),
  id: 8
}
const openhat_tight = {
  name: 'openhat_tight',
  sample: document.getElementById('SA-9'),
  id: 9
}

let sampleSel = document.getElementById('sampleSel')
let sampleArr = [Sa1, Sa2, Sa3, Sa4, Sa5, Sa6, Sa7, Sa7, Sa8,openhat_tight];
//create the options inside the selector
let newOpt = ''
sampleArr.forEach((item, index) => {
 sampleSel.innerHTML += `<option>${item.name}</option>`;

})
//PAD SAMPLE SELECTOR

const padSel = document.getElementById('padSelect');
const btnSampleSel = document.getElementById('btn-sample-select');

btnSampleSel.addEventListener('click', selectSample);

function selectSample(){
 return (padSel.value).sample = (sampleSel.value).sample;
  // (padSel.value).sample.push((sampleSel.value).sample);
}

let q = {
  id:1,
//  i tried:
//   - to create the new property with selectSample function
//and declared the empty property both us 'undefined' and ''
sample: ''


}






//sequencer arrays
const sequencerArr = [N1, N2, N3, N4, N5, N6, N7, N8];
let sequencer = [];

//Keydown for pad
window.addEventListener('keydown', drum);
function drum(e) {
  e.preventDefault;
  console.log(e);

  if (e.code === 'KeyQ') {
    console.log('Q!');
    Q.style.backgroundColor = '#f8d241';
    // q.sample[0].play();
    q.sample.play();
  } else if
    (e.code === 'KeyW') {
    console.log('W!');
    W.style.backgroundColor = '#f8d241';
    Sa2.sample.play();
  } else if (e.code === 'KeyE') {
    console.log('E!');
    E.style.backgroundColor = '#f8d241';
    Sa3.sample.play();
  } else if (e.code === 'KeyA') {
    console.log('A!');
    A.style.backgroundColor = '#f8d241';
    Sa4.sample.play();
  } else if (e.code === 'KeyS') {
    console.log('S!');
    S.style.backgroundColor = '#f8d241';
    Sa5.sample.play();
  } else if (e.code === 'KeyD') {
    console.log('D!');
    D.style.backgroundColor = '#f8d241';
    Sa6.sample.play();
  } else if (e.code === 'KeyZ') {
    console.log('Y!');
    Y.style.backgroundColor = '#f8d241';
    Sa7.sample.play();
  } else if (e.code === 'KeyX') {
    console.log('X!');
    X.style.backgroundColor = '#f8d241';
    Sa8.sample.play();
  } else if (e.code === 'KeyC') {
    console.log('C!');
    C.style.backgroundColor = '#f8d241';
    Sa9.sample.play();

  }



}
window.addEventListener('keyup', mach);
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



Q.addEventListener('click', addSequence);
W.addEventListener('click', addSequence);
E.addEventListener('click', addSequence);
A.addEventListener('click', addSequence);
S.addEventListener('click', addSequence);
D.addEventListener('click', addSequence);
Y.addEventListener('click', addSequence);
X.addEventListener('click', addSequence);
C.addEventListener('click', addSequence);


function addSequence(e) {
  if (sequencer.length < 8) {
    console.log(e, 'tid')
    sequencer.push(e.target.id);
    console.log(sequencer.length);
    sequencerArr[sequencer.length - 1].style.backgroundColor = '#3298DC';
    sequencerArr[sequencer.length - 1].innerHTML = e.target.id;

  }
}

//CONTROLLERS

//cancel button. 
canc.addEventListener('click', cancLast);

function cancLast(e) {
  if (sequencer.length >= 1) {
    e.preventDefault;
    sequencer.pop();
    // sequencer.pop();
    sequencerArr[sequencer.length].style.backgroundColor = 'white';
    sequencerArr[sequencer.length].innerHTML = sequencer.length + 1;


  }
}

//play button
//pause button 
