import React,{Component} from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import {BrowserRouter,Route,Switch,Router} from "react-router-dom";
import Post from "./components/Post";
import rootReducer from "./reducers/rootReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Posts from "./components/Posts";

const store = createStore(rootReducer);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                     <div className="App">
                         <Navbar/>
                        <Switch>
                            <Route  exact path="/" component={Home} />
                            <Route path="/contact" component={Contact} />
                            <Route path ="/about" component={About} />
                            <Route exact path="/postHome/:post_id" component={Post}/>
                            <Route path="/posts" component = {Posts}/>
                            <Route path="/post/:idPost" component={ Posts}/>
                        </Switch>
                     </div>

                </BrowserRouter>
            </Provider>
        );
    }

}

export default App;
