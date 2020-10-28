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
  const response = await fetch('https://76dff6dc6fd3919dda3db890a710b183.m.pipedream.net', {
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

  first.oninput = e => results['first'] = first.value;
  last.oninput = e => results['last'] = last.value;
  email.oninput = e => results['email'] = email.value;
  country.oninput = e => results['country'] = country.value;

  form.onsubmit = e => {
    e.preventDefault();
    submitForm(results);
  }
}
