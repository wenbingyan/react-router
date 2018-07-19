import React from 'react';
import {
    Route,
    HashRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';
//Switch 组件容器。  Route 匹配后就停止 -> 只匹配一个
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import User from '../containers/User'
import App from '../containers/App'
import ProtectedRoute from '../containers/ProtectedRoute'

const routes = (
    <Router>
        <App>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <Route path="/home" component={Home}/>
            <Route path='/profile' component={Profile}/>
            <ProtectedRoute path='/user' component={User}/>
            {/* <Route component={Home} /> 不更改路径-》配合switch使用 */}  
            <Redirect to="/" />
        </Switch>
        </App>
    </Router>
);
export default routes