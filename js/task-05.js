const imprintName = document.querySelector('#name-output');
const inputName = document.querySelector('#name-input');

inputName.addEventListener('input', (event) => {
  if (event.currentTarget.value === "") {
  imprintName.textContent = "Anonymous";
  return;
}
imprintName.textContent = event.currentTarget.value;
})



  
  
  
  
  
  
  
  
//inputName.addEventListener('input', (event) => imprintName.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value);
