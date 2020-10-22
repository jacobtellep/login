import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Header from './Components/Header';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
