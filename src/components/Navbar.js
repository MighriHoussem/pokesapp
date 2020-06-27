import React from "react";
import {NavLink , withRouter} from "react-router-dom";

const Navbar = (props)=>
{
    console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about');
    // },2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke's times</a>
                <ul className="right">
                    <li><NavLink to="/" className="">Home</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>

    );
};

export default withRouter(Navbar);