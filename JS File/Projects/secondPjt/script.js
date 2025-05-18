const form = document.querySelector('form')

// this use cases will give us a empty value
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e)=> {
  e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0  || isNaN(height) ){ 
results.innerHTML = 'Please Give A valid Height';
}else if(weight === '' || weight < 0  || isNaN(weight) ){ 
results.innerHTML = 'Please Give A valid Weight';
}else{
  const bmi = (weight / ((height*height) /10000)).toFixed(2)
  results.innerHTML = `<sapn> Your BMI - ${bmi}</span>`
}

})


