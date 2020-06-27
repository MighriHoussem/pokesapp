import React,{Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import PoketBall from "../../src/poketBall.png";
import {connect} from "react-redux";

class Home extends Component
{
    //console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about');
    // },2000);
    constructor(props)
    {
        super(props);
        // this.state = {
        //   posts : []
        // };
    }
    // componentDidMount() {
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
    //         console.log(response);
    //         this.setState({
    //            posts: response.data.slice(0,10)
    //         });
    //         console.log(this.state);
    //     }).catch(error=>{
    //         console.log(error);
    //     });
    // };

    componentDidUpdate(prevProps, prevState, snapshot) {
    };

    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postsList = posts.length? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={PoketBall} alt={"a PoketBall"} />
                        <div className="card-content">
                            <Link to={"/postHome/"+post.id}>
                            <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className={"center"}> No Posts yet!</div>
        ) ;
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>
                    Welcome to React Router Home Page
                </p>
                {postsList}
            </div>

        );
    };


}
const mapStateToProps = (state)=> {
    return {
        posts : state.posts
    }
};
const  mapDispatchToProps = ()=> {

};
export default connect(mapStateToProps)(Home);