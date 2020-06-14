import React from "react";
import RainBow from "../hoc/RainBow";

const About = (props)=>
{
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>
                Welcome to React Router About Page
            </p>
        </div>

    );
};

export default RainBow(About);