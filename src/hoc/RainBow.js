import React from "react";

const RainBow = (WrappedComponent)=> {
    const colours = ["red", "pink", "orange", "blue", "green", "yello"];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + "-text";

    return (props)=>{
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    };
};
export default RainBow;