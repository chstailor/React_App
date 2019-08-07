import React, { Component } from 'react';
import Panel from '../component/panel'
import serializeForm from 'form-serialize'
import history from '../history';
import checkuser from '../auth';
import {tognav} from '../store/action/anav'
import { connect } from 'react-redux'

class Login extends Component {
    state={
        message:{
            msg:""
        }
      }
log=(event)=>{
const that=this
fetch('http://localhost:3000/api/authenticate', {
            method: 'post',
            body: serializeForm(event.target),
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }).then(function (response) {
            response.json().then(data =>  { 
                console.log(data) ;
                if(data.success){
                    window.localStorage.setItem("token",data.token)
                    //that.props.dispatch(tognav(true));
                    history.push("/post");
           
                }
                    else{
                        console.log(data.message);
                        that.setState((pre) => {
                            return {
                                message: {
                                 msg:data.message
                                }
                            }
                        });
                   

                    }
             })
        })
    
        event.preventDefault();
   
}



    render(){
       
        const content = (
            <div>
            <form onSubmit={this.log}>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="UserName" name="username" />

                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Password" name="password" />
                </div>
                
                <button className="btn btn-primary" >Login</button>
            </form>
            <br/>
         <br/>
            <div className="row show-hide-message" >
            
            <div>{this.state.message.msg}           </div>
             </div>
            </div>
        )

        return <Panel name="Login" body={content} />




    }
}

export default connect()(Login);