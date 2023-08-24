import axios from 'axios';
import Quoteme from '../components/Quoteme'
import {useState, useEffect} from "react";


console.log(process.env.REACT_APP_API_KEY)


export default function App () {

 
 
  const [posts, setPosts] = useState([]);

  const access = axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(function access(response) {
console.log(response)
})
 .catch(function (error) {
console.log(error);
 }) 

  useEffect(() => {
  
  }, [])
 /* const Setstate1 = () => {
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

