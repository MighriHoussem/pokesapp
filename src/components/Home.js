import React from "react";

const Home = (props)=>
{
    //console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about');
    // },2000);
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <p>
                Welcome to React Router Home Page
            </p>
        </div>

    );
};

export default Home;