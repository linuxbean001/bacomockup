import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import RouterOutlet from './components/RouterOutlet';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
          <div>
            <Switch>
              <Route path='/' component={RouterOutlet} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
