import axios from 'axios';
import Quoteme from './Quoteme.js'
import {useState, useEffect} from "react";


console.log(process.env.REACT_APP_API_KEY)


export default function App () {

 
 
  const [posts, setPosts] = useState([]);
  var category = 'happiness';
  const access = axios.get('https://api.api-ninjas.com/v1/quotes?category=' + category).then(function access(response) {
    headers: { 
    };  axios.defaults.headers.common = {
      "X-API-Key": "REACT_APP_API_KEY",
    };
    },
   function(error, response, body) {
    if(error) return console.error('Request failed:', error);
    else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    else console.log(body)
  });
  
  useEffect(() => {
  
  }, [])
  const Setstate1 = () => {
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
    <h1>Sartre's List</h1>
    <h2></h2> 
    </header>
<button onclick={Quoteme}>click me!</button>
    </body>
    
    
      </div>
  )
}

