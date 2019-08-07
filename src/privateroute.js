import React, { Component } from 'react';
import{Route,Redirect} from 'react-router-dom'
import checkuser from './auth';
class Privateroute extends Component {


    render(){
        let val=(<Route   {...this.props}/>)

        if(!checkuser()){
        val=<Redirect to="/" />
        }
        return (
        <span>{val}</span>
         )
        

    }
}
export default Privateroute;