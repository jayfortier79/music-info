import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import App from "../App";

const apiKey = (process.env.REACT_APP_API_KEY);

export default function Quoteme() {
  const apiKey = process.env.REACT_APP_API_KEY;
const request = require('request');
let category = 'happiness';
request.get({
  url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
  headers: {
    'X-Api-Key': apiKey
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
}
/*
export default function Page() {

const [posts, setPosts] = useState([]);

const fetchPosts = async() =>{
    const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
 setPosts(responsePosts.data);
}

useEffect(() => {

}, [])

return ( 
    
   <p>
   {
    posts.map((post, index) =>
    <div key={index}>
    {index}. {post.title})
    </div>
)
   }
</p>

)}

*/


   