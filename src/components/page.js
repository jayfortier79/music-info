import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

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


   