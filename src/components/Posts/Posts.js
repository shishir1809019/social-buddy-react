import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      border: '1px solid black',
      marginBottom: '10px'
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      
    },
    pos: {
      marginBottom: 12,
    },
  });


const Posts = (props) => {
    const {id,title} = props.post
    const history = useHistory()

    const handleClick = (postId) => {
        const url = `/post/${postId}`
        history.push(url)
    }

    const classes = useStyles();
  
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {id}
                </Typography>
                
                
                <Typography variant="body2" component="p">
                {title}
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick = {() => handleClick(id)} style={{border: '1px solid gray'}} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Posts;