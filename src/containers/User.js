import React from 'react';
import {Link, Route} from 'react-router-dom';
import Add from './Add';
import List from './List';

export default class Home extends React.Component{
    render(){
        return <div>
            <div className="col-md-3">
                <nav className="nav nav-staked">
                    <li><Link to="/user/add">添加</Link></li>
                    <li><Link to="/user/list">列表</Link></li>
                </nav>
            </div>
            {/* 所有通过路由渲染的组件属性中会多三个属性 history， match， location
                可以通过  this.props.history.push('/user/list') 跳转路径
            */}
            <div className="col-md-9">
                <Route path="/user" exact={true} component={Add}  />
                <Route path="/user/add" component={Add} />
                <Route path="/user/list" component={List} />
            </div>
        </div>
    }
}