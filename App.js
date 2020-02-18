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
import LoginForm from './components/LoginForm';
import RegForm from './components/RegForm';
import LogOutForm from './components/LogOutForm';


class App extends Component{
    render(){
        return (
        <HashRouter>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginForm} />
            <Route path='/registration' component={RegForm} />
            <Route path='/logout' component={LogOutForm} />
            </Switch>
        </HashRouter>
        )
    }
}

export default App;
