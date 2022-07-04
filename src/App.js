import './App.css';
import React from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import About from "./components/About";
import CV from "./components/CV";

function App() {
  ReactDOM.render((
      <Router>
        <div className="page">
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/cv" component={CV} />
                <Redirect to="/" />
            </Switch>
        </div>
      </Router>
  ), document.getElementById('root'));
}

export default App;
