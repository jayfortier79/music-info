import axios from 'axios';
import {useState, useEffect} from "react";
import Place from './Place'
require('dotnev').config()

const apikey= process.env.REACT_APP_API_KEY

export default function App () {

  console.log(apikey)
 
  const [quote, setQuote] = useState([]);
  
  
  useEffect(() => {
    var category = 'happiness';
     axios.get('https://api.api-ninjas.com/v1/quotes?category=' + category, {
      headers: { 
        "X-Api-Key": apikey,
      }
    } ).then(function access(response) {
      setQuote(response.data)
      },
     /*function(error, response, body) {
      if(error) return console.error('Request failed:', error);
      else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
      else console.log(body)
    }*/
    
    );
  }, [])

  function getQuote () {
    let category = 'happiness';
    axios.get('https://api.api-ninjas.com/v1/quotes?category=' + category, {
     headers: { 
       "X-Api-Key": process.env.REACT_APP_API_KEY,
     }
   } ).then(function access(response) {
      setQuote(response.data)
      
     },
 )};

  /*const Setstate1 = () => {
    const [posts, setPosts] = useState([]);
    return <div>Setstate1</div>;
  }
  
  /*axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(function access(response) {
console.log(response)
})
 .catch(function (error) {
console.log(error);
 }) 

  useEffect(() => {
  
  }, [])
  const Setstate1 = () => {
    const [posts, setPosts] = useState([]);
    return <div>Setstate1</div>;
  }
  
const fetchPosts = async() =>{
      const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
   setPosts(responsePosts.data);
  }

  const fetchPosts = async() =>{
    const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
 fetchPosts(responsePosts.data);
}
*/



  return (
      <div className='App'>
         <body>
  <header>
    <h1>Happy Quotes</h1>
    <h2>Happy Time</h2> 
    </header>
<button onClick={getQuote(quote)}>Happiness Quote</button>

    </body>
    <p>{Place()}</p>
    
      </div>
  )
}

