import React,{Component} from "react";
import axios from "axios";

class Post extends  Component
{
  state = {
      post : null
  };

    componentDidMount() {
      let id = this.props.match.params.post_id;
      console.log(id);
      console.log(this.props);

      axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(res=>{
        this.setState({
            post : res.data
        });
        console.log(this.state);
      }).catch(error=>{
          console.log(error);
      })
    };


    render() {
        const post  = this.state.post? (
            <div className="post">
                <h4 className="center-align">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ):(
            <div className="container">No post!</div>
        ) ;

        return (
            <div className="container">
                {post}
            </div>
        );
    }

}

export default  Post;