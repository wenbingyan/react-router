### react-router-demo

>>  所有通过路由渲染的组件属性中会多三个属性 history， match， location 可以通过  this.props.history.push('/user/list') 跳转路径
### withRouter
- 把当前组件包装成一个Router组件
- 是一个高阶组件，通常通过路由渲染的页面会有三个属性 history， match， location，可以通过history做路由跳转。但是其他组件是没有这三个属性的，如果想通过js进行路由跳转，可以用withRouter实现
```
+import {withRouter} from 'react-router-dom'
+export default withRouter(组件名)
```

### NavLink 
NavLink 有个默认功能，自动为点击的添加一个class=“active”