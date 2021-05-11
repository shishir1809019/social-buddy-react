import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          
          <Route path="/post/:postId">
                <PostDetail/>
          </Route>
          <Route exact path="/">
                <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
