import React,{Component} from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import {BrowserRouter,Route} from "react-router-dom";


class App extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
           <BrowserRouter>
               <div className="App">
                   <Navbar/>
                   <Route  exact path="/" component={Home} />
                   <Route path="/contact" component={Contact} />
                   <Route path ="/about" component={About} />

               </div>

           </BrowserRouter>
        );
    }

}

export default App;
