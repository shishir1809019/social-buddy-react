import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h2>Total posts : {posts.length}</h2>
            {
                posts.map(post => <Posts post = {post}></Posts>)
            }
        </div>
    );
};

export default Home;