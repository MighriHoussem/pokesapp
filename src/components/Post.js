import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {deletePost} from "../actions/postActions";

class Post extends  Component
{
  // state = {
  //     post : null
  // };

    // componentDidMount() {
    //   let id = this.props.match.params.post_id;
    //   console.log(id);
    //   console.log(this.props);
    //
    //   axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(res=>{
    //     this.setState({
    //         post : res.data
    //     });
    //     console.log(this.state);
    //   }).catch(error=>{
    //       console.log(error);
    //   })
    // };

    handleClick = () =>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push("/");
    };

    render() {
        console.log(this.props);
        const post  = this.props.post ? (
            <div className="post">
                <h4 className="center-align">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button className="btn grey" onClick={this.handleClick}>
                    Delete Post
                </button>
            </div>
        ):(
            <div className="container">Loading Post...</div>
        ) ;

        return (
            <div className="container">
                {post}
            </div>
        );
    }

}


const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id === id)
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        deletePost : (id)=>{ dispatch(deletePost(id))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Post);