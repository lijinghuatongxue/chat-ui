import React from 'react';
import ReactDOM from 'react-dom';
import chat from './components/chat';
import './App.css';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
const hashHistory = createHashHistory();

function App() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={chat}/>
    </Router>
    );
}

export default App;

