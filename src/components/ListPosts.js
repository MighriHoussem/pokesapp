import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        marginTop : "10%",
        height : "100%"
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    item : {
        color: "black",
        fontSize : "10px"
    }
}));

const ListPosts = (props) => {
    const classes = useStyles();
    const posts = props.posts.map((post, index) => {
        return (
            <ListItem button key={post.id}>
                <Link to={"/post/"+post.id}>
                    <ListItemText className={classes.item} primary={post.title}/>
                </Link>
            </ListItem>
        )
    });
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Posts
                </ListSubheader>
            }
            className={classes.root}
        >
            {posts}
        </List>
    );
};

export default ListPosts;
