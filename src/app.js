import React, { Component } from 'react';
import Navigation from './component/Navigation';
import Registration from './component/registration';
import Login from './component/login';
import {Route,Switch,Router} from 'react-router-dom'
import Home from './component/home'
import history from './history';
import Privateroute from './privateroute'
import Post from './component/post'
import './app2.css'
import Details from './component/details'

import Cpost from './component/cpost'
class App extends Component {

render(){

return(
<div>  

<Router history={history}>
<Navigation/>
<Switch>
< Privateroute path="/post/:pId" component={Details} />
<Privateroute path="/" component={Home} exact={true} />
<Route path="/regi" render={() => {
  return <Registration/>
}} />
<Route path="/login" render={() => {
  return <Login/>
}} />
<Privateroute path="/post" render={() => {
  return <Post/>
}} />
<Privateroute path="/cpost" render={() => {
  return <Cpost/>
}} />
</Switch></Router>

</div>

)
}
}
export default App;