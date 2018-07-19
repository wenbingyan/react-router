import React from 'react';
import {withRouter} from 'react-router-dom'

class ProtectedRoute extends React.Component{
    componentWillMount(){
        setTimeout(() => {
            let flag = localStorage.getItem('LOGIN');
            if(!flag){
                this.props.history.push('/')
            }
        }, 1000);    
    }
    render(){
        let {path,component:Component} = this.props     
        return <div>
            ProtectedRoute
        </div>
    }
}
export default withRouter(ProtectedRoute)