
        
     



/*

import axios from 'axios';
import {useState, useEffect} from "react";


function Quote () {
    var category = 'happiness';
     axios.get('https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: { 
        "X-Api-Key": process.env.REACT_APP_API_KEY,
        .then(function access(response){
            setQuote(response.data)
        }





export default function Quote () {
    var category = 'happiness';
     axios.get('https://api.api-ninjas.com/v1/quotes?category=' + category, {
      headers: { 
        "X-Api-Key": process.env.REACT_APP_API_KEY,
      }
    } ).then(function access(response) {
        
      setQuote(response.data)
      },
     function(error, response, body) {
      if(error) return console.error('Request failed:', error);
      else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
      else console.log(body)
    }
    
    )};


*/












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


/*
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


let cqqqqqategory = 'happiness'
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
   */

  
/*

import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

const apiKey = (process.env.REACT_APP_API_KEY);

export default function Quoteme() {
  const apiKey = process.env.REACT_APP_API_KEY;
//const request = require('request');//
let category = 'happiness';
axios.get({
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


   