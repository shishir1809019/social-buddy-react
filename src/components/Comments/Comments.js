import React, { useEffect, useState } from 'react';

const Comments = (props) => {
    const {name, email, body,id} = props.comment

    const [pictures, setPictures] = useState([])

    // useEffect(() =>{
    //     const url3 = `https://randomuser.me/api/portraits/women/${id}.jpg`
    //     fetch(url3)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // },[])

    return (
        <div style = {{borderBottom: '1px solid lightgray'}}>
            <br/>
            <img src='https://randomuser.me/api/portraits/women/2.jpg' alt=""/>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>{body}</p> 
        </div>
    );
};

export default Comments;