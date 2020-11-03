/**
 * submit form executed on form submission
 * @param  {[type]} formData json object of form values
 * @return {[type]}   [description]
 */
const submitForm = (formData) => {
  /**
   * Form data to be sent to server as JSON
   */
  
  console.log(formData);
  userAction(formData);
}

const userAction = async (jsonData) => {
  const response = await fetch('https://o6qtr3.apps.connect.claris.com/api/webhook/v1/webformhook/catch', {
    method: 'POST',
    body: JSON.stringify(jsonData), // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}

/**
 * Init method
 * @return {[type]} [description]
 */
window.onload = () => {
  let results = {};

  const first = document.querySelector('#first');
  const last = document.querySelector('#last');
  const email = document.querySelector('#email');
  const country = document.querySelector('#country');
  const form = document.querySelector('form');
  const apiHeader= "webForm";

    

  first.oninput = e => results['first'] = first.value;
  last.oninput = e => results['last'] = last.value;
  email.oninput = e => results['email'] = email.value;
  country.oninput = e => results['country'] = country.value;
  results['apiHeader']=apiHeader;
  

  form.onsubmit = e => {
    e.preventDefault();
    submitForm(results);
  }
}
