const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);


//варіант1. коли небагато збирати і можна вручну або 
  function onFormSubmit(event) {
    event.preventDefault();
  
    const formElements = event.currentTarget.elements;
    
    const mail = formElements.email.value;
    const password = formElements.password.value;
    
    const formData = {
      mail, password,
    }
    if (mail === '' || password === '') {
      return alert('Заповніть, будь ласка, необхідні поля');
    }
    console.log(formData);
    form.reset();
  }


//  або варіянт 2 з formData
//  function onFormSubmit(event) {
//    event.preventDefault();
//  
//    const formData = new FormData(event.currentTarget);
//  
//    formData.forEach((value, key) => {
//      if (value === '') {
//        return alert('Заповніть, будь ласка, необхідні поля');
//      } 
//      console.log('onFormSubmit -> key', key);
//      console.log('onFormSubmit -> value', value);
//    });
//  form.reset();
//  
//}
