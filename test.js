const padSel = document.getElementById('padSelect');
const sampleSel = document.getElementById('sampleSelect');
const btnSampleSel = document.getElementById('btn-sample-select');

btnSampleSel.addEventListener('click', selectSample);

function selectSample(){
  console.log(padSelect.value)
  (padSel.value).sample = (sampleSel.value).sample;
}
/*
SAMPLE SELECTOR

We need to create an object for each pad with an empty property called `sample`. The value of it will be time to time selected by the user and input to the app trough a button

in to the function drum, we will change tis line of each if statement:

- Sa3.sample.play();

with for example:

- x.sample.play()
- objectname + propertyname + play()


*/

let q = {
  id:1,
  sample: undefined


}

//for testing need to add button for selecting samples aside of the two dropdowns