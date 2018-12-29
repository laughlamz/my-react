import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav from "./components/TopNav";
import Introduce from "./pages/Introduce";
import Contact from "./pages/Contact";

import LazyLoad from "./components/LazyLoad";


function App() {
    return (
        <Router>
            <div>
                <TopNav />
            
                <Route path="/" exact component={() => <h1>Home</h1>} />
                <Route path="/blog" exact component={() => <h1>Blog</h1>} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/login" exact component={() => <h1>Login</h1>} />
                <Route path="/lazyload" exact component={LazyLoad} />
            </div>
        </Router>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
