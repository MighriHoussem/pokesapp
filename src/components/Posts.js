import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import ListPosts from "./ListPosts";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostDetails from "./PostDetails";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Posts = (props) => {
    const [posts,setPosts] = useState([]);
    const [currentPost,setCurrentPost] = useState(null);

    const classes = useStyles();

    //Replace componentDidMount in class
    useEffect(()=>{
        if(!props.match.params.idPost)
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
        setPosts(response.data.slice(0,5));
        setCurrentPost(null);
        console.log(posts);
        console.log(response.data.slice(0,10));
            console.log("effect posts");

        }).catch(error=>{
            console.log(error);
        })
    },[]);

    // useEffect(()=>{
    //     if(props.match.params.idPost)
    //         axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
    //             let postsView = response.data.slice(0,5);
    //             setPosts(postsView);
    //             let current = postsView.filter(post=>post.id === props.match.params.idPost);
    //             setCurrentPost(current);
    //             console.log(posts);
    //             console.log(response.data.slice(0,10));
    //         }).catch(error=>{
    //             console.log(error);
    //         });
    // },[]);

    //Replace componentWillReceiveProps in class
    useEffect(()=>{
        if(props.match.params.idPost && props.match.params.idPost !== undefined)
            if(posts.length === 0) {
                axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
                    let postsView = response.data.slice(0, 5);
                    if (posts.length === 0)
                        setPosts(postsView);
                    let current = postsView.filter(post => post.id == props.match.params.idPost);
                    console.log("currentPost Parent", current);
                    setCurrentPost(current[0]);
                    console.log(posts);
                    console.log(response.data.slice(0, 10));
                    console.log("effect idPost");
                }).catch(error => {
                    console.log(error);
                });
            }else
            {
                let current = posts.filter(post => post.id == props.match.params.idPost);
                console.log("currentPost Parent 2", current);
                setCurrentPost(current[0]);
            }

    },[props.match.params.idPost]);



    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={4}>
                    <ListPosts
                        posts={posts}
                        currentPost={currentPost}
                    />
                </Grid>
                <Grid item xs={8}>
                    {currentPost &&
                    <PostDetails
                        currentPost={currentPost}
                    />}
                </Grid>

            </Grid>
        </div>
    );
};

export default withRouter(Posts);
