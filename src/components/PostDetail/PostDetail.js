import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {postId} = useParams()
    const [post, setPost] = useState({})
    
    useEffect(() => {
        const url1 = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url1)
        .then(response => response.json())
        .then(data => setPost(data))
    },[])

    const [comments, setCommnets] = useState([])

    useEffect(() =>{
        const url2 = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        fetch(url2)
        .then(response => response.json())
        .then(data => setCommnets(data))
    },[])

    return (

        <React.Fragment >
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: 'lightgray', height: '45vh' }}>
                    <Typography style = {{marginLeft: '20px'}}>
                        <p>{postId}</p>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </Typography>
                    
                </Typography>
                <br/>
                <h3><u>Comments</u></h3>

                {
                    comments.map(comment => <Comments comment = {comment}></Comments>)
                }


                    
            </Container>
        </React.Fragment>
        
    );
};

export default PostDetail;