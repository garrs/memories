import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux'

import {getPosts} from '../actions/posts'
import Posts from './Posts/Posts';
import Form from './Form/Form';
import neurons from '../images/neurons.jpg';
import useStyles from '../styles'

const Dashboard = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth ="lg">
            <AppBar className ={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={neurons} alt="neurons" width="130"height="100"/>
                <button onClick={() =>  { document.location.href='/game';}} type="button">Game</button>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>  
                        <Grid item xs ={12} sm = {7}>
                             <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs ={12} sm = {4}>
                             <Form currentId ={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default Dashboard;