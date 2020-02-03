import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from './components/Home';


class App extends Component{
    render(){
        return (
        <HashRouter>
            <main>
            <Switch>
            <Route exact path='/' component={Home} />
            </Switch>
            </main>
        </HashRouter>
        )
    }
}

export default App;
