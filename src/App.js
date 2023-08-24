import axios from 'axios';
import Page from './components/page'






export default function app () {

  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(process.env.REACT_APP_API_KEY);

  let category = 'happiness'
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: { 'X-Api-Key': apiKey},
      contentType: 'application/json',
      success: function(result) {
          console.log(result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
   
  return (
      <div className='App'>
         <body>
  <header>
    <h1>Sartre's List</h1>
    <h2>Better-DressedPeople</h2> 
    </header>
    </body>
    <Page/>
    <p>{Page}</p>
      </div>
  )
}

