import React from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends React.Component{
    render(){
        return (<nav className="navbar">
            <span><Link to="/">首页</Link></span>
            <span><Link to={{pathname:'/profile'}}>个人中心</Link></span>
            <span><Link to="/user">用户</Link></span>
      </nav>)
    }
}